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
  padding: '0 24px',
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
  padding: '0 24px',

  a: {
    textDecoration: 'underline',
    fontSize: '$s1'
  },

  variants: {
    width: {
      l0: { padding: '0 20px' }
    }
  }
})

const CarTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative'
})

interface ItemProps {
  title?: string
  noButton?: boolean
  width?: 'l0'
  items: {
    image: string
    title: string
    price: string | number
    ratingNumber?: number
  }[]
}

export const ItemCarousel = ({ items, noButton, width, title }:ItemProps) => {
  return(

    <CarWrap>
      <CarHeader {...{ width }}>
        <CarTitle>
          <Heading 
            bold 
            size="l2" 
            title={ title ?? "More from Ghoul Squad" } 
          />

          <Heading 
            size="l1" 
            title={ `(${ items.length })` } 
          />
        </CarTitle>

        { noButton ?? ( <a href="#">View all</a> )}
      </CarHeader>

      <CarContent {...{ width }}>
        { items.map(( item, i ) => (

          <Item 
            key={`item${ i }`}
            image={ item.image }
            title={ item.title }
            price={ item.price }
            ratingNumber={ item.ratingNumber }
          />

        ))}
      </CarContent>
    </CarWrap>
      
  )
}