import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonWrap = styled('button', {
  display: 'inline-flex',
  position: 'relative',
  textAlign: 'left',
  height: 56
})

const ButtonContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%',
  paddingRight: 24,
  background: '$bgTert',
  borderRadius: '$r1',
  overflow: 'hidden',

  // For the background of the selected button state
  // This shows the purple background 

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$borderActive',
    opacity: 0.4,
    display: 'none'
  },

  variants: {
    selected: {
      true: {
        background: 'none',
        border: '1px solid $borderActive',
        '&:before': { display: 'block' }
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
  selected?: boolean
  image: string
  title: string
  price: string | number
}

export const ButtonSelect = ({ 
    selected,
    image,
    title,
    price
  }:ButtonProps) => {

  return(

    <ButtonWrap>
      <ButtonContent {...{ selected }}>
        <ButtonImage>
          <img src={ image } alt={ title } />
        </ButtonImage>

        <ButtonText>
          <Heading bold size="l1" title={ title } />
          <Heading size="l0" color="secondary" title={ price } />
        </ButtonText>
      </ButtonContent>
    </ButtonWrap>
      
  )
}