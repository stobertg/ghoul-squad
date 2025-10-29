import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

// For the master container of the product card in the live view
// This shows the purchasing items, above the input in the Live screen
 
const CardWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  paddingRight: 16,
  borderRadius: '$r2',
  overflow: 'hidden',

  // For the background blur, on the back of the product card 

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '$r2',
    zIndex: 1
  },

  // For the white overlay, above the background blur

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 255, 255, 255, 0.7 )',
    borderRadius: '$r2',
    zIndex: 2
  }
})

// For all of the content wihtin the master container of the card
// This holds the image on the left and the text and button on the right of the container

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  zIndex: 3,
})

// For the container of the image on the left of the card
// This set the image of the puduct, a bit of it offset within the container

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItem: 'center',
  position: 'relative',
  width: 100,
  height: 72,
  overflow: 'hidden',

  // For the position of the image to be offset a bit from the master container

  img: {
    position: 'absolute',
    width: '110%',
    objectFit: 'contain'
  }
})

// For the container of the text and the button on the right of the container
// This contains the title, price and button action to buy the product

const CardInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
  position: 'relative',
  padding: '12px 0',
  '*': { whiteSpace: 'nowrap' }
})

// For the container of the text, to the left of the but now button
// This contains the title of the product and the price of it

const CardText = styled('div', {
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  position: 'relative',
  marginTop: 4,
  '*': { color: '#1e1e1e !important' }
})

// -------------- Typescript declarations -------------- //

interface CardProps {
  image: string
  title: string
  price: string | number
}

// ---------- This is the end of declarations ---------- //

export const ProductCard = ({
    image,
    title,
    price
  }:CardProps) => {
  
  return(

    <CardWrap>
      <CardContent>
        <CardImage>
          <img src={ image } alt={ title } />
        </CardImage>

        <CardInfo>
          <CardText>
            <Heading bold color="invert" title={ title } />
            <Heading size="l1" color="invert" title={ price } />
          </CardText>

          <Button width="auto" title="Buy now" />
        </CardInfo>
      </CardContent>
    </CardWrap>

  )
}
