import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const ItemWrap = styled('div', {

})

const ItemContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  borderRadius: '$r1',
  overflow: 'hidden'
})

const ItemImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 160,
  height: 160,

  img: {  
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

const ItemText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: '16px 16px 20px 16px',
  background: '$bgSecondary'
})

const ItemTextWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative'
})

interface ItemProps {

}

export const Item = ({}:ItemProps) => {
  return(

    <ItemWrap>
      <ItemContent>
        <ItemImage><img src="/ghouls/static/pump.webp" alt="Ghoul Squad" /></ItemImage>
        <ItemText>
          <Button variant="secondary" title="Add to cart" />

          <ItemTextWrap>
            <Heading bold title="$27.99" />
            <Heading size="l1" title="Sir Pump Blind Box" />
          </ItemTextWrap>
        </ItemText>
      </ItemContent>
    </ItemWrap>

  )
}
