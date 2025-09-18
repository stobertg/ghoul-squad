import React, { useEffect, useRef, useState } from 'react'
import { styled, keyframes } from '@theme'
import { Heading } from '@components'

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
  width: '100%'
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
    pointerEvents: 'none',

    '&.fadeOut': {
      animation: `${fadeOutKF} 600ms ease forwards`
    },
    '&.fadeIn': {
      animation: `${fadeInKF} 600ms ease forwards`
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
}

export const Hero = ({
    title,
    subTitle,
    image,
    video,
    videos
  }:HeroProps) => {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [index, setIndex] = useState(0)
  const FADE_MS = 400
  const [fading, setFading] = useState(false)
  const [fadingIn, setFadingIn] = useState(true)

  // Normalize sources: prefer `videos` if provided; otherwise fall back to single `video`.
  const sources: string[] = React.useMemo(() => {
    if (Array.isArray(videos) && videos.length > 0) return videos
    return video ? [video] : []
  }, [videos, video])

  // When source changes, ensure autoplay resumes (especially on Safari/iOS).
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    setFading(false)
    setFadingIn(true)
    setTimeout(() => setFadingIn(false), FADE_MS)
    // Force restart when the src changes
    el.load()
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
    if (sources.length <= 1) return // Nothing to advance
    setFading(false)
    setIndex((i) => (i + 1) % sources.length)
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
      <HeroText>
        <Heading heavy size="l7" title={ title } />
        <Heading color="secondary" title={ subTitle } />
      </HeroText>

      { image && (
        <HeroImage>
          <img src={ image } />
        </HeroImage>
      )}

      { sources.length > 0 && (
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
            <source key={ sources[index] } src={ sources[index] } type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </VideoWrap>
      )}
    </HeroWrap>

  )
}
