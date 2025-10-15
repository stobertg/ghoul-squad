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
  background: '$borderActive',
  borderRadius: '$r2',
  transition: '$s1',
  cursor: 'pointer',
  '&:hover': { background: '#33339b' },
  '*': { whiteSpace: 'nowrap' },

  variants: {
    variant: {
      secondary: { 
        background: 'none',
        border: '1px solid $border'
      },

      underline: {
        background: 'none',
        minWidth: 'initial',
        '&:hover': { background: 'none', color: '#33339b' },
        'button, a': { padding: 0, },
        
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

    disabled: {
      true: { background: '#222', color: '#555' }
    },

    width: {
      auto: { 
        minWidth: 'initial',
        'button, a': { padding: '0 12px', }
      }
    },

    size: {
      l0: { height: 32, 'button, a': { padding: '0 20px' }},
      l1: { height: 50 }
    }
  }
})

const ButtonClick = styled('button', {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 24px',

  '&[disabled]': {  }
})

const PageLink = styled('a', {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '0 24px',

  '&[aria-disabled = true]': {  }
})

interface ButtonProps {
  title: string
  pageLink?: string
  onClick?: any
  variant?: 'secondary' | 'underline'
  width?: 'auto'
  size?: 'l0' | 'l1'
  disabled?: boolean
}

export const Button = ({
    title,
    pageLink,
    onClick,
    variant,
    width,
    size,
    disabled
  }:ButtonProps) => {
  
  return(

    <ButtonWrap {...{ variant, width, size, disabled }}>
      { onClick ? (

        <ButtonClick {...{ onClick, disabled }}>
          <Heading bold size="l1" {...{ title }} />
        </ButtonClick>

      ) : (

        <PageLink href={ pageLink } aria-disabled={ disabled }>
          <Heading bold size="l1" {...{ title }} />
        </PageLink>

      )}
    </ButtonWrap>

  )
}