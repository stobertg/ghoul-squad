import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const NavWrap = styled('div', {
  position: 'absolute',
  bottom: 24,
  left: 0,
  width: '100%',
  zIndex: 9000,

  '@mobile': { 
    position: 'fixed',
    bottom: 12
  }
})

const NavContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  padding: '12px 20px',
  background: 'rgba( 0,0,0, 0.8 )',
  borderRadius: '$r2',
  overflow: 'hidden',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.2 )',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '$r2',
    overflow: 'hidden',
    zIndex: 0
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