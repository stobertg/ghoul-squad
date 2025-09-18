import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',

  variants: {
    align: {
      center: { justifyContent: 'center' }
    }
  }
})

interface BlockProps {
  align?: 'center'
  children: React.ReactNode
}

export const PageBlockItem = ({ align, children }:BlockProps) => {
  return(

    <BlockWrap {...{ align }}>{ children }</BlockWrap>

  )
}