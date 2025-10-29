import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { TrustBadge } from './TrustBadge'

const ChipContent = styled ('button', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative',
  padding: 8,
  background: '$bgSecondary',
  borderRadius: '$pill',
  transition: '$s1',

  '&:active': {
    transform: 'scale( 0.9 )'
  },

  variants: {
    size: {
      l0: {
        gap: 8
      }
    }
  }
})

const ChipImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 28,
  height: 28,
  borderRadius: '50%',
  overflow: 'hidden',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  variants: {
    size: {
      l0: {
        width: 24,
        height: 24
      }
    }
  }
})

interface BaseProps {
  size?: 'l0'
  image?: string
  title?: string
  onClick?: any
}

export const ChipBase = ({
    size,
    image,
    title,
    onClick
  }:BaseProps) => {
  
  return(

    <ChipContent {...{ onClick, size }}>
      <ChipImage {...{ size }}><img src={ image } alt={ title } /></ChipImage>
      <Heading bold size={ size ? size : 'l1' } title={ title } />
      <TrustBadge {...{ size }} />
    </ChipContent>

  )
}  