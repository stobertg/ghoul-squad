import React, { useMemo } from 'react'
import { styled, keyframes } from '@theme'

// ----- Keyframes -----
const fall = keyframes({
  '0%':   { transform: 'translateY(-10%)', opacity: 1 },
  '100%': { transform: 'translateY(110vh)', opacity: 0 }
})

const sway = keyframes({
  '0%':   { transform: 'translateX(calc(var(--amp) * -1))' },
  '100%': { transform: 'translateX(var(--amp))' }
})

const spin = keyframes({
  '0%':   { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(1turn)' }
})

// ----- Styled -----
const FallWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '50%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 9999
})

/**
 * Outer Leaf handles vertical fal ling (translateY + opacity).
 * Inner Leaf handles horizontal sway + rotation + sizing.
 */
const Leaf = styled('div', {
  position: 'absolute',
  top: '-10%',
  willChange: 'transform, opacity',
  animation: `${fall} var(--dur) linear var(--delay) 1 forwards`,

  // Place each leaf across the page using inline style: { left: 'xx%' }
  // Child is the visual leaf (image) with sway + spin.
  '& > .inner': {
    display: 'inline-block',
    willChange: 'transform',
    animation: `${sway} var(--swayDur) ease-in-out 0s infinite alternate, ${spin} var(--spinDur) linear 0s infinite`,
    transformOrigin: '50% 10%' // spin around near the stem
  },

  // Default amp & durations in case CSS vars aren't set
  '--amp': '20px',
  '--dur': '10s',
  '--delay': '0s',
  '--swayDur': '4s',
  '--spinDur': '12s',

  img: { display: 'block', width: 'var(--size)' }
})

export const FallAnimation = () => {
  const numLeaves = 18

  // Generate a stable random config per render cycle
  const leaves = useMemo(() => {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min
    const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]
    return Array.from({ length: numLeaves }, (_, i) => {
      const left = `${Math.round(rnd(2, 98))}%`
      const dur = `${rnd(8, 16).toFixed(2)}s`
      const delay = `${rnd(0, 6).toFixed(2)}s`
      const swayDur = `${rnd(3, 6).toFixed(2)}s`
      const spinDur = `${rnd(8, 18).toFixed(2)}s`
      const amp = `${Math.round(rnd(12, 40))}px`
      const size = `${Math.round(rnd(18, 42))}px`
      const spinDir = pick([1, -1]) // 1 = clockwise, -1 = counter
      return {
        key: i,
        style: {
          left,
          // CSS variables for animation/sizing
          ['--dur' as any]: dur,
          ['--delay' as any]: delay,
          ['--swayDur' as any]: swayDur,
          ['--spinDur' as any]: spinDur,
          ['--amp' as any]: amp,
          ['--size' as any]: size
        } as React.CSSProperties,
        innerStyle: {
          // reverse spin by flipping duration sign using animation-direction
          animationDirection: spinDir === -1 ? ('reverse' as const) : ('normal' as const)
        }
      }
    })
  }, [numLeaves])

  return (
    <FallWrap>
      {leaves.map(({ key, style, innerStyle }) => (
        <Leaf key={key} style={style}>
          <div className="inner" style={innerStyle}>
            <img src="/animations/leaf.png" alt="" />
          </div>
        </Leaf>
      ))}
    </FallWrap>
  )
}
