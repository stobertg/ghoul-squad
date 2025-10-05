import React from 'react'
import { styled } from '@theme'
import { Review, ReviewOverview } from './Parts'

const ReviewWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%'
})

interface ReviewProps {

}

export const Reviews = ({}:ReviewProps) => {
  return(

    <ReviewWrap>
      <ReviewOverview />
      <Review />
    </ReviewWrap>

  )
}