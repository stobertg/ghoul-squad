import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const ConditionWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const ConditionIcon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 20,
  height: 20,
  svg: { width: '100%' }
})

interface ConditionProps {

}

export const Condition = ({}:ConditionProps) => {
  return(

    <ConditionWrap>
      <ConditionIcon>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 14.5028V5.19922H15.003V14.5028C15.003 14.779 14.7791 15.0028 14.503 15.0028H1.5C1.22386 15.0028 1 14.779 1 14.5028Z" stroke="#FFC220"/>
          <path d="M11.1523 12.2055H4.851L3.80078 8.42406L6.42634 10.1047L8.00167 8.00391L9.57701 10.1047L12.2026 8.42406L11.1523 12.2055Z" fill="#FFC220"/>
          <path d="M1 5.20155V3C1 1.89543 1.89543 1 3 1H13.003C14.1075 1 15.003 1.89543 15.003 3V5.20155" stroke="#FFC220"/>
        </svg>
      </ConditionIcon>

      <Heading size="l1" title="New" />
    </ConditionWrap>

  )
}