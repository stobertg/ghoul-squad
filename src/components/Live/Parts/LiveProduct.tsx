import React from 'react'
import { styled } from '@theme'
import { ProductCard } from './'

const ProductWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },
})

const ProductContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  padding: '0 16px'
})

interface ProductProps {
  cards?: {
    image: string
    title: string
    price: string | number
  }[]
}

export const LiveProduct = ({ cards }:ProductProps) => {
  return(

    <ProductWrap>
      <ProductContent>
        { cards?.map(( card, i ) => (

          <ProductCard 
            key={`card-${ i }`}
            image={ card.image }
            title={ card.title }
            price={ card.price }
          />
          
        ))}

      </ProductContent>
    </ProductWrap>

  )
}