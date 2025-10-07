import React, { useState } from 'react'
import { styled } from '@theme'
import { TextAlert, AppLaunch } from './Parts'

const ScreenWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transition: '$s3',
  zIndex: 9999,

  variants: {
    hidden: {
      true: {
        transform: 'translateY( -110% )',
        pointerEvents: 'none'
      }
    }
  }
})

const ScreenContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '0 20px 110px',
  zIndex: 10
})

const ScreenBg = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0
})

const AlertWrap = styled('div', {

})

interface ScreenProps {

}

export const LockScreen = ({}:ScreenProps) => {
  const [ hideScreen, setHideScreen ] = useState( false )
  const [ appLaunch, setAppLaunch ] = useState( false )

  const removeScreen = () => { 
    setHideScreen( true )
    setAppLaunch( true )
  }
  
  return(

    <>
      <ScreenWrap hidden={ hideScreen }>
        <ScreenContent>
          <AlertWrap>
            <TextAlert onClick={ removeScreen } />
          </AlertWrap>
        </ScreenContent>

        <ScreenBg><img src="/lockscreen/homescreen.webp" alt="Lock Screen" /></ScreenBg>
      </ScreenWrap>

      { appLaunch && ( <AppLaunch /> )}
    </>

  )
}