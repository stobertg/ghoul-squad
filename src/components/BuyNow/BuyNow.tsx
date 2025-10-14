import React from 'react'
import { styled } from '@theme'
import { Heading, Quantity, Button, ButtonContainer, ButtonSelect, Price } from '@components'

const BuyWrap = styled('div', {
  dispaly: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '#000'
})

const BuyContent = styled('div', {

})

const BuyNowHero = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignitems: 'center',
  position: 'relative',
  width: '100%'
})

const BuyNowImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 100,
  minWidth: 100,
  height: 100,
  borderRadius: '$r2',
  overflow: 'hidden',

  img: { 
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

const BuyNowText = styled('div', {

})

const BuyNowTextMain = styled('div', {

})

interface BuyProps {

}

export const BuyNow = ({}:BuyProps) => {
  return(

    <BuyWrap>
      <BuyContent>
        <BuyNowHero>
          <BuyNowImage><img src="/ghouls/static/mystery-box.webp" /></BuyNowImage>
          <BuyNowText>
            <BuyNowTextMain>
              <Heading title="$27.92" />
              <Heading title="Finds x Ghoul Squad Drop The Ghoul Squad Mystery Drop" />
              <Heading title="Only 8 left" />
            </BuyNowTextMain>
            <Quantity />
          </BuyNowText>
        </BuyNowHero>
        
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
      </BuyContent>
    </BuyWrap>

  )
}
