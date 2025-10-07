import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

const ButtonWrap = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 32,
  height: 32,
  borderRadius: '50%',

  variants: {
    variant: {
      primary: {
        background: '$brandPrimary',
        color: '#fff'
      },

      secondary: { 
        background: '$buttonSecondary',
        color: '$bgPrimary',
        'svg': { width: 20 }
      },

      neutral: {
        background: '#fff',
        color: '$bgPrimary'
      }
    }
  }
})

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'neutral'
  onClick?: any
  icon: string
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' 
}

export const ButtonIcon = ({ 
    variant,
    onClick,
    icon,
    size
  }:ButtonProps) => {

  return(

    <ButtonWrap {...{ variant, onClick }}>
      <Icon {...{ icon, size }} />
    </ButtonWrap>

  )
}