import React, { useState } from 'react'
import { styled } from '@theme'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100dvh',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

export default function Home() {

  return (

    <Wrapper>
        <img src="/lotr/golem.gif" />
    </Wrapper>

  )
}
