import React from 'react'
import { styled } from '@theme'
import { Heading, ButtonContainer } from '@components'
import { ChipBase } from './Parts/Base'

const ChipWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

interface BrandProps {
  size?: 'l0'
  image?: string
  title?: string
  hasBy?: boolean
  onClick?: any
  brands?: {
    image: string
    title: string
    onClick?: any
  }[]
}

export const BrandChip = ({ 
    image,
    title,
    hasBy, 
    brands,
    onClick,
    size
  }:BrandProps) => {
  
  return(

    <ChipWrap>
      { hasBy && ( <Heading size="l0" title="By" /> )}

      { brands ? (

        <ButtonContainer spacing="l0">
          { brands.map(( brand, i ) => (

            <ChipBase 
              key={`brand-${ i }`}
              image={ brand.image }
              title={ brand.title }
              onClick={ brand.onClick }
              size={ size }
            />

          ))}
        </ButtonContainer>
      
      ) : (

        <ChipBase {...{ image, title, onClick, size }} />

      )}
    </ChipWrap>

  )
}