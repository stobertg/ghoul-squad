import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const PriceWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 2,
  '*': { lineHeight: '1 !important' }
})

const PriceSub = styled('div', {
  position: 'relative',
  marginTop: 1
})

interface PriceProps {

}

export const Price = ({}:PriceProps) => {
  return(

    <PriceWrap>
      <PriceSub><Heading bold size="l0" title="$" /></PriceSub>
      <Heading bold size="l3" title="27" />
      <PriceSub><Heading bold size="l0" title="92" /></PriceSub>
    </PriceWrap>

  )
}
