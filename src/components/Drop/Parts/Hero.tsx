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
    opacity: 0,
    transition: 'opacity 300ms ease',

    '&.active': { opacity: 1 },

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
  const videoRefs = useRef<HTMLVideoElement[]>([])
  const prevIndexRef = useRef<number>(0)
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

  // Pick the lane this browser will actually play (prevents wasted preloads)
  const selectedLane: string[] = React.useMemo(() => {
    const lane = (supportsHevc && hevcSources.length > 0) ? hevcSources : sources
    return lane
  }, [supportsHevc, hevcSources, sources])

  const currentTitle = (Array.isArray(titles) && titles[index]) || title

  // When source changes, ensure autoplay resumes (especially on Safari/iOS).
  useEffect(() => {
    setFading(false)
    setFadingIn(true)
    const t = setTimeout(() => setFadingIn(false), FADE_MS)
    return () => clearTimeout(t)
  }, [index])

  // Preload subsequent videos in the background so advancing is instant in production
  useEffect(() => {
    if (selectedLane.length === 0) return
    // decide MIME for preload links based on lane type
    const isHevcLane = (supportsHevc && hevcSources.length > 0)
    const mime = isHevcLane ? 'video/mp4; codecs="hvc1"' : 'video/webm; codecs="vp9"'

    // Helper: ensure a single <link rel="preload" as="video"> exists for a given href
    const ensureVideoPreload = (href: string, type?: string) => {
      if (typeof document === 'undefined') return
      if (!href) return
      const sel = `link[rel="preload"][as="video"][href="${href}"]`
      if (document.head.querySelector(sel)) return
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'video'
      link.href = href
      if (type) link.type = type
      document.head.appendChild(link)
    }

    // Preload the next 2 items via <link rel="preload"> to get high priority over H2/HTTP3
    for (let step = 1; step <= 2 && step < selectedLane.length; step++) {
      const nextIdx = (index + step) % selectedLane.length
      ensureVideoPreload(selectedLane[nextIdx], mime)
    }

    // Also create off-DOM <video> elements with preload=auto to warm browser cache reliably
    const warmers: HTMLVideoElement[] = []
    for (let step = 1; step < selectedLane.length; step++) {
      const nextIdx = (index + step) % selectedLane.length
      const src = selectedLane[nextIdx]
      const v = document.createElement('video')
      v.muted = true
      v.preload = 'auto'
      v.src = src
      try { v.load() } catch {}
      warmers.push(v)
    }

    return () => {
      // clean up references; let cache keep the response
      warmers.forEach(v => { try { v.removeAttribute('src'); /* @ts-ignore */ v.srcObject = null } catch {} })
    }
  }, [index, selectedLane, supportsHevc, hevcSources.length])

  useEffect(() => {
    const vids = videoRefs.current
    const prev = prevIndexRef.current
    if (!vids || vids.length === 0) return

    // Pause previous, clear classes
    const prevEl = vids[prev]
    if (prevEl && prev !== index) {
      try { prevEl.pause() } catch {}
      prevEl.classList.remove('active', 'fadeIn', 'fadeOut')
    }

    // Play current, ensure active class
    const curEl = vids[index]
    if (curEl) {
      curEl.classList.add('active')
      // On iOS/Safari autoplay can be finicky; attempt play on metadata
      const onLoaded = () => { try { curEl.play() } catch {} }
      curEl.addEventListener('loadedmetadata', onLoaded, { once: true })
      try { curEl.play() } catch {}
    }

    prevIndexRef.current = index
  }, [index])

  useEffect(() => {
    const first = selectedLane[0]
    if (!first) return
    // Touch the first video element to keep it warm in memory for loop restarts
    const v0 = videoRefs.current[0]
    if (v0) { try { v0.load() } catch {} }
  }, [selectedLane])

  const advance = () => {
    if (selectedLane.length <= 1) return
    setFading(false)
    setIndex((i) => (i + 1) % selectedLane.length)
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

      { selectedLane.length > 0 && (
        <VideoWrap>
          { selectedLane.map((src, i) => (
            <video
              key={ src }
              ref={ el => { if (el) videoRefs.current[i] = el } }
              src={ src }
              autoPlay={ i === index }
              muted
              playsInline
              preload="auto"
              onEnded={ () => { if (i === index) advance() } }
              onError={ () => { if (i === index) advance() } }
              className={ [
                i === index ? 'active' : '',
                (i === index && (fading || fadingIn)) ? (fading ? 'fadeOut' : 'fadeIn') : ''
              ].filter(Boolean).join(' ') }
            />
          ))}
        </VideoWrap>
      )}
    </HeroWrap>

  )
}
