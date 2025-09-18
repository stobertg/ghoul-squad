import React from 'react'
import { styled } from '@theme'

// For the master container of the headings used throughout the size
// This displays the heading as a block element, and allows for bolding and htags within it

const HeadingWrap = styled('div', {
  position: 'relative',

  strong: {
    fontFamily: '$sansSerifBold',
  },


  // For the different font sizes supported within the headings of the site

  variants: {
    size: {
      l0: { fontSize: '$s0', lineHeight: 1.1 },
      l1: { fontSize: '$s1', lineHeight: 1.1 },
      l2: { fontSize: '$s2', lineHeight: 1.1 },
      l3: { fontSize: '$s3', lineHeight: 1.3 },
      l4: { fontSize: '$s4', lineHeight: 1.1 },
      l5: { fontSize: '$s5', lineHeight: 1.3 },
      l6: { fontSize: '$s6', lineHeight: 1.1 },
      l7: { fontSize: '$s7', lineHeight: 1.1 },
      l8: { fontSize: '$s8', lineHeight: 1.1 },
      l9: { fontSize: '$s9', lineHeight: 1.1 },
      l10: { fontSize: '$s10', lineHeight: 1.1 }
    },

    // For the support of different colors that the heading can be

    color: {
      secondary: { color: '$textSecondary' },
      white: { color: '$white' },
      purple: { color: '$majorelleBlue' }
    },

    font: {
      serif: { fontFamily: '$serif' },
      code: { fontFamily: '$code' }
    }
  }
})

const FontHeavy = styled('strong', {
  fontFamily: '$sansSerifHeavy !important'
})

// -------------- Typescript declarations -------------- //

interface HeadingProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4' | 'l5' | 'l6' | 'l7' | 'l8' | 'l9' | 'l10'
  color?: 'secondary' | 'white' | 'purple'
  title: any
  bold?: boolean
  heavy?: boolean
  font?: 'code' | 'serif'
}

// ---------- This is the end of declarations ---------- //

export const Heading = ({
    size,
    font,
    color,
    title,
    bold,
    heavy
  }:HeadingProps) => {
  
  return(
    
    <HeadingWrap {...{ size, color, font }}>
      { 
        bold ? ( <strong>{ title }</strong> ) : 
        heavy ? ( <FontHeavy>{ title }</FontHeavy> ) : 
        <>{ title }</> 
      }
    </HeadingWrap>
    
  )
}
