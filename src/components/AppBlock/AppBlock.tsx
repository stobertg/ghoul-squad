import React from 'react'
import { styled } from '@theme'

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%',

  variants: {
    bgColor: {
      subtle: { background: '$bgSubtle' }
    }
  }
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
    },

    hasBg: {
      true: { padding: '40px 20px' }
    },

    width: {
      full: { padding: '0 0' },
      l0: { padding: '0 8px' },
      l1: { padding: '0 32px' },
      l2: { padding: '0 40px' }
    }
  }
})

interface BlockProps {
  children: React.ReactNode
  blockSpacing?: 'l1'
  bgColor?: 'subtle'
  width?: 'full'  | 'l0' | 'l1' | 'l2'
}

export const AppBlock = ({ 
    children, 
    blockSpacing,
    bgColor,
    width
  }:BlockProps) => {

  return(

    <BlockWrap {...{ bgColor }}>
      <BlockContent 
        hasBg={ bgColor ? true : false }
        {...{ blockSpacing, width }}
      >
        { children }
      </BlockContent>
    </BlockWrap>
      
  )
}