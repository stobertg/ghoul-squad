import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  position: 'relative',
  height: 56
})

const ButtonContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%',
  paddingRight: 32,
  background: '$bgTert',
  borderRadius: '$r1',
  overflow: 'hidden',

  variants: {
    selected: {
      true: {
        background: '$borderActive',
        // backgroundOpacity: 0.4,
        border: '1px solid $borderActive'
      }
    }
  }
})

const ButtonImage = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  position: 'relative',
  width: 60,
  height: '100%',
  paddingTop: 4,
  overflow: 'hidden',

  img: {
    position: 'absolute',
    width: '130%',
    height: '130%',
    objectFit: 'cover'
  }
})

const ButtonText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  position: 'relative',
  marginTop: 4
})

interface ButtonProps {

}

export const ButtonSelect = ({}:ButtonProps) => {
  return(

    <ButtonWrap>
      <ButtonContent>
        <ButtonImage>
          <img src="/ghouls/mystery-box.png" alt="Ghoul Squad" />
        </ButtonImage>

        <ButtonText>
          <Heading bold size="l1" title="Single Box" />
          <Heading size="l0" color="secondary" title="$27.99" />
        </ButtonText>
      </ButtonContent>
    </ButtonWrap>
      
  )
}