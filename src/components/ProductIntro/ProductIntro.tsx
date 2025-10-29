import React from 'react'
import { styled } from '@theme'
import { CollectableTag, Rating, Condition, Heading, BrandChip, ButtonSelect, ButtonContainer } from '@components'

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

const TrendingWrap = styled('div', {

})

const TrendingContent = styled('div', {
  
})

interface IntroProps {
  badgeTitle?: string | React.ReactNode
}

export const ProductIntro = ({ badgeTitle }:IntroProps) => {
  return(

    <IntroWrap>
      <IntroContent>
        <IntroTop>
          <CollectableTag title={ badgeTitle } />

          <IntroAttr>
            <Condition />
            <Rating />
          </IntroAttr>
        </IntroTop>

        <IntroTitle>
          <Heading heavy size="l4" title="Ghoul Squad Special Drop: Halloween Blind Box" />
          <BrandChip 
            hasBy
            size="l0"
            brands={[
              { image: '/brand/ghoul.jpg', title: 'Ghoul Squad', onClick: () => alert( 'hello' ) },
              // { image: '/badges/badge_collab.png', title: 'Finds Exclusive', onClick: () => alert( 'hello' ) }
            ]} 
          />
        </IntroTitle>

        <ButtonContainer>
          <ButtonSelect 
            selected 
            image="/ghouls/mystery-box.png"
            title="Single Box"
            price="$27.99"
          />

          <ButtonSelect 
            image="/ghouls/mystery-box.png"
            title="Whole Set"
            price="$111.96"
          />
        </ButtonContainer>
      </IntroContent>
    </IntroWrap>

  )
}