import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const CollectWrap = styled('div', {

})

const CollectContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  padding: '6px 16px 6px 6px',
  border: '1px solid $border',
  borderRadius: '$pill',

  em: { color: '$rating' }
})

const CollectImage = styled('div', {
  position: 'relative',
  width: 28,
  height: 28
})

interface CollectProps {

}

export const CollectableTag = ({}:CollectProps) => {
  return(

    <CollectWrap>
      <CollectContent>
        <CollectImage><img src="/badges/badge_collab.png" alt="Collectable Badge" /></CollectImage>
        <Heading bold size="l0" title={<>Collectable <em>#347</em> / 500</>} />
      </CollectContent>
    </CollectWrap>

  )
}