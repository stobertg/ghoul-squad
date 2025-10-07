import React from 'react'
import { styled, keyframes } from '@theme'
import { Heading, Text } from '@components'
import { AppIcon } from './'

const fadeIn = keyframes({
  '0%': { transform: 'scale( 0.2 )' },
  '100%': { transform: 'scale( 1 )' }
})

const TextWrap = styled('div', {
  position: 'relative',
  width: '100%',
  
})

const TextContent = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative',
  width: '100%',
  padding: '16px 16px 16px 12px',
  borderRadius: '$r2',
  overflow: 'hidden',
  textAlign: 'left',
  boxShadow: '0 2px 10px rgba( 0,0,0, 0.1 )',
  opacity: 1,
  transform: 'scale( 0.2 )',
  animation: `${ fadeIn } 400ms ease forwards`,
  '*': { zIndex: 3 },

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '$r2'
  },

  '&:before': {
    backdropFilter: 'blur( 5px )',
    zIndex: 1
  },

  '&:after': {
    background: 'rgba( 255,255,255, 0.6 )',
    zIndex: 2
  }
})

const TextIcon = styled('div', {

})

const TextMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  position: 'relative'
})

const TextTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',

  '+ *': { width: '85%' }
})

interface TextProps {
  onClick: any
}

export const TextAlert = ({ onClick }:TextProps) => {
  return(

    <TextWrap>
      <TextContent {...{ onClick }}>
        <TextIcon><AppIcon /></TextIcon>

        <TextMain>
          <TextTitle>
            <Heading bold size="l1" color="invert" title="Ready for Halloween!?" />
            <div style={{ fontSize: 10, color: '#333' }}>1m ago</div>
          </TextTitle>

          <Text fontSize="l0" color="invert">🎃👻🍁 Finds x Ghoul Squad Drop is available now. Tap to join the 🔴 live stream</Text>
        </TextMain>
      </TextContent>
    </TextWrap>

  )
}