import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const PayWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const PayContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  padding: 20,
  border: '1px solid $border',
  borderRadius: '$r2'
})

const PaymentMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative'
})

const Payment = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%'
})

const PaymentHeading = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',

  a: {
    textDecoration: 'underline',
    fontSize: '$s0'
  }
})

const DetailPayment = styled('div', {
  display: 'flex',
  flexDirecton: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const MasterCard = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 24,
  borderRadius: 8,
  background: '#fff',
  img: { width: '70%' }
})

interface PayProps {

}

export const PaymentMethod = ({}:PayProps) => {
  return(

    <PayWrap>
      <PayContent>
        <PaymentHeading>
          <Heading bold size="l1" title="Payment method" />
          <a href="#">View details</a>
        </PaymentHeading>
        
        <PaymentMain>
          <Payment>
            <DetailPayment>
              <MasterCard><img src="/payment/ma_symbol.svg" /></MasterCard>
              <Heading size="l1" title={<>Ending in <strong>9424</strong></>} />
            </DetailPayment>

            <Heading bold size="l1" title="$27.99" />
          </Payment>

          <Heading size="l0" color="secondary" title="Tip will be charged seperately" />
        </PaymentMain>
      </PayContent>
    </PayWrap>
      
  )
}