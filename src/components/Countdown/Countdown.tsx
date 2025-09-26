import React, { useState, useEffect } from 'react'
import { styled, keyframes } from '@theme'
import { Heading } from '@components'

const CountdownWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  position: 'relative',
  width: '100%'
})

const NumberWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 6,
  position: 'relative',
  width: '100%'
})

const NumberBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const Number = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 66,
  height: 55,
  padding: '0 16px',
  background: '$bgSecondary',
  borderRadius: '$r1',
  overflow: 'hidden',
})

const slideInUp = keyframes({
  '0%': { transform: 'translateY(40%)', opacity: 0 },
  '60%': { transform: 'translateY(0%)', opacity: 1 },
  '100%': { transform: 'translateY(0%)', opacity: 1 }
})

const slideOutUp = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '60%': { transform: 'translateY(-40%)', opacity: 0 },
  '100%': { transform: 'translateY(-40%)', opacity: 0 }
})

const DigitBase = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const DigitIn = styled(DigitBase, {
  animation: `${slideInUp} 380ms ease both`
})

const DigitOut = styled(DigitBase, {
  animation: `${slideOutUp} 380ms ease both`
})

interface CountdownProps {
  targetDate: string | Date
}

const TickingNumber: React.FC<{ value: number | string }> = ({ value }) => {
  const [prev, setPrev] = useState<number | string | null>(null)
  const [showOut, setShowOut] = useState(false)
  const prevRef = React.useRef<number | string | null>(value)

  useEffect(() => {
    if (prevRef.current !== value) {
      setPrev(prevRef.current)
      setShowOut(true)
      prevRef.current = value
      const t = setTimeout(() => setShowOut(false), 380)
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <>
      {showOut && (
        <DigitOut>
          <Heading heavy size="l4" title={ String(prev) } />
        </DigitOut>
      )}
      <DigitIn key={ String(value) }>
        <Heading heavy size="l4" title={ String(value) } />
      </DigitIn>
    </>
  )
}

export const Countdown = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (

    <CountdownWrap>
      <Heading size="l1" color="secondary" title="Dropping in" />

      <NumberWrap>
        <NumberBlock>
          <Number><TickingNumber value={ timeLeft.days } /></Number>
          <Heading size="l0" title="days" />
        </NumberBlock>

        <NumberBlock>
          <Number><TickingNumber value={ timeLeft.hours } /></Number>
          <Heading size="l0" title="hours" />
        </NumberBlock>

        <NumberBlock>
          <Number><TickingNumber value={ timeLeft.minutes } /></Number>
          <Heading size="l0" title="mins" />
        </NumberBlock>

        <NumberBlock>
          <Number><TickingNumber value={ timeLeft.seconds } /></Number>
          <Heading size="l0" title="secs" />
        </NumberBlock>
      </NumberWrap>
    </CountdownWrap>

  )
}