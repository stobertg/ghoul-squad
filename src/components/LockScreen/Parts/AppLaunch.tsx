import React from 'react'
import { styled, keyframes } from '@theme'
import { IphoneTop } from '../../Phone/Parts/IphoneTop'

const fadeIn = keyframes({
  '0%': { transform: 'scale( 0.5 ) rotateY(180deg)', opacity: 0 },
  '30%, 60%': { transform: 'scale( 1 ) rotateY(360deg)', opacity: 1 },
  '100%': { transform: 'scale( 0.5 ) rotateY(0deg)', opacity: 0 },
})

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const AppWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '$bgPrimary',
  zIndex: 7000,
  animation: `${ fadeOut } 600ms ease forwards`,
  animationDelay: '1500ms',
  pointerEvents: 'none'
})

const AppStage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  animation: `${ fadeIn } 2000ms ease forwards`,
  animationDelay: '300ms',
  transform: 'scale( 0.5 ) rotateY(180deg)', 
  opacity: 0,

  img: {
    width: 100
  }
})

interface AppProps {

}

export const AppLaunch = ({}:AppProps) => {
  return(

    <AppWrap>
      <IphoneTop />
      <AppStage><img src="/badges/badge_collab.png" /></AppStage>
    </AppWrap>

  )
}
