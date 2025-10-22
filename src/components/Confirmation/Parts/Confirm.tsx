import React from 'react'
import { styled } from '@theme'
import { Heading, Text, FallAnimation } from '@components'

const ConfirmWrap = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 20,
})

const ConfirmContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '0 20px',
  textAlign: 'center'
})

const ConfirmVideo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 162,

  video: {
    width: 112,
    zIndex: 2
  },

  '> *:last-child': {
    top: -50
  }
})

const ConfirmText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  position: 'relative',
  width: '100%',
  
  p: {
    color: '$textSecondary',
    fontFamily: 'inherit'
  }
})

interface ConfirmProps {

}

export const Confirm = ({}:ConfirmProps) => {
  return(

    <ConfirmWrap>
      <ConfirmContent>
        <ConfirmVideo>
          <video
            src="/ghouls/casper.webm"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
          <FallAnimation placement="top" />
        </ConfirmVideo>

        <ConfirmText>
          <Heading bold size="l4" title="Your order is confirmed!" />
          <Text fontSize="l1"><p>Welcome to the Ghoul Squad! Get excited, your blind box is on the way 🎃 👻 🧛 🧟</p></Text>
        </ConfirmText>
      </ConfirmContent>
    </ConfirmWrap>

  )
}