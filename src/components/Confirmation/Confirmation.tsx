import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, PaymentMethod, ItemCarousel } from '@components'

const ConfirmWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const ConfirmContent = styled('div', {
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

const Shipping = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  padding: '20px 20px',
  border: '1px solid $border',
  borderRadius: '$r2',
  
  '> *:not(:last-child)': {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottom: '1px solid $border'
  }
})

const ShippingTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 12,
  position: 'relative'
})

const ShippingInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  position: 'relative'
})

const ShippingDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12
})

const ItemImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 50,
  height: 50,
  borderRadius: '$r1',
  overflow: 'hidden'
})

interface ConfirmProps {

}

export const Confirmation = ({}:ConfirmProps) => {
  return(

    <ConfirmWrap>
      <ConfirmContent>
        <Shipping>
          <ShippingTitle>
            <IconWrap><Icon size="l1" icon="truck" /></IconWrap>

            <ShippingInfo>
              <Heading bold size="l1" title="Free shipping, arrives between" />
              <ShippingDetails>
                <Heading bold size="l1" title="Today, 5-6pm" />
                <Heading color="secondary" size="l1" title="Isabella Sparks" />
                <Heading color="secondary" size="l1" title="113 1st St, Dallas, TX 75208" />
              </ShippingDetails>
            </ShippingInfo>
          </ShippingTitle>

          <ItemDetails>
            <Heading size="l1" title={<><strong>Item details</strong> &#40;1&#41;</>} />
            <ItemImage><img src="/ghouls/static/mystery-box.webp" /></ItemImage>
          </ItemDetails>
        </Shipping>

        <PaymentMethod />
      </ConfirmContent>

      <ItemCarousel 
        items={[
          {
            image: "/ghouls/static/mystery-box.webp",
            title: "Ghoul Squad Mystery Drop collaboration with Finds",
            price: "$111.96"
          },
          {
            image: "/ghouls/static/pump.webp",
            title: "Sir Pump Blind Box",
            price: "$27.99"
          },
          {
            image: "/ghouls/static/casper.webp",
            title: "Sir Casper Blind Box",
            price: "$27.99"
          },
          {
            image: "/ghouls/static/frank.webp",
            title: "Sir Frank Blind Box",
            price: "$27.99"
          },
          {
            image: "/ghouls/static/vamp.webp",
            title: "Sir Vamp Blind Box",
            price: "$27.99"
          },
          {
            image: "/ghouls/static/jeremy.webp",
            title: "Jeremy Blind Box",
            price: "$27.99"
          },
        ]}
      />
    </ConfirmWrap>

  )
}