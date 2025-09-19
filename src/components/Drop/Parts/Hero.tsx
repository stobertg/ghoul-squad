import React, { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from '@theme'
import { Heading } from '@components'

const fadeOutText = keyframes({
  '0%': { opacity: 1, transform: 'translateY( 0 )' },
  '90%': { opacity: 0, transform: 'translateY( -30% )' },
  '100%': { opacity: 0, transform: 'translateY( 30% )' }
})

const fadeInText = keyframes({
  '0%': { opacity: 0, transform: 'translateY( 30% )' },
  '100%': { opacity: 1, transform: 'translateY( 0 )' }
})

// For the master container of the hero section of the drop section
// This holds the title of the characters on the top of the container and the image/video below

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  position: 'relative',
  width: '100%',
})

const HeroText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%',
  '&.fadeOut': { 
    '> *:first-child': { animation: `${fadeOutText} 600ms ease forwards` }
  },
  '&.fadeIn': {
     '> *:first-child': { animation: `${fadeInText} 600ms ease forwards` }
  }
})

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 300,

  img: {
    display: 'flex',
    mixBlendMode: 'multiply'
  }
})

const fadeOutKF = keyframes({
  '0%': { opacity: 1, transform: 'scale( 1 )' },
  '100%': { opacity: 0, transform: 'scale( 0.9 )' }
})

const fadeInKF = keyframes({
  '0%': { opacity: 0, transform: 'scale( 0.9 )' },
  '100%': { opacity: 1, transform: 'scale( 1 )' }
})

// For the master container of the of the video within the hero section
// This show the character animating, below the title

const VideoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 340,

  // For the sizing of the video to be in the center of the parent container
  // This addresses the actual sizing of the video within the container

  video: {
    position: 'absolute',
    maxWidth: 280,
    width: '100%',
    height: 'auto',
    display: 'block',
    background: 'transparent',
    pointerEvents: 'none',

    '&.fadeOut': {
      animation: `${fadeOutKF} 500ms ease forwards`
    },
    '&.fadeIn': {
      animation: `${fadeInKF} 500ms ease forwards`
    }
  }
})

interface HeroProps {
  title?: string
  subTitle?: string
  image?: string
  /** Single video source (backwards-compatible). */
  video?: string
  /** Sequence of videos to play one-at-a-time (loops the list). */
  videos?: string[]
  /** Single HEVC-with-alpha source for Safari/iOS fallback. */
  hevcVideo?: string
  /** Sequence of HEVC-with-alpha videos matching `videos` index. */
  hevcVideos?: string[]
  /** Sequence of titles matching the `videos` array. */
  titles?: string[]
}

export const Hero = ({
    title,
    subTitle,
    image,
    video,
    videos,
    hevcVideo,
    hevcVideos,
    titles
  }:HeroProps) => {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [index, setIndex] = useState(0)
  const FADE_MS = 400
  const [fading, setFading] = useState(false)
  const [fadingIn, setFadingIn] = useState(true)

  // Runtime feature-detect: can this browser play HEVC (hvc1) in MP4?
  const supportsHevc = React.useMemo(() => {
    if (typeof document === 'undefined') return false
    const probe = document.createElement('video')
    // Safari reports 'probably'/'maybe' for hvc1; Chromium/Firefox return ''
    return !!probe.canPlayType && probe.canPlayType('video/mp4; codecs="hvc1"') !== ''
  }, [])

  // Normalize sources: prefer `videos` if provided; otherwise fall back to single `video`.
  const sources: string[] = React.useMemo(() => {
    if (Array.isArray(videos) && videos.length > 0) return videos
    return video ? [video] : []
  }, [videos, video])

  const hevcSources: string[] = React.useMemo(() => {
    if (Array.isArray(hevcVideos) && hevcVideos.length > 0) return hevcVideos
    return hevcVideo ? [hevcVideo] : []
  }, [hevcVideos, hevcVideo])

  const currentTitle = (Array.isArray(titles) && titles[index]) || title

  // When source changes, ensure autoplay resumes (especially on Safari/iOS).
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    setFading(false)
    setFadingIn(true)
    setTimeout(() => setFadingIn(false), FADE_MS)
    // Force restart when the src changes
    if ((sources.length > 0 || hevcSources.length > 0)) {
      el.load()
    }
    const play = () => {
      const p = el.play()
      if (p && typeof p.then === 'function') {
        p.catch(() => {
          // Autoplay can fail on some browsers without user gesture; ignore.
        })
      }
    }
    // Try on metadata ready to reduce flashes
    const onLoaded = () => play()
    el.addEventListener('loadedmetadata', onLoaded)
    play()
    return () => {
      el.removeEventListener('loadedmetadata', onLoaded)
    }
  }, [index])

  const advance = () => {
    const laneLength = Math.max(sources.length, hevcSources.length)
    if (laneLength <= 1) return // Nothing to advance
    setFading(false)
    setIndex((i) => (i + 1) % laneLength)
  }

  const handleTimeUpdate = () => {
    const el = videoRef.current
    if (!el || !isFinite(el.duration)) return
    const remaining = el.duration - el.currentTime
    if (remaining <= FADE_MS / 1000 && !fading) {
      setFading(true)
    }
  }

  return(

    <HeroWrap>
      <HeroText className={ fading ? 'fadeOut' : fadingIn ? 'fadeIn' : undefined }>
        <Heading heavy size="l7" title={ currentTitle } />
        <Heading color="secondary" title={ subTitle } />
      </HeroText>

      { image && (
        <HeroImage>
          <img src={ image } />
        </HeroImage>
      )}

      { (sources.length > 0 || hevcSources.length > 0) && (
        <VideoWrap>
          <video
            ref={ videoRef }
            autoPlay
            muted
            playsInline
            onTimeUpdate={ handleTimeUpdate }
            onEnded={ advance }
            onError={ advance }
            className={ fading ? 'fadeOut' : fadingIn ? 'fadeIn' : undefined }
          >
            { supportsHevc && hevcSources[index] && (
              // Browser can play HEVC: offer HEVC first (alpha on Safari/iOS/macOS), then WebM as a secondary option
              <>
                <source
                  key={`hevc-${hevcSources[index]}`}
                  src={ hevcSources[index] }
                  type={ `video/mp4; codecs=\"hvc1\"` }
                />
                { sources[index] && (
                  <source
                    key={`webm-${sources[index]}`}
                    src={ sources[index] }
                    type={ `video/webm; codecs=\"vp9\"` }
                  />
                )}
              </>
            )}

            { !supportsHevc && sources[index] && (
              // Browser cannot play HEVC: serve only WebM to avoid HEVC probes that can block playback
              <source
                key={`webm-only-${sources[index]}`}
                src={ sources[index] }
                type={ `video/webm; codecs=\"vp9\"` }
              />
            )}

            { supportsHevc && !sources[index] && hevcSources[index] && (
              // No WebM provided for this index; fall back to HEVC when supported
              <source
                key={`hevc-only-${hevcSources[index]}`}
                src={ hevcSources[index] }
                type={ `video/mp4; codecs=\"hvc1\"` }
              />
            )}
            Your browser does not support the video tag.
          </video>
        </VideoWrap>
      )}
    </HeroWrap>

  )
}
