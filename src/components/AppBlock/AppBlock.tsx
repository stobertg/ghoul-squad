import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})  

const BlockContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '0 20px',

  variants: {
    blockSpacing: {
      l1: { gap: 12 }
    }
  }
})

interface BlockProps {
  children: React.ReactNode
  blockSpacing?: 'l1'
}

export const AppBlock = ({ children, blockSpacing }:BlockProps) => {
  return(

    <BlockWrap>
      <BlockContent {...{ blockSpacing }}>{ children }</BlockContent>
    </BlockWrap>
      
  )
}