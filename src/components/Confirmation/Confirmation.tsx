import React from 'react'
import { styled } from '@theme'
import { PaymentMethod, ItemCarousel } from '@components'
import { Shipping } from './Parts/Shipping'
import { Confirm } from './Parts/Confirm'

const ConfirmWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  paddingBottom: 100,
  overflow: 'scroll',
  
  '> *:not(:last-child)': {
    marginBottom: 40,
    paddingBottom: 40,
    borderBottom: '1px solid $seperator'
  }
})

const ConfirmContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 44,
  height: 44,
  borderRadius: '50%',
  border: '1px solid $border'
})

interface ConfirmProps {

}

export const Confirmation = ({}:ConfirmProps) => {
  return(

    <ConfirmWrap>
      <ConfirmContent>
        <Confirm />
        <Shipping />
        <PaymentMethod />
      </ConfirmContent>

      <ItemCarousel 
        items={[
          {
            image: "/ghouls/static/mystery-box.webp",
            title: "Ghoul Squad Mystery Drop collaboration with Walmart",
            price: "111.96",
            ratingNumber: 23
          },
          {
            image: "/ghouls/static/pump.webp",
            title: "Sir Pump Blind Box",
            price: "27.99",
            ratingNumber: 45
          },
          {
            image: "/ghouls/static/frank.webp",
            title: "Sir Frank Blind Box",
            price: "27.99",
            ratingNumber: 15
          },
          {
            image: "/ghouls/static/casper.webp",
            title: "Sir Casper Blind Box",
            price: "27.99",
            ratingNumber: 32
          },
          {
            image: "/ghouls/static/vamp.webp",
            title: "Sir Vamp Blind Box",
            price: "27.99",
            ratingNumber: 28
          },
          {
            image: "/ghouls/static/jeremy.webp",
            title: "Jeremy Blind Box",
            price: "27.99",
            ratingNumber: 41
          },
        ]}
      />
    </ConfirmWrap>

  )
}