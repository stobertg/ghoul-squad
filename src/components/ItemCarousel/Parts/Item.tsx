import React from 'react'
import { styled } from '@theme'
import { Heading, Button, Rating, Price } from '@components'

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
  padding: '16px 0px 20px',
})

const ItemTextWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  // '*': { lineHeight: 1.2 },
  '> *:last-child': { lineHeight: 1.3 }
})

const ItemDetail = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4
})

const RatingWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  gap: 4,
  '> *:first-child': { marginBottom: 1 }
})

const SaveWithWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative',
  marginTop: 2,

  img: { width: 26 }
})

const DeliveryOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative'
})

interface ItemProps {
  image: string
  title: string
  price: string | number
  ratingNumber?: number
}

export const Item = ({
    image,
    title,
    price,
    ratingNumber
  }:ItemProps) => {
  
  return(

    <ItemWrap>
      <ItemContent>
        <ItemImage><img src={ image } alt={ title } /></ItemImage>
        <ItemText>
          <div>
            <Button 
              width="auto" 
              icon="plus"
              title="Add" 
              onClick={() => alert('hello')} 
            />
          </div>

          <ItemDetail>
            <ItemTextWrap>
              {/* <Heading bold title={ price } /> */}
              <Price amount={ price } />
              <Heading size="l0" title={ title.length > 20 ? `${title.substring(0, 43)}...` : title } />
            </ItemTextWrap>

            <RatingWrap>
              <Rating fiveStars noText size="l0" />
              <Heading size="l0" title={ ratingNumber } />
            </RatingWrap>

            <SaveWithWrap>
              <Heading bold color="brand" size="l0" title="Save with" />
              <img src="/badges/W+.svg" />
            </SaveWithWrap>
          </ItemDetail>

          <DeliveryOptions>
            <Heading size="l0" title={<>Pickup <strong>today</strong></>} />
            <Heading size="l0" title={<>Delivery <strong>today, by 5pm</strong></>} />
          </DeliveryOptions>
        </ItemText>
      </ItemContent>
    </ItemWrap>

  )
}
