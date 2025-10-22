import React from 'react'
import { styled, keyframes } from '@theme'
import { Heading, Button, ButtonIcon } from '@components'

const fadeIn = keyframes({
  '0%': { transform: 'translateY( 30px )', opacity: 0 },
  '100%': { transform: 'translateY( 0 )', opacity: 1 }
})

const AlertWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  paddingBottom: 32,
  zIndex: 1
})

const AlertContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
  position: 'relative',
  maxWidth: 'calc( 100% - 20px )',
  width: '100%',
  margin: '0 auto',
  padding: 12,
  background: '$bgSecondary',
  borderRadius: '$r2',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.5 )',
  animation: `${ fadeIn } 400ms ease forwards`,
})

const AlertImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 120,
  minWidth: 120,
  height: 110,
  borderRadius: '$r1',
  overflow: 'hidden',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  video: {
    position: 'absolute',
    width: '100%',
  }
})

const AlertInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

const AlertText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  '*': { lineHeight: '1.3 !important' }
})

const AlertDismiss = styled('div', {
  position: 'absolute',
  top: 6,
  right: 6
})

interface AlertProps {
  onBuyNow?: any
}

export const Alert = ({ onBuyNow }:AlertProps) => {
  return(

    <AlertWrap>
      <AlertContent>
        <AlertImage>
          {/* <img src="/ghouls/static/mystery-box.webp" /> */}
          <video
            src="/ghouls/ghoul-box.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
        </AlertImage>

        <AlertInfo>
          <AlertText>
            <Heading bold size="l1" title="Only 8 Ghouls left &nbsp; 👻🚨" />
            <Heading size="l0" color="secondary" title="Don't miss out - shop now before they're gone!" />
          </AlertText>

          <div><Button size="l0" title="Buy now" onClick={ onBuyNow } /></div>
        </AlertInfo>

        <AlertDismiss><ButtonIcon size="l0" icon="x" /></AlertDismiss>
      </AlertContent>
    </AlertWrap>

  )
}
