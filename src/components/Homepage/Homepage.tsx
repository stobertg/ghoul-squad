import React from 'react'
import { styled } from '@theme'
import { NavChips, Grid, Heading } from '@components'

const HomeWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%',
  height: 696,
  overflow: 'hidden'
})

const HomeContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const HomeCardHero = styled('div', {
  width: '100%',
  height: 180,
  border: '1px solid #222',
  borderRadius: '$r2',

  variants: {
    height: {
      full: { height: '100%' }
    }
  }
})

const GridBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12
})

interface HomeProps {

}

export const HomePage = ({}:HomeProps) => {
  return(

    <HomeWrap>
      <NavChips 
        items={[
          { title: 'Get it Fast' },
          { title: 'New Arrivals' },
          { title: 'Halloween' },
          { title: 'Dinner Nade Easy' },
          { title: 'Gift Shop' },
          { title: 'Toy Shop' },
          { title: 'Pharmacy' },
          { title: 'My Items' },
          { title: 'Credit Card' },
        ]}
      />

      <HomeContent>
        <HomeCardHero></HomeCardHero>

        <Grid gap="l1">
          <GridBlock>
            <HomeCardHero></HomeCardHero>
            <HomeCardHero></HomeCardHero>
          </GridBlock>

          <HomeCardHero height="full"></HomeCardHero>
        </Grid>

        <HomeCardHero></HomeCardHero>
      </HomeContent>
    </HomeWrap>

  )
}