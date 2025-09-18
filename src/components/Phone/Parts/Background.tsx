import React from 'react'
import { styled } from '@theme'

const BgWrap = styled('div', {
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 500,
    background: 'linear-gradient(180deg,rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)'
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 255, 255, 255, 0.9 )',
    display: 'none'
  },

  img: {
    display: 'flex',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  variants: {
    lighterBg: {
      true: { '&:after': { display: 'block' }}
    }
  }
})

interface BgProps{
  lighterBg?: boolean
}

export const PhoneBg = ({ lighterBg }:BgProps) => {
  return(

    <BgWrap {...{ lighterBg }}>
      <img src="/bg/gradient.webp" alt="Finds Gradient" />
    </BgWrap>
      
  )
}