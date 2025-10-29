import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const Wrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const CheckBox = styled('div', {
  position: 'relative',
  width: 22,
  height: 22,
  border: '1px solid $border',
  borderRadius: 6
})

const BoxText = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative',

  img: {
    display: 'flex',
    position: 'relative',
    width: 72
  }
})

const BoxImage = styled('div', {
  position: 'relative',
  height: '100%',
  paddingBottom: 3
})

interface WPlusProps {

}

export const WPlus = ({}:WPlusProps) => {
  return(

    <Wrap>
      <Content>
        <CheckBox />
        <BoxText>
          <Heading size="l0" title="I want delivery savings with" />
          <BoxImage><img src="/brand/w+.svg" /></BoxImage>
        </BoxText>
      </Content>
    </Wrap>

  )
}