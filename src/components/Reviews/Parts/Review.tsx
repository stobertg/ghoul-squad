import React from 'react'
import { styled } from '@theme'
import { Heading, Text, ButtonContainer } from '@components'

const ReviewWrap = styled('div', {

})

const ReviewContent = styled('div', {

})

interface ReviewProps {
  name?: string
  review?: string
  reviews?: {

  }[]
}

export const Review = ({
    reviews,
    name,
    review
  }:ReviewProps) => {
  
  return(

    <>
    { reviews ? ( 

      <></>

      ) : (

        <ReviewWrap>
          <ReviewContent>
            <Heading title={ name } />
            <Text>{ review }</Text>
          </ReviewContent>
        </ReviewWrap>
        
      )}
    </>

  )
}
