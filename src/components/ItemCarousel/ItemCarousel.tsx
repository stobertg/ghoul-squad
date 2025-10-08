import React from 'react'
import { styled } from '@theme'
import { Item } from './Parts/Item'
import { Heading, Button } from '@components'

const CarWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative'
})

const CarContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  position: 'relative',
  padding: '0 32px',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' }
})

const CarHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 32px'
})

interface ItemProps {
  items: {
    image: string
    title: string
    price: string | number
  }[]
}

export const ItemCarousel = ({ items }:ItemProps) => {
  return(

    <CarWrap>
      <CarHeader>
        <Heading bold size="l2" title="More from Ghoul Squad" />
        <Button title="Shop" />
      </CarHeader>

      <CarContent>
        { items.map(( item, i ) => (
          <Item 
            key={`item${ i }`}
            image={ item.image }
            title={ item.title }
            price={ item.price }
          />
        ))}
      </CarContent>
    </CarWrap>
      
  )
}