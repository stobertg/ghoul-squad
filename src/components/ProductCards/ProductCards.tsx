import React from 'react'
import { styled } from '@theme'
import { Heading, ProductCard, Grid } from '@components'

const CardWrap = styled('div', {

})

interface CardProps {
  items: {
    image?: string
    title: string
  }[]
}

export const ProductCards = ({ items }:CardProps) => {
  return(

    <CardWrap>
      <Heading title="Latest" />

      <Grid>
        { items.map(( item, i ) => (

          <ProductCard 
            key={`item-${ i }`}
            image={ item.image }
            title={ item.title } 
          />

        ))}
      </Grid>
    </CardWrap>

  )
}