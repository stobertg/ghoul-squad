import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const NavWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  borderTop: '1px solid $border',
  zIndex: 8000,

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
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
  padding: '16px 28px 32px 28px',
  background: 'rgba( 24,24,24, 0.8 )',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.2 )',

  '@mobile': {
    padding: '16px 28px 16px 28px'
  }
})

interface NavProps {

}

export const NavBottom = ({}:NavProps) => {
  return(

    <NavWrap>
      <NavContent>
        <Heading heavy title="$27.99" />
        <Button title="Add to cart" />
      </NavContent>
    </NavWrap>

  )
}