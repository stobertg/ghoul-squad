import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { TrustBadge } from '../BrandChip/Parts/TrustBadge'

const TagWrap = styled('div', {
  position: 'relative',
  padding: '6px 12px 6px 6px',
  borderRadius: '$pill',
  background: '$bgSubtle'
})

const TagContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative',
  whiteSpace: 'nowrap'
})

interface TagProps {

}

export const VerifiedTag = ({}:TagProps) => {
  return(

    <TagWrap>
      <TagContent>
        <TrustBadge size="l0" />
        <Heading bold size="l0" title="Verified Partner" />
      </TagContent>
    </TagWrap>

  )
}