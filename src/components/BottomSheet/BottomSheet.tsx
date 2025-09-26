import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const SheetWrap = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
})

const SheetContent = styled('div', {

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
    </SheetWrap>

  )
}