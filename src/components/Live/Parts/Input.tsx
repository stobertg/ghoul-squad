import React from 'react'
import { styled } from '@theme'
import { ButtonIcon } from '@components'

const InputWrap = styled('div', {
  position: 'relative',
  width: '100%',
})

const InputContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '92%',
  margin: '0 auto',
  paddingRight: 8,
  border: '1px solid #494949',
  borderRadius: '$pill',
  overflow: 'hidden',
  '> *': { zIndex: 2 },

  // For the blur background

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '$pill',
    zIndex: 1
  },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba( 48,48,48, 0.5 )'
  },

  input: {
    border: 'none',
    outline: 'none',
    background: 'transparent', 
    appearance: 'none',
    padding: '16px 20px',
    fontSize: '$s1'
  }
})

interface InputProps {

}

export const Input = ({}:InputProps) => {
  return(

    <InputWrap>
      <InputContent>
        <input placeholder="Add comment..." />
        <ButtonIcon variant="primary" icon="arrow-up" />
      </InputContent>
    </InputWrap>

  )
}