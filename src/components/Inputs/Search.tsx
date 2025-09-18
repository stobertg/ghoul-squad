import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

const SearchWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: 220,
  height: 42,
  padding: '0 16px',
  background: '$border',
  borderRadius: '$pill',
  fontFamily: '$sansSerif',

  input: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '0 0 0 44px',
    margin: 0,
    appearance: 'none',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: '$sansSerif',
    font: 'inherit',
    fontSize: 14,
    fontWeight: 300,
    "&::placeholder": { font: 'inherit', color: '#8A8A8A' },
    "&:-webkit-autofill": {
      boxShadow: "0 0 0 1000px $border inset",
      WebkitTextFillColor: "inherit",
      transition: "background-color 5000s ease-in-out 0s"
    }
  }
})

interface SearchProps {

}

export const InputSearch = ({}:SearchProps) => {
  return(

    <SearchWrap>
      <Icon size="l0" icon="search" />
      <input id="search" name="search" type="text" placeholder="Search Finds" />
    </SearchWrap>

  )
}
