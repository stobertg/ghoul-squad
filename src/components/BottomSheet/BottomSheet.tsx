import React from 'react'
import { styled } from '@theme'
import { ButtonIcon } from '@components'

const SheetWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  minHeight: 400,
  borderRadius: '$r2 $r2 0 0',
  overflow: 'hidden',
  zIndex: 9000,

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

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 50,50,50, 0.9 )',
    zIndex: 1,
  }
})

const SheetContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  width: '88%',
  margin: '0 auto',
  zIndex: 10
})

const SheetClose = styled('div', {
  position: 'absolute',
  top: 10,
  right: 10,
  width: 40,
  height: 40,
  borderRadius: '50%',
  // background: '#fff',
  zIndex: 10
})

interface SheetProps {
  children: React.ReactNode
}

export const BottomSheet = ({ children }:SheetProps) => {
  return(

    <SheetWrap>
      <SheetContent>
        { children }
      </SheetContent>

      <SheetClose><ButtonIcon size="l1" icon="x" /></SheetClose>
    </SheetWrap>

  )
}