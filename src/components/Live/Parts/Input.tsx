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
  paddingRight: 12,
  border: '1px solid #353535',
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
    background: 'rgba( 0,0,0, 0.8 )'
  },

  input: {
    display: 'flex',
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent', 
    appearance: 'none',
    padding: '18px 20px',
    fontSize: '$s1',
    '&::placeholder': { color: '#fff' }
  }
})

interface InputProps {

}

export const Input = ({}:InputProps) => {
  return(

    <InputWrap>
      <InputContent>
        <input placeholder="Add comment..." />
        <ButtonIcon size="l1" variant="neutral" icon="arrow-up" />
      </InputContent>
    </InputWrap>

  )
}