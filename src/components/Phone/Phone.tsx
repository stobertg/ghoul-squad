import React from 'react'
import { styled } from '@theme'
import { IphoneTop } from './Parts/IphoneTop'
import { FallAnimation, BottomSheet, NavBottom, AiChat, LockScreen, BuyNow, Unbox, Alert } from '@components'

const PhoneWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  maxWidth: 400,
  minWidth: 400,
  width: '100%',
  height: 850,
  margin: '0 auto',
  background: '$bgPrimary',
  borderRadius: 56,
  // border: '1px solid #e0e0e0',
  border: '4px solid $phoneBorder',
  // boxShadow: '0 2px 10px rgba( 0,0,0, 0.05 )',
  overflow: 'hidden',

  // '&:before': {
  //   content: '',
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: 440,
  //   background: '$bgSubtle',
  //   borderRadius: '0 0 50% 50%',
  //   '@mobile': { height: 380 }
  // },

  variants: {
    hasHero: {
      true: {
        paddingTop: 0
      }
    },

    removeBg: {
      true: {
        '&:before': { display: 'none', opacity: 0 }
      }
    }
  },

  '@mobile': {
    width: '100vw',
    maxWidth: '100%',
    minWidth: '100%',
    height: '100dvh',
    borderRadius: 0,
    border: 'none',
    paddingTop: 0,
    paddingBottom: 40
  }
})

const PhoneContent = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'scroll',

  variants: {
    bottomSpacing: {
      true: { paddingBottom: 80 }
    },

    contentFullHeight: {
      true: { 
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }
    }
  }
})

const PhoneContentMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  // gap: 12,
  position: 'relative',
  paddingTop: 50,
  paddingBottom: 50,
  width: '100%',
  // minHeight: '100%',
  // height: '100%',
  
  '@mobile': { paddingTop: 0 },
  // paddingTop: 8,

  variants: {
    hasHero: {
      true: { paddingTop: 0 }
    },

    blockSpacing: {
      l1: { '> *:not(:first-child)': { marginBottom: 20 } },
      l2: { '> *:not(:first-child)': { marginBottom: 40 } },
      l3: { '> *:not(:first-child)': { marginBottom: 60 } }
    },

    hasBottomNav: {
      true: {
        // paddingBottom: 50
      }
    },

    hasClickEvents: {
      true: {
        paddingBottom: 0
      }
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
  zIndex: 9999,

  // For the close bar on the bottom of the container
  // Position horizonatally centered in the parent container

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 12,
    width: 120,
    height: 4,
    background: '$textPrimary',
    borderRadius: '$pill'
  },

  // For Darkmode, we change the background of the dismiss bar to white

  variants: { 
    darkMode: {
      true: { '&:after': { background: '$white' }}
    }
  },

  '@mobile': {
    display: 'none'
  }
})

export const BuyNowWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '80%',
  zIndex: 9999
})

const ConfettiCanvas = styled('canvas', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 9998
})

interface PhoneProps {
  children: React.ReactNode
  hasHero?: boolean
  darkBg?: boolean
  fall?: boolean
  removeBg?: boolean
  blockSpacing?: 'l1' | 'l2'
  bottomNav?: boolean
  hasLockScreen?: boolean
  contentFullHeight?: boolean
  hasAlert?: boolean
  showConfettiCanvas?: boolean
  confettiCanvasRef?: React.RefObject<HTMLCanvasElement>
  navButtonTitle?: string
  hasClickEvents?: boolean
}

export const Phone = ({ 
    children, 
    hasHero, 
    darkBg, 
    fall, 
    removeBg,
    blockSpacing,
    bottomNav,
    hasLockScreen,
    contentFullHeight,
    hasAlert,
    showConfettiCanvas,
    confettiCanvasRef,
    navButtonTitle,
    hasClickEvents
  }:PhoneProps) => {

  return(

    <PhoneWrap {...{ hasHero, removeBg }}>
      { hasLockScreen && ( <LockScreen /> )}

      <IphoneTop />

      <PhoneContent bottomSpacing={ bottomNav && true } className="phone">
        <PhoneContentMain 
          hasBottomNav={ bottomNav ? true : false }
          {...{ hasHero, blockSpacing, contentFullHeight, hasClickEvents }}
        >
          { children }
        </PhoneContentMain>
      </PhoneContent>

      { showConfettiCanvas && (
        <ConfettiCanvas id="confetti-canvas" ref={confettiCanvasRef} />
      )}

      <IphoneBottom />
      {/* { fall && ( <FallAnimation /> )} */}
      {/* <PhoneBg {...{ lighterBg }} /> */}
      { bottomNav && ( <NavBottom title={ navButtonTitle } /> )}

 

      {/* <BottomSheet>
        <AiChat />
      </BottomSheet> */}

      {/* <BuyNowWrap><BuyNow /></BuyNowWrap> */}
      {/* <UnboxWrap><Unbox /></UnboxWrap> */}
      
      {/* { hasAlert && ( <Alert /> )} */}
      {/* <Overlay  /> */}
    </PhoneWrap>

  )
}
