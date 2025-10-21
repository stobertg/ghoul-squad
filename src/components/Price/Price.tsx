import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const PriceWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 2,
  '*': { lineHeight: '1 !important' }
})

const PriceSub = styled('div', {
  position: 'relative',
  marginTop: 1
})

interface PriceProps {
  amount?: number | string
  dollars?: number | string
  cents?: number | string
  currency?: string
}

export const Price = ({
  amount,
  dollars: dollarsProp,
  cents: centsProp,
  currency,
}:PriceProps) => {
  // Helper to split a numeric/string amount into dollars/cents
  const splitAmount = (val: number | string | undefined) => {
    if (val === undefined || val === null) return null
    const num = typeof val === 'string' ? Number(val) : val
    if (isNaN(num)) return null
    const abs = Math.abs(num)
    const whole = Math.floor(abs)
    const frac = Math.round((abs - whole) * 100)
    const padded = frac.toString().padStart(2, '0')
    return { dollars: whole.toString(), cents: padded }
  }

  const fromAmount = splitAmount(amount)

  const dollars = (fromAmount?.dollars ?? (dollarsProp !== undefined ? String(dollarsProp) : '0'))
  const centsRaw = (fromAmount?.cents ?? (centsProp !== undefined ? String(centsProp) : '0'))
  const cents = centsRaw.padStart(2, '0').slice(0, 2)

  return (
    <PriceWrap>
      <PriceSub><Heading bold size="l0" title={currency ? currency : '$'} /></PriceSub>
      <Heading bold size="l3" title={dollars} />
      <PriceSub><Heading bold size="l0" title={cents} /></PriceSub>
    </PriceWrap>
  )
}
