import React from 'react'
import { styled } from '@theme'
import { ChatBubble } from './ChatBubble'

const Viewport = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
})

const Track = styled('div', {
  position: 'relative',
  width: '100%'
})

const Slot = styled('div', {
  position: 'absolute',
  left: 16,
  right: 0,
  willChange: 'transform',
  transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
  '*': { position: 'relative', zIndex: 1 }
})

const HiddenMeasure = styled('div', {
  position: 'absolute',
  visibility: 'hidden',
  pointerEvents: 'none',
  left: -99999,
  top: -99999,
  width: 'min(100%, 480px)'
})

interface ChatProps {
  chats: { author: string; text: string | React.ReactNode }[]
  dwellMs?: number
  gap?: number
}

export const LiveChat = ({ chats, dwellMs = 2200, gap = 8 }: ChatProps) => {
  const count = chats.length
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [incomingIndex, setIncomingIndex] = React.useState(count > 1 ? 1 : 0)
  const [animating, setAnimating] = React.useState(false)

  const [containerHeight, setContainerHeight] = React.useState(0)
  const [currentH, setCurrentH] = React.useState(0)
  const [incomingH, setIncomingH] = React.useState(0)

  const currentRef = React.useRef<HTMLDivElement | null>(null)
  const measureRef = React.useRef<HTMLDivElement | null>(null)

  // Measure the current bubble whenever it changes
  React.useLayoutEffect(() => {
    if (!currentRef.current) return
    const h = currentRef.current.offsetHeight
    setCurrentH(h)
    setContainerHeight(h)
  }, [currentIndex])

  // Measure the incoming bubble offscreen (prevents layout flicker)
  React.useLayoutEffect(() => {
    if (!measureRef.current) return
    const h = measureRef.current.offsetHeight
    setIncomingH(h)
  }, [incomingIndex, chats])

  // Drive the loop with a dwell timer
  React.useEffect(() => {
    if (count <= 1) return
    const t = setTimeout(() => setAnimating(true), dwellMs)
    return () => clearTimeout(t)
  }, [currentIndex, dwellMs, count])

  // On transition end, commit the swap (prevents double-entry of the same item)
  const handleTransitionEnd = React.useCallback(() => {
    if (!animating) return
    setAnimating(false)
    setCurrentIndex(incomingIndex)
    setContainerHeight(incomingH)
    setIncomingIndex((incomingIndex + 1) % count)
  }, [animating, incomingIndex, incomingH, count])

  const current = chats[currentIndex]
  const incoming = chats[incomingIndex]

  // Compute transforms
  const currentY = animating ? -(currentH + gap) : 0
  const nextStart = containerHeight + gap
  const incomingY = animating ? 0 : nextStart

  return (
    <Viewport style={{ height: containerHeight }}>
      <Track>
        <Slot
          ref={currentRef}
          style={{ transform: `translateY(${currentY}px)` }}
          onTransitionEnd={handleTransitionEnd}
          key={`current-${currentIndex}`}
        >
          {current && (
            <ChatBubble author={current.author} text={current.text} />
          )}
        </Slot>

        <Slot style={{ transform: `translateY(${incomingY}px)` }} key={`incoming-${incomingIndex}`}>
          {incoming && (
            <ChatBubble author={incoming.author} text={incoming.text} />
          )}
        </Slot>
      </Track>

      <HiddenMeasure ref={measureRef}>
        {incoming && (
          <ChatBubble author={incoming.author} text={incoming.text} />
        )}
      </HiddenMeasure>
    </Viewport>
  )
}
