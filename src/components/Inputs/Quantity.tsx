import React from 'react'
import { styled } from '@theme'
import { ButtonIcon } from '@components'

const QuantWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 90,
  height: 40,
  padding: '0 4px',
  border: '1px solid $border',
  borderRadius: '$pill',

  input: {
    display: 'inline-flex',
    width: 20,
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    textAlign: 'center'
  }
})

interface QuantProps {

}

export const InputQuantity = ({}:QuantProps) => {
  return(

    <QuantWrap>
      <ButtonIcon size="l0" icon="minus" />
      <input defaultValue="1" />
      <ButtonIcon size="l0" icon="plus" />
    </QuantWrap>

  )
}