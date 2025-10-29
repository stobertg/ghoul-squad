import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const ChatWrap = styled ('div', {
  position: 'relative',
  width: 'auto',
  maxWidth: 320,
})

const ChatContent = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative',
  padding: '12px 20px',
  borderRadius: '$r2',
  '*': { zIndex: 3, color: '$white' },
  
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
    backdropFilter: 'blur( 10px )',
    zIndex: 1
  },

  '&:after': { 
    background: 'rgba( 0,0,0, 0.4 )',
    zIndex: 2 
  }
})



interface ChatProps {
  author: string
  text: string | React.ReactNode
}

export const ChatBubble = ({
    author,
    text
  }:ChatProps) => {
  
  return(

    <ChatWrap>
      <ChatContent>
        <Heading bold size="l0" title={ author } />
        <Text fontSize="l0">{ text }</Text>
      </ChatContent>
    </ChatWrap>

  )
}