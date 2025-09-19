import React, { useMemo } from 'react'
import { styled, keyframes } from '@theme'

// ----- Keyframes -----
// Separate motion (3D transforms) from opacity to avoid Safari/iOS flicker
const fadeIO = keyframes({
  '0%':   { opacity: 0 },
  '5%':   { opacity: 1 },
  '95%':  { opacity: 1 },
  '100%': { opacity: 0 }
})

const motion3d = keyframes({
  '0%':   { transform: 'translate3d(calc(var(--amp) * -1), -10%, 0) rotateZ(0turn) rotateX(0turn)' },
  '25%':  { transform: 'translate3d(var(--amp), 22.5dvh, 0) rotateZ(calc(var(--rz) * 0.25)) rotateX(calc(var(--rx) * 0.25))' },
  '50%':  { transform: 'translate3d(calc(var(--amp) * -1), 45dvh, 0) rotateZ(calc(var(--rz) * 0.5)) rotateX(calc(var(--rx) * 0.5))' },
  '75%':  { transform: 'translate3d(var(--amp), 77.5dvh, 0) rotateZ(calc(var(--rz) * 0.75)) rotateX(calc(var(--rx) * 0.75))' },
  '100%': { transform: 'translate3d(calc(var(--amp) * -1), 110dvh, 0) rotateZ(var(--rz)) rotateX(var(--rx))' }
})

// ----- Styled -----
// Keep perspective on a non-transformed ancestor, and clip in a separate wrapper to avoid iOS artifacts
const PerspectiveRoot = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  perspective: '800px',
  perspectiveOrigin: '50% 50%'
})

const ClipWrap = styled('div', {
  position: 'absolute',
  top: 80,
  left: 0,
  width: '100%',
  height: '70%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 0,
  opacity: 0.2
})

const FallWrap = styled('div', {
  width: 280,
  height: '100%',
  transform: 'rotate(-65deg)',
  transformStyle: 'preserve-3d'
})

const Leaf = styled('div', {
  position: 'absolute',
  top: '-10%',
  willChange: 'opacity',
  animation: `${fadeIO} var(--dur) linear var(--delay) infinite both`,
  '--amp': '20px',
  '--dur': '12s',
  '--delay': '0s',
  '--rx': '1turn',
  '--rz': '1turn'
})

const LeafInner = styled('div', {
  willChange: 'transform',
  animation: `${motion3d} var(--dur) linear var(--delay) infinite both`,
  img: {
    display: 'block',
    width: 'var(--size)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden'
  }
})

export const FallAnimation = () => {
  const numLeaves = 18

  // Generate a stable random config per render cycle
  const leaves = useMemo(() => {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min
    const durNum = 9 // shorter duration makes animation faster
    const slot = durNum / numLeaves
    return Array.from({ length: numLeaves }, (_, i) => {
      const left = `${Math.round(rnd(2, 98))}%`
      const dur = `${durNum}s`
      // distribute start phases evenly across [0, dur) with a tiny jitter to avoid visible regularity
      const jitter = (Math.random() - 0.5) * slot * 0.6
      const delaySec = -(i * slot + jitter)
      const delay = `${delaySec.toFixed(3)}s`
      const turns = () => Math.max(1, Math.round(rnd(1, 4)))
      const rx = `${turns()}turn`
      const rz = `${turns()}turn`
      const amp = `${Math.round(rnd(12, 40))}px`
      const size = `${Math.round(rnd(18, 42))}px`
      return {
        key: i,
        style: {
          left,
          ['--dur' as any]: dur,
          ['--delay' as any]: delay,
          ['--amp' as any]: amp,
          ['--size' as any]: size,
          ['--rx' as any]: rx,
          ['--rz' as any]: rz
        } as React.CSSProperties
      }
    })
  }, [numLeaves])

  return (
    <PerspectiveRoot>
      <ClipWrap>
        <FallWrap>
          {leaves.map(({ key, style }) => (
            <Leaf key={key} style={style}>
              <LeafInner>
                <img src="/seasons/fall.png" alt="" />
              </LeafInner>
            </Leaf>
          ))}
        </FallWrap>
      </ClipWrap>
    </PerspectiveRoot>
  )
}
