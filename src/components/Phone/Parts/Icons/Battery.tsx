import React from 'react'
import { styled } from '@theme'

// For the container of the battery icon within the header of the iphone
// This icon is used to simulate a real phone, where the battery is percentage is at

const BatteryWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 24,
  height: 13,
  paddingRight: 2,

  // For the nub on the right of the container
  // This is a small line on the right to represent the charging end of a battery

  '&:after': { 
    content: '',
    position: 'absolute',
    right: 0,
    width: 1,
    height: 4,
    borderRadius: '0 1px 1px 0',
    background: '#878787'
  },

  variants: {
    darkBg: {
      true: { '&:after': { background: '#fff' }}
    }
  }
})

// For the container of the base of the battery that shows the current level
// This has the slight border around it with the batter drained a little

const BatteryBase = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: 4,
  border: '0.5px solid #878787',

  // For the current power line in the center of the container

  '&:before': {
    content: '',
    position: 'absolute',
    left: 2,
    width: '50%',
    height: '70%',
    borderRadius: 2,
    background: '#fff',
  },

  variants: {
    darkBg: {
      true: { 
        border: '0.5px solid #fff',
        '&:before': { background: '#fff' }
      }
    }
  }
})

interface BatteryProps {
  darkBg?: boolean
}

// ---------- This is the end of declarations ---------- //

export const IconBattery = ({ darkBg }:BatteryProps) => {
  return(

    <BatteryWrap {...{ darkBg }}>
      <BatteryBase {...{ darkBg }} />
    </BatteryWrap>

  )
}
