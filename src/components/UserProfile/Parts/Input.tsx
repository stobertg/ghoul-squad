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
  width: '100%',
  margin: '0 auto',
  paddingRight: 8,
//   border: '1px solid #494949',
  borderRadius: '$pill',
  overflow: 'hidden',
  border: '1px solid $seperator',
  '> *': { zIndex: 2 },

  '&:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$inputBg'
  },

  input: {
    display: 'flex',
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent', 
    appearance: 'none',
    padding: '15px 20px',
    fontSize: '$s1',
    '&::placeholder': { color: '#888' }
  }
})

interface InputProps {

}

export const Input = ({}:InputProps) => {
  return(

    <InputWrap>
      <InputContent>
        <input placeholder="Share with community..." />
        <ButtonIcon size="l1" icon="image" />
      </InputContent>
    </InputWrap>

  )
}