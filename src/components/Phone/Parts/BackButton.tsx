import React from 'react'
import { styled } from '@theme'

const ButtonWrap = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: '#fff',
  overflow: 'hidden',

  svg: { width: 18, color: '#000' }
})

export const BackButton = () => {
  return(

    <ButtonWrap>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
    </ButtonWrap>
      
  )
}