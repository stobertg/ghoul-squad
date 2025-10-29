import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { CartIcon } from './Parts/Icon'

const CartWrap = styled('div', {
  marginLeft: 4,

  '*': { fontSize: 10 }
})

interface CartProps {

}

export const CartButton = ({}:CartProps) => {
  return(

    <CartWrap>
      <CartIcon />
      <Heading title="$0.00" />
    </CartWrap>

  )
}
