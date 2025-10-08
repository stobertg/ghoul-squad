import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const ItemWrap = styled('div', {
  display: 'flex',
  flex: 1
})

const ItemContent = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '$r1',
  overflow: 'hidden'
})

const ItemImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 170,
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
  flex: 1,
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
  position: 'relative',
  '> *:last-child': { lineHeight: 1.3 }
})

interface ItemProps {
  image: string
  title: string
  price: string | number
}

export const Item = ({
    image,
    title,
    price
  }:ItemProps) => {
  
  return(

    <ItemWrap>
      <ItemContent>
        <ItemImage><img src={ image } alt={ title } /></ItemImage>
        <ItemText>
          <Button variant="secondary" title="Add to cart" />

          <ItemTextWrap>
            <Heading bold title={ price } />
            <Heading size="l1" title={ title.length > 20 ? `${title.substring(0, 28)}...` : title } />
          </ItemTextWrap>
        </ItemText>
      </ItemContent>
    </ItemWrap>

  )
}
