import React from 'react'
import { styled } from '@theme'

const IconWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 36,
  height: 36,
  borderRadius: 10,
  background: '#fff',
  img: { width: '80%' }
})

interface AppProps {

}

export const AppIcon = ({}:AppProps) => {
  return(

    <IconWrap>
      <img src="/badges/badge_collab.png" alt="Collab Badge" />
    </IconWrap>

  )
}