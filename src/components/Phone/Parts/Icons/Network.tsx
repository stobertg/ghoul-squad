import React from 'react'
import { styled } from '@theme'

// For the master container of the network icon within the right of the iphone header
// This is used to simulate a real phone, with the status of a mobile network connection

const NetworkWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  position: 'relative',
  height: 12,
  '> *:not(:last-child)': { marginRight: 2 }
})

// For the styling of the individual bars within the container
// This contains four bars that go from small height to full height

const NetworkBar = styled('div', {
  position: 'relative',
  width: 3,
  borderRadius: 2,
  background: '#fff',

  // Here we account for the different heights of the bar
  // As traiditonal network icons go, this forms a 'step-like' graphic

  variants: {
    height: {
      l0: { height: '25%' },
      l1: { height: '50%' },
      l2: { height: '75%' },
      l3: { height: '100%' }
    },

    // Here we account if the bar is not not full 
    // This helps to show if the connection is good, bad, or strong

    opacity: {
      l0: { opacity: 0.3 }
    },

    darkBg: {
      true: { background: '#fff' }
    }
  }
})

interface NetworkProps {
  darkBg?: boolean
}

// ---------- This is the end of declarations ---------- //

export const IconNetwork = ({ darkBg }:NetworkProps) => {
  return(

    <NetworkWrap>
      <NetworkBar {...{ darkBg }} height="l0" />
      <NetworkBar {...{ darkBg }} height="l1" />
      <NetworkBar {...{ darkBg }} height="l2" />
      <NetworkBar {...{ darkBg }} height="l3" opacity="l0" />
    </NetworkWrap>

  )
}
