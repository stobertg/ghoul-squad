import React from 'react'
import { styled } from '@theme'

// For the master container of the foundational text component
// This component is used to automate spacing, sizes, widths, ect for components wrapped within this components

const TextWrap = styled('div', {
  position: 'relative',
  maxWidth: 800,
  width: '100%',
  color: '$textSecondary',
  lineHeight: 1.3,

  '*': { fontFamily: '$serif' },

  // For the spacing automation of text that lives within the container

  '> *:not(:last-child)': {
    margin: '0 auto 24px !important'
  },

  // For the automation of the links within the text component
  // This is A11y compliant by adding the underline decoration along with a color to indicate afforance

  a: {
    textDecoration: 'underline',
    color: '$green'
  },

  // For the line height of the text within long-form content
  // This is only specific to the text container and overrides the default line height needed for other components

  p: { lineHeight: 1.5 },

  // For the varients used within the text component
  // Here we address the font size, columns, alignment, and width

  variants: {
    font: {
      serif: { '*': { fontFamily: '$serif' }},
      sansSerif: { '*': { fontFamily: '$sanSerif'}}
    },

    // Supporting the different font sizes in the text container
    // By default the text is 16px and these change the text sizes to be larger

    fontSize: {
      l0: { fontSize: '$s1', lineHeight: 1.3 },
      l1: { fontSize: '$s2', lineHeight: 1.5 },
      l2: { fontSize: '$s3', lineHeight: 1.75 },
      l3: { fontSize: '$s4', lineHeight: 1.75 }
    },

    // For the alignment od the text within the container
    // By default, the text is aligned on the left. The center alignment displays the text in the center of the container

    alignment: {
      center: { margin: '0 auto' }
    },

    // For spporting the different widths within the container
    // By default, the text is 100% widt hand this allows for changes for the readability of the text

    width: {
      small: { maxWidth: 600 },
      large: { maxWidth: 1000 }
    },

    color: {
      darkBg: { p:{ color: '$textDarkBg' }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface TextProps {
  fontSize?: 'l0' | 'l1' | 'l2' | 'l3'
  width?: 'small'
  alignment?: 'center'
  font?: 'serif' | 'sansSerif'
  color?: 'darkBg'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Text = ({
    fontSize, // Supporting the changes in the default font size for the text
    children, // Supporting the text, quotes, bullets, ect within the text component
    width, // Supporting the width of the text within the container
    alignment, // Supporting the center alignment of the text within the container
    font, // Supporting the ability to have different fonts within the text component - serif and sansserif
    color // Supporting the text on different background
  }: TextProps ) => {
  
  return(

    <TextWrap 
      {...{ fontSize, alignment, font, color }}
      width={ fontSize == 'l3' ? 'large' : width }
    >
      { children }
    </TextWrap>
    
  )
}
