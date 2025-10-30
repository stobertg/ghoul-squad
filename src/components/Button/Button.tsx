import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 100,
  height: 40,
  background: '$brand',
  borderRadius: '$r2',
  transition: '$s1',
  cursor: 'pointer',
  color: '#fff',
  '&:hover': { background: '$primaryButtonHover' },
  '*': { whiteSpace: 'nowrap' },

  variants: {
    variant: {
      secondary: { 
        background: 'none',
        border: '1px solid $border'
      },

      underline: {
        color: '$textPrimary',
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
        'button, a': { padding: '0 18px', }
      },

      full: {
        width: '100%'
      }
    },

    size: {
      l0: { height: 32, 'button, a': { padding: '0 20px' }},
      l1: { height: 50 }
    }
  },

  '> * > *:last-child': { marginTop: 1 }
})

const ButtonClick = styled('button', {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  width: '100%',
  height: '100%',
  padding: '0 24px',

  '&[disabled]': {  },

  variants: {
    hasIcon: {
      true: {
        paddingLeft: '12px !important'
      }
    }
  }
})

const PageLink = styled('a', {
  display: "flex",
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  gap: 2,
  padding: '0 24px',

  '&[aria-disabled = true]': {  },

  variants: {
    hasIcon: {
      true: {
        paddingLeft: '12px !important'
      }
    }
  }
})

interface ButtonProps {
  title: string
  pageLink?: string
  onClick?: any
  variant?: 'secondary' | 'underline'
  width?: 'auto' | 'full'
  size?: 'l0' | 'l1'
  disabled?: boolean
  icon?: string
  type?: 'submit'
}

export const Button = ({
    title,
    pageLink,
    onClick,
    variant,
    width,
    size,
    disabled,
    icon,
    type
  }:ButtonProps) => {
  
  return(

    <ButtonWrap {...{ variant, width, size, disabled }}>
      { onClick || type ? (

        <ButtonClick {...{ onClick, disabled, type }} hasIcon={ icon ? true : false }>
          { icon && ( <Icon size="l0" {...{ icon }} /> )}
          <Heading bold size="l1" {...{ title }} />
        </ButtonClick>

      ) : (

        <PageLink href={ pageLink } aria-disabled={ disabled } hasIcon={ icon ? true : false }>
          { icon && ( <Icon size="l0" {...{ icon }} /> )}
          <Heading bold size="l1" {...{ title }} />
        </PageLink>

      )}
    </ButtonWrap>

  )
}