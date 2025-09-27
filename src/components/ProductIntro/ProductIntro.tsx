import React from 'react'
import { styled } from '@theme'
import { CollectableTag, Rating, Condition, Heading, BrandChip, QuantitySelection } from '@components'

const IntroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const IntroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  width: '100%'
})

const IntroTop = styled('div', {
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

const IntroTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  width: '100%'
})

interface IntroProps {

}

export const ProductIntro = ({}:IntroProps) => {
  return(

    <IntroWrap>
      <IntroContent>
        <IntroTop>
          <CollectableTag />

          <IntroAttr>
            <Condition />
            <Rating />
          </IntroAttr>
        </IntroTop>

        <IntroTitle>
          <Heading bold size="l4" title="Ghoul Squad Special Drop: Halloween Blind Box" />
          <BrandChip 
            hasBy
            size="l0"
            brands={[
              { image: '/brand/ghoul.jpg', title: 'Ghoul Squad', onClick: () => alert( 'hello' ) }
            ]} 
          />
        </IntroTitle>
      </IntroContent>
    </IntroWrap>

  )
}