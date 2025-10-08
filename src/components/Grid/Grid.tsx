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

  variants: {
    columns: {
      3: { gridTemplateColumns: 'repeat(3, 1fr)' }
    }
  }
})

interface GridProps {
  children: React.ReactNode
  columns?: 3
}

export const Grid = ({ children, columns }:GridProps) => {
  return(

    <GridWrap>
      <GridContent {...{ columns }}>{ children }</GridContent>
    </GridWrap>

  )
}