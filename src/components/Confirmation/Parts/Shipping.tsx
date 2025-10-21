import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

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

const ShippingWrap = styled('div', {
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

interface ShipProps {

}

export const Shipping = ({}:ShipProps) => {
  return(

    <ShippingWrap>
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
    </ShippingWrap>

  )
}