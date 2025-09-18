import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
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
})

interface CountdownProps {
  targetDate: string | Date
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
          <Number><Heading heavy size="l4" title={ timeLeft.days } /></Number>
          <Heading size="l0" title="days" />
        </NumberBlock>

        <NumberBlock>
          <Number><Heading heavy size="l4" title={ timeLeft.hours } /></Number>
          <Heading size="l0" title="hours" />
        </NumberBlock>

        <NumberBlock>
          <Number><Heading heavy size="l4" title={ timeLeft.minutes } /></Number>
          <Heading size="l0" title="mins" />
        </NumberBlock>

        <NumberBlock>
          <Number><Heading heavy size="l4" title={ timeLeft.seconds } /></Number>
          <Heading size="l0" title="secs" />
        </NumberBlock>
      </NumberWrap>
    </CountdownWrap>

  )
}