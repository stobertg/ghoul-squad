import React from 'react'
import { styled } from '@theme'
import { CollectableTag, Rating, Condition, QuantitySelection } from '@components'

const IntroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const IntroContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: '98%',
  width: '100%'
})

const IntroAttr = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
  position: 'relative'
})

interface IntroProps {

}

export const ProductIntro = ({}:IntroProps) => {
  return(

    <IntroWrap>
      <IntroContent>
        <CollectableTag />

        <IntroAttr>
          <Condition />
          <Rating />
        </IntroAttr>
      </IntroContent>
    </IntroWrap>

  )
}