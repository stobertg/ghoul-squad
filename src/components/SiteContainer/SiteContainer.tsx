import React from 'react'
import { styled } from '@theme'

const SiteWrap = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '32px auto',
  '@mobile': { margin: '0 auto' }
})

interface SiteProps {
  children: React.ReactNode
}

export const SiteContainer = ({ children }:SiteProps) => {
  return(

    <SiteWrap>{ children }</SiteWrap>

  )
}