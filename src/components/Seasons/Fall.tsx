import React, { useMemo } from 'react'
import { styled, keyframes } from '@theme'

// ----- Keyframes -----
const leafMotion = keyframes({
  '0%':   { transform: 'translateY(-10%) translateX(calc(var(--amp) * -1)) rotateZ(0turn) rotateX(0turn)', opacity: 0 },
  '5%':   { opacity: 1 },
  '25%':  { transform: 'translateY(22.5vh) translateX(var(--amp)) rotateZ(calc(var(--rz) * 0.25)) rotateX(calc(var(--rx) * 0.25))' },
  '50%':  { transform: 'translateY(45vh) translateX(calc(var(--amp) * -1)) rotateZ(calc(var(--rz) * 0.5)) rotateX(calc(var(--rx) * 0.5))' },
  '75%':  { transform: 'translateY(77.5vh) translateX(var(--amp)) rotateZ(calc(var(--rz) * 0.75)) rotateX(calc(var(--rx) * 0.75))' },
  '95%':  { opacity: 1 },
  '100%': { transform: 'translateY(110vh) translateX(calc(var(--amp) * -1)) rotateZ(var(--rz)) rotateX(var(--rx))', opacity: 0 }
})

// ----- Styled -----
const FallWrap = styled('div', {
  position: 'absolute',
  top: 80,
  left: 0,
  width: 330,
  height: '70%',
  overflow: 'hidden',
  pointerEvents: 'none',
  transform: 'rotate( -60deg )',
  perspective: '800px',
  perspectiveOrigin: '50% 50%',
  transformStyle: 'preserve-3d',
  zIndex: 0,
  opacity: 0.3
})

const Leaf = styled('div', {
  position: 'absolute',
  top: '-10%',
  willChange: 'transform, opacity',
  animation: `${leafMotion} var(--dur) linear var(--delay) infinite both`,
  '--amp': '20px',
  '--dur': '12s',
  '--delay': '0s',
  '--rx': '1turn',
  '--rz': '1turn',
  img: { display: 'block', width: 'var(--size)', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }
})

export const FallAnimation = () => {
  const numLeaves = 18

  // Generate a stable random config per render cycle
  const leaves = useMemo(() => {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min
    return Array.from({ length: numLeaves }, (_, i) => {
      const left = `${Math.round(rnd(2, 98))}%`
      const durNum = rnd(6, 12)
      const dur = `${durNum.toFixed(2)}s`
      const delay = `-${rnd(0, durNum).toFixed(2)}s` // negative delay starts each leaf mid‑animation
      const turns = () => Math.max(1, Math.round(rnd(1, 4)));
      const rx = `${turns()}turn`;
      const rz = `${turns()}turn`;
      const amp = `${Math.round(rnd(12, 40))}px`
      const size = `${Math.round(rnd(18, 42))}px`
      return {
        key: i,
        style: {
          left,
          // CSS variables for animation/sizing
          ['--dur' as any]: dur,
          ['--delay' as any]: delay,
          ['--amp' as any]: amp,
          ['--size' as any]: size,
          ['--rx' as any]: rx,
          ['--rz' as any]: rz,
        } as React.CSSProperties
      }
    })
  }, [numLeaves])

  return (
    <FallWrap>
      {leaves.map(({ key, style }) => (
        <Leaf key={key} style={style}>
          <img src="/seasons/fall.png" alt="" />
        </Leaf>
      ))}
    </FallWrap>
  )
}
