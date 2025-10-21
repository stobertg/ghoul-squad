import React from 'react'
import { styled } from '@theme'
import { PaymentMethod, ItemCarousel } from '@components'
import { Shipping } from './Parts/Shipping'
import { Confirm } from './Parts/Confirm'
import confetti from "canvas-confetti"

const ConfirmWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  paddingBottom: 50,
  overflow: 'scroll',
  
  '> *:not(:last-child)': {
    marginBottom: 40,
    paddingBottom: 40,
    borderBottom: '1px solid $border'
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
  const handleClick = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]
    const frame = () => {
      if (Date.now() > end) return
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })
      requestAnimationFrame(frame)
    }
    frame()
  }

  return(

    <ConfirmWrap>
      <ConfirmContent>
        <Confirm />
        <Shipping />
        <PaymentMethod />
      </ConfirmContent>

      <ItemCarousel 
        noButton
        width="l0"
        title="Explore more Collectables"
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
            image: "/ghouls/static/frank.webp",
            title: "Sir Frank Blind Box",
            price: "$27.99"
          },
          {
            image: "/ghouls/static/casper.webp",
            title: "Sir Casper Blind Box",
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