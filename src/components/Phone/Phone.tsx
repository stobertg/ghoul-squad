import React from 'react'
import { styled } from '@theme'
import { IphoneTop } from './Parts/IphoneTop'

const PhoneWrap = styled('div', {
  position: 'relative',
  maxWidth: 400,
  width: '100%',
  height: 850,
  margin: '0 auto',
  paddingTop: 50,
  background: '#181818',
  borderRadius: 56,
  border: '1px solid #e0e0e0',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.05 )',
  overflow: 'hidden',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 440,
    background: '$bgSecondary',
    borderRadius: '0 0 50% 50%'
  },

  variants: {
    hasHero: {
      true: {
        paddingTop: 0
      }
    }
  }
})

const PhoneContent = styled('div', {
  position: 'relative',
  width: '100%',
  zIndex: 1
})

const PhoneContentMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // gap: 12,
  position: 'relative',
  width: '100%',
  // paddingTop: 8,

  variants: {
    hasHero: {
      true: { paddingTop: 0 }
    }
  }
})


// For the dismiss line on the bottom of the container
// This is static, doesn't have a function

const IphoneBottom = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  zIndex: 9000,

  // For the close bar on the bottom of the container
  // Position horizonatally centered in the parent container

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 12,
    width: 120,
    height: 4,
    background: '#fff',
    borderRadius: '$pill'
  },

  // For Darkmode, we change the background of the dismiss bar to white

  variants: { 
    darkMode: {
      true: { '&:after': { background: '$white' }}
    }
  }
})

interface PhoneProps {
  children: React.ReactNode
  hasHero?: boolean
  darkBg?: boolean
  lighterBg?: boolean
}

export const Phone = ({ children, hasHero, darkBg, lighterBg }:PhoneProps) => {
  return(

    <PhoneWrap {...{ hasHero }}>
      <IphoneTop {...{ darkBg }} />

      <PhoneContent>
        <PhoneContentMain {...{ hasHero }}>{ children }</PhoneContentMain>
      </PhoneContent>

      <IphoneBottom />
      {/* <PhoneBg {...{ lighterBg }} /> */}
    </PhoneWrap>

  )
}
