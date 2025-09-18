import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { TrustBadge } from './Parts/TrustBadge'

const ChipWrap = styled ('div', {
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  height: 40,
  margin: '0 auto',
  padding: '8px 12px',
  background: '#000',
  borderRadius: '$pill'
})

const ChipImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 24,
  height: 24,
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