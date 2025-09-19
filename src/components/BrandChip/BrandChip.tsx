import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { TrustBadge } from './Parts/TrustBadge'

const ChipWrap = styled ('button', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative',
  margin: '0 auto',
  padding: 8,
  background: '#000',
  border: '1px solid $bgSecondary',
  borderRadius: '$pill',
  transition: '$s1',

  '&:active': {
    transform: 'scale( 0.9 )'
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
  }
})

interface BrandProps {

}

export const BrandChip = ({}:BrandProps) => {
  return(

    <div>
      <ChipWrap>
        <ChipImage><img src="/brand/ghoul.jpg" alt="Ghoul icon" /></ChipImage>
        <Heading size="l1" title="Ghoul Squad" />
        <TrustBadge />
      </ChipWrap>
    </div>

  )
}