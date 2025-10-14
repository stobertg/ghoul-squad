import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 100,
  height: 40,
  padding: '0 24px',
  background: '$borderActive',
  borderRadius: '$r2',
  '*': { whiteSpace: 'nowrap' },

  variants: {
    variant: {
      secondary: { 
        background: 'none',
        border: '1px solid $border'
      },

      underline: {
        background: 'none',
        padding: 0,
        minWidth: 'initial',
        
        '&:before': {
          content: '',
          position: 'absolute',
          bottom: 12,
          left: 0,
          width: '100%',
          height: 2,
          background: '$bgTert'
        }
      }
    },

    width: {
      auto: { padding: '0 12px' }
    },

    size: {
      l1: { height: 50 }
    }
  }
})

interface ButtonProps {
  title: string
  pageLink?: string
  onClick?: any
  variant?: 'secondary' | 'underline'
  width?: 'auto'
  size?: 'l1'
}

export const Button = ({
    title,
    pageLink,
    onClick,
    variant,
    width,
    size
  }:ButtonProps) => {
  
  return(

    <ButtonWrap {...{ variant, width, size }}>
      { onClick ? (

        <button {...{ onClick }}>
          <Heading bold size="l1" {...{ title }} />
        </button>

      ) : (

        <a href={ pageLink }>
          <Heading bold size="l1" {...{ title }} />
        </a>

      )}
    </ButtonWrap>

  )
}