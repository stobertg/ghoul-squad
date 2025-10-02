import React from 'react'
import { styled } from '@theme'
import { Heading, Rating } from '@components'

const ReviewWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%'
})

const ReviewContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
})  

const ReviewChart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'relative',
  gap: 2
})

const ReviewChartItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,

  '> *:first-child': {
    width: 8,
    textAlign: 'center'
  }
})

const ReviewChartBar = styled('div', {
  position: 'relative',
  width: 180,
  height: 6,
  borderRadius: '$pill',
  background: '#2a2a2a',

  variants: {
    primary: { 
      true: { background: '$rating' }
    }
  }
})

const ReviewHero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 12
})

const ReviewHeroMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2
})

const StarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative',
})

interface ReviewProps {

}

export const ReviewOverview = ({}:ReviewProps) => {
  return(

    <ReviewWrap>
      <Heading bold size="l2" title="Verified Reviews" />

      <ReviewContent>
        <ReviewChart>
          <ReviewChartItem><Heading size="l1" title="5" /><ReviewChartBar primary /></ReviewChartItem>
          <ReviewChartItem><Heading size="l1" title="4" /><ReviewChartBar /></ReviewChartItem>
          <ReviewChartItem><Heading size="l1" title="3" /><ReviewChartBar /></ReviewChartItem>
          <ReviewChartItem><Heading size="l1" title="2" /><ReviewChartBar /></ReviewChartItem>
          <ReviewChartItem><Heading size="l1" title="1" /><ReviewChartBar /></ReviewChartItem>
        </ReviewChart>

        <ReviewHero>
          <ReviewHeroMain>
            <Heading bold size="l5" title="5.0" />

            <StarContainer>
              <Rating size="l0" noText />
              <Rating size="l0" noText />
              <Rating size="l0" noText />
              <Rating size="l0" noText />
              <Rating size="l0" noText />
            </StarContainer>
          </ReviewHeroMain>

          <Heading size="l1" color="secondary" title="1,004 reviews" />
        </ReviewHero>
      </ReviewContent>
    </ReviewWrap>

  )
}