import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const NavWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',
  width: '100%',
  borderTop: '1px solid $seperator',
  zIndex: 1000,

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '0 0 50px 50px',
    zIndex: 0
  },

  '@mobile': { 
    position: 'fixed'
  }
})

const NavContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '16px 24px 32px 40px',
  background: '$foreground',
  overflow: 'hidden',
  // boxShadow: '0 2px 10px rgba( 0,0,0, 0.2 )',

  '@mobile': {
    padding: '12px 20px 12px 20px'
  }
})

interface NavProps {
  title?: string
}

export const NavBottom = ({ title }:NavProps) => {
  return(

    <NavWrap>
      <NavContent>
        <Heading heavy title="$27.99" />
        <Button title={ title ?? "Add to cart"} />
      </NavContent>
    </NavWrap>

  )
}