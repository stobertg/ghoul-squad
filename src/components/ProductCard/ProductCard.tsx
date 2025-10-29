import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const CardWrap = styled('div', {
  position: 'relative',
  width: '100%',
  background: '$bgPrimary',
  borderRadius: '$r2'
})

const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '12px 0',
  textAlign: 'center'
})

const CardImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 150,
  height: 150,
  background: '$bgInvert',
  borderRadius: '$r1',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
})

const CardText = styled('div', {

})

const CardExtra = styled('div', {

})

interface CardProps {
  image?: string
  title: string
}

export const ProductCard = ({
    image,
    title,
  }:CardProps) => {
  
  return(

    <CardWrap>
      <CardContent>
        <CardImage>
          <img src={ image } alt={ title } />
        </CardImage> 
        
        <CardText>
          <Heading bold size="l1" {...{ title }} />
          <CardExtra>
            <Heading size="l0" color="secondary" title="Limited edition" />
            <Heading size="l0" color="secondary" title="0 of 100" />
          </CardExtra>
        </CardText>  
      </CardContent>
    </CardWrap>

  )
}