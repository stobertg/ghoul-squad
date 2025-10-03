import React from 'react'
import { styled } from '@theme'
import { Grid, Icon, Heading } from '@components'

const RepWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%'
})

const RepItem = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 100,
  border: '1px solid $border',
  borderRadius: '$r2',
  textAlign: 'center'
})

const RepMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative'
})

const RepIcon = styled('div', {
  position: 'absolute',
  top: 10,
  left: 10,
})

interface RepProps {
  items: {
    title: string
    subtitle: string
    icon: string
  }[]
}

export const Reputation = ({ items }:RepProps) => {
  return(

    <RepWrap>
      <Heading size="l1" color="secondary" title="Reputation" />

      <Grid>
        { items.map(( item, i ) => (

          <RepItem key={`item-${ i }`}>
            <RepMain>
              <Heading bold size="l3" title={ item.title } />
              <Heading size="l0" color="secondary" title={ item.subtitle } />
            </RepMain>

            <RepIcon><Icon size="l0" icon={ item.icon } /></RepIcon>
          </RepItem>

        ))}
      </Grid>
    </RepWrap>

  )
}