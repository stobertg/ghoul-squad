import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const SelectWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

const SelectButton = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
  position: 'relative',
  width: '50%',
  padding: '10px 8px 12px',
  border: '1px solid $border',
  borderRadius: '$r1',
  textAlign: 'left',

  variants: {
    active: {
      true: { 
        border: '1px solid $borderActive',
        background: '$brandSubtle'
      }
    }
  }
})

const ButtonIcon = styled('div', {
  width: 28,
  height: 28
})

const ButtonText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative',
  marginTop: 4
})

interface SelectProps {

}

export const Selection = ({}:SelectProps) => {
  return(

    <SelectWrap>
      <SelectButton>
        <ButtonIcon><img src="/brand/pickup-disabled.svg" /></ButtonIcon>

        <ButtonText>
          <Heading size="l1" title="Pickup" />
          <Heading size="l0" title="Not available" />
        </ButtonText>
      </SelectButton>

      <SelectButton active>
        <ButtonIcon><img src="/brand/delivery.svg" /></ButtonIcon>

        <ButtonText>
          <Heading bold size="l1" title="Delivery" />
          <Heading bold size="l0" title="Tomorrow" />
        </ButtonText>
      </SelectButton>
    </SelectWrap>

  )
}