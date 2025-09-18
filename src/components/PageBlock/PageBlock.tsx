import React from 'react'
import { styled } from '@theme'

// For the master container of the page block component
// This holds all sections of content that make up a page

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '50px 0 400px',
  '@tablet': { padding: '0 0 300px' },

  // For the slants on the top of the top and bottom of the container

  '&:before': {
    content: '',
    position: 'absolute',
    top: -150,
    left: 0,
    width: '100%',
    height: 'calc( 100% + 300px )',
    background: '$bgPrimary',
    transform: 'skew( 0deg, 8deg )'
  },

  '&:nth-last-child(2)': {
    paddingBottom: 50,

    '&:before': { 
      height: 'calc( 100% - 150px )',
      transform: 'skew( 0deg, 8deg, 0deg, 0deg )' 
    }
  },

  '&:last-child': {
    paddingBottom: 50,
    '&:before': { 
      display: 'none'
    }
  },

  variants: {
    bgColor: {
      gray: { '&:before': { background: '$bgSecondary' }},
      blue: { '&:before': { background: '$blue800' }}
    }
  }
})

// For all of the content within the master container
// This holds the widths of the content, which ahs three different sizes depending on the context

const BlockContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // For the sizes supported for the container of the content

  variants: {
    width: {
      small: { maxWidth: 800, width: '90%' },
      medium: { maxWidth: 1100, width: '90%' },
      large: {}
    },

    // For the spacing between each of the items within the master container
    // This is optional and not always needed

    blockItemSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 12 }},
      l1: { '> *:not(:last-child)': { marginBottom: 32 }},
      l2: { '> *:not(:last-child)': { marginBottom: 50 }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  bgColor?: 'blue' | 'gray'
  width?: 'small' | 'medium' | 'large'
  blockItemSpacing?: 'l0' | 'l1' | 'l2'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const PageBlock = ({ 
    bgColor,
    width, // Optional - for the width of the content to not be 100% by default
    blockItemSpacing, // Optional - for the spcing between each of the items within the container
    children // Required - For the content within the container
  }:BlockProps) => {
  
  return(

    <BlockWrap {...{ bgColor }}>
      <BlockContent {...{ width, blockItemSpacing }}>
        { children }
      </BlockContent>
    </BlockWrap>

  )
}