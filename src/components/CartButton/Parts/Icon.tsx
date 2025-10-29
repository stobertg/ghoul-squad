import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const IconWrap = styled('div', {
  position: 'relative',
})

const IconMain = styled('div', {
  color: '$cart'
})

const CartBubble = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -5,
  right: -5,
  width: 16,
  height: 16,
  borderRadius: '50%', 
  background: '#FFC220',
  border: '2px solid #662B0D',
  color: '#000'
})

export const CartIcon = () => {
  return(

    <IconWrap>
      <IconMain>
        <Icon icon="cart2" />
      {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 18C9.82843 18 10.5 18.6716 10.5 19.5C10.5 20.3284 9.82843 21 9 21C8.17157 21 7.5 20.3284 7.5 19.5C7.5 18.6716 8.17157 18 9 18ZM18.75 18C19.5784 18 20.25 18.6716 20.25 19.5C20.25 20.3284 19.5784 21 18.75 21C17.9216 21 17.25 20.3284 17.25 19.5C17.25 18.6716 17.9216 18 18.75 18ZM4.27637 3C4.73995 3 5.14889 3.30407 5.28223 3.74805L5.50781 4.5H21.4512C22.1227 4.50005 22.6219 5.12182 22.4766 5.77734L21.1035 11.9531C21.0061 12.3915 20.6406 12.7199 20.1943 12.7695L7.96387 14.1279C7.74257 14.1526 7.57529 14.3398 7.5752 14.5625C7.5752 14.804 7.77118 15 8.0127 15H20.25V16.5H8.0127C6.94275 16.5 6.0752 15.6324 6.0752 14.5625C6.07529 13.5754 6.81778 12.7467 7.79883 12.6377L19.709 11.3135L20.8896 6H5.95801L7.46875 11.0342L6.03125 11.4658L3.94238 4.5H1.5V3H4.27637Z" fill="currentColor" />
      </svg> */}


      </IconMain>

      <CartBubble>
        <Heading bold title="0" />
      </CartBubble>
    </IconWrap>

  )
}