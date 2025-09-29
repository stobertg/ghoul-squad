import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const SellerWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const SellerContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: 12,
  borderRadius: '$r2',
  background: '$bgPrimary'
})

const SellerInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative'
})

const SellerInfoText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  gap: 4
})

const SellerImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 36,
  height: 36,
  borderRadius: '50%',
  overflow: 'hidden',

  img: {
    position: 'absolute',
    width: '102%',
    height: '102%',
    objectFit: 'cover'
  }
})

interface SellerProps {

}

export const DropSeller = ({}:SellerProps) => {
  return(

    <SellerWrap>
      <SellerContent>
        <SellerInfo>
          <SellerImage><img src="/brand/ghoul.jpg" /></SellerImage>
          <SellerInfoText>
            <Heading size="l0" color="secondary" title="In collaboration with" />
            <Heading bold size="l1" title="@GhoulSquad" />
          </SellerInfoText>
        </SellerInfo>

        <Button title="Follow" />
      </SellerContent>
    </SellerWrap>
      
  )
}