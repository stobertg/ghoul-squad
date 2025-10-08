import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, Grid } from '@components'

const NavWrap = styled('div', {
  position: 'relative',
  maxWidth: 300
})

const NavItem = styled('a', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 12,
  position: 'relative',
  padding: '20px 16px',
  border: '1px solid $border',
  borderRadius: '$r2',
  cursor: 'pointer',

  variants: {
    active: {
      true: { 
        borderColor: '$borderActive',
        background: 'rgba( 70, 70, 183, 0.4 )'
      }
    }
  }
})

interface NavProps {
  items?: {
    link: string
    icon: string
    title: string
    active?: boolean
  }[]
}

export const StageNav = ({ items }:NavProps) => {
  return(

    <NavWrap>
      <Grid>
        { items?.map(( item, i ) => (
          <NavItem
            key={`item-${ i }`}
            href={ item.link }
            active={ item.active }
          >
            <Icon icon={ item.icon } />
            <Heading bold size="l1" title={ item.title } />
          </NavItem>
        ))}
      </Grid>
    </NavWrap>

  )
}