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
  '&::-webkit-scrollbar': { display: 'none' },

  variants: {
    width: {
      l0: { padding: '0 20px' }
    }
  }
})

const CarHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 32px',

  variants: {
    width: {
      l0: { padding: '0 20px' }
    }
  }
})

interface ItemProps {
  title?: string
  noButton?: boolean
  width?: 'l0'
  items: {
    image: string
    title: string
    price: string | number
  }[]
}

export const ItemCarousel = ({ items, noButton, width, title }:ItemProps) => {
  return(

    <CarWrap>
      <CarHeader {...{ width }}>
        <Heading 
          bold 
          size="l2" 
          title={ title ?? "More from Ghoul Squad"} 
        />
        { noButton ?? ( <Button title="Shop" /> )}
      </CarHeader>

      <CarContent {...{ width }}>
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