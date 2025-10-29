import React from 'react'
import { styled } from '@theme'

const TextWrap = styled('em', {

  color: '$green'
})

interface TextProps {
  children: React.ReactNode
}

export const TextEm = ({ children }:TextProps) => {
  return(

    <TextWrap>{ children }</TextWrap>

  )
}
