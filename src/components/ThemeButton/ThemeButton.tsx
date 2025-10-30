import React, { useState } from 'react'
import { styled } from '@theme'
import { Icon, Heading } from '@components'

const ButtonWrap = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 6,
  position: 'fixed',
  top: 20,
  right: 20,
  padding: '12px 18px 12px 12px',
  border: '1px solid $toggleBorder',
  borderRadius: '$r2',
  overflow: 'hidden',
  zIndex: 9999
})

const ButtonIcons = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  position: 'relative',
  '> *': { transition: 'transform $s2', willChange: 'transform' },

  '> *:first-child': { transform: 'translateY(0)' },

  '> *:last-child': {
    position: 'absolute',
    transform: 'translateY( 60px )',
  },

  variants: {
    darkTheme: {
      true: {
        '> *:first-child': { transform: 'translateY( -60px )' },
        '> *:last-child': { transform: 'translateY( 0px )' }
      }
    }
  }
})

const ButtonTitles = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '> *': { transition: 'transform opacity $s3', willChange: 'transform, opacity' },

  '> *:first-child': { transform: 'translateY(0)', opacity: 1 },

  '> *:last-child': {
    position: 'absolute',
    transform: 'translateY( 20px )',
    opacity: 0
  },

  variants: {
    darkTheme: {
      true: {
        '> *:first-child': { transform: 'translateY( -20px )', opacity: 0 },
        '> *:last-child': { transform: 'translateY( 0px )', opacity: 1 }
      }
    }
  }
})

interface ThemeProps {
  onClick?: any
}

export const ThemeButton = ({ onClick }:ThemeProps) => {
  const [ lightTheme, setLightTheme ] = useState( false )
  const toggleTheme = () => {
    setLightTheme(v => !v)
    if (typeof onClick === 'function') onClick()
  }

  return(

    <ButtonWrap type="button" onClick={ toggleTheme }>
      <ButtonIcons darkTheme={ lightTheme }>
        <Icon size="l1" icon="sun-medium" />
        <Icon size="l1" icon="moon-star" />
      </ButtonIcons>
      
      <ButtonTitles darkTheme={ lightTheme }>
        <Heading bold title="Light" />
        <Heading bold title="Dark" />
      </ButtonTitles>
    </ButtonWrap>

  )
}