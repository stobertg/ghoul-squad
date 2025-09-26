import React from 'react'
import { styled } from '@theme'

const GridWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const GridContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '8px',
  gridRowGap: '8px',
  position: 'relative',
})

interface GridProps {
  children: React.ReactNode
}

export const Grid = ({ children }:GridProps) => {
  return(

    <GridWrap>
      <GridContent>{ children }</GridContent>
    </GridWrap>

  )
}