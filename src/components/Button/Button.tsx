import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ButtonWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 100,
  height: 40,
  padding: '0 24px',
  background: '$brandPrimary',
  borderRadius: '$r2',

  variants: {
    variant: {
      secondary: { 
        background: 'none',
        border: '1px solid $border'
      }
    }
  }
})

interface ButtonProps {
  title: string
  pageLink?: string
  onClick?: any
  variant?: 'secondary'
}

export const Button = ({
    title,
    pageLink,
    onClick,
    variant
  }:ButtonProps) => {
  
  return(

    <ButtonWrap {...{ variant }}>
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