import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const IntroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%'
})

interface IntroProps {
  title: string
  text: string
}

export const ProfileIntro = ({
    title,
    text
  }:IntroProps) => {
  
  return(

    <IntroWrap>
      <Heading bold size="l4" {...{ title }} />
      <Text fontSize="l1">{ text }</Text>
    </IntroWrap>

  )
}
