import React, { useEffect, useMemo, useState } from 'react'
import { HeadTags, Phone, PhoneHeader, Drop } from '@components'

export default function Home() {
  // Hoist data so we can preload the assets
  const titles = useMemo(() => [
    'Sir Casper',
    'Jeremy',
    'Sir Frank',
    'Sir Pump',
    'Sir Vamp'
  ], [])

  const videos = useMemo(() => [
    '/ghouls/casper.webm',
    '/ghouls/jeremy.webm',
    '/ghouls/frank.webm',
    '/ghouls/pump.webm',
    '/ghouls/vamp.webm'
  ], [])

  const appleFallback = useMemo(() => [
    '/ghouls/apple-fallback/casper.mov',
    '/ghouls/apple-fallback/jeremy.mov',
    '/ghouls/apple-fallback/frank.mov',
    '/ghouls/apple-fallback/pump.mov',
    '/ghouls/apple-fallback/vamp.mov'
  ], [])

  // Simple preloader state
  const [loadedCount, setLoadedCount] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const allUrls = useMemo(() => [...videos, ...appleFallback], [videos, appleFallback])

  useEffect(() => {
    let cancelled = false
    const total = allUrls.length

    function preloadVideo(url: string) {
      return new Promise<void>((resolve) => {
        // Use a detached video element to warm the cache/decoder
        const v = document.createElement('video')
        v.preload = 'auto'
        v.muted = true
        v.src = url

        const markDone = () => {
          // Count as loaded even on error to avoid hanging the UI
          if (!cancelled) setLoadedCount((c) => Math.min(c + 1, total))
          cleanup()
          resolve()
        }

        const cleanup = () => {
          v.oncanplaythrough = null
          v.onloadeddata = null
          v.onerror = null
          v.onstalled = null
          // Remove source reference to allow GC
          v.removeAttribute('src')
          v.load()
        }

        // Some browsers never fire canplaythrough for certain codecs; loadeddata is safer
        v.oncanplaythrough = markDone
        v.onloadeddata = markDone
        v.onerror = markDone
        v.onstalled = markDone

        // Kick it
        v.load()
      })
    }

    // Safety timeout so we never block forever (e.g., CDN hiccup)
    const safetyTimer = window.setTimeout(() => {
      if (!cancelled) {
        setIsReady(true)
      }
    }, 10000) // 10s safety

    Promise.all(allUrls.map(preloadVideo)).then(() => {
      if (!cancelled) setIsReady(true)
    })

    return () => {
      cancelled = true
      window.clearTimeout(safetyTimer)
    }
  }, [allUrls])

  const progress = Math.round((loadedCount / Math.max(allUrls.length, 1)) * 100)

  return (
    <>
      <HeadTags />

      {/* Preloader overlay */}
      {!isReady && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0b0b0b',
            color: '#fff',
            zIndex: 9999,
            flexDirection: 'column',
            gap: 12,
            transition: 'opacity 300ms ease',
          }}
        >
          <div style={{ fontSize: 14, letterSpacing: 1, opacity: 0.8 }}>Loading assets…</div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>{progress}%</div>
          {/* Minimal spinner without external CSS */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: '3px solid rgba(255,255,255,0.25)',
              borderTopColor: '#fff',
              animation: 'ghoulspin 0.9s linear infinite',
            }}
          />
          {/* Keyframes injected inline */}
          <style>{`@keyframes ghoulspin{to{transform:rotate(360deg)}}`}</style>
        </div>
      )}

      {/* Main content hidden under the preloader until ready */}
      <div style={{ opacity: isReady ? 1 : 0.001, transition: 'opacity 300ms ease' }}>
        <Phone>
          <PhoneHeader overlay />
          <Drop
            title=""
            titles={titles}
            subTitle="Ghoul Squad"
            videos={videos}
            appleFallback={appleFallback}
          />
        </Phone>
      </div>
    </>
  )
}
