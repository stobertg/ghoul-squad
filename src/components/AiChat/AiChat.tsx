import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, ButtonIcon } from '@components'
import { Input } from './Parts/Input'
import { Prompts } from './Parts/Prompts'

const ChatWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  zIndex: 10,
  borderRadius: '$r2 $r2 0 0',
  overflow: 'hidden',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '$r2 $r2 0 0',
    overflow: 'hidden'
  }
})

const ChatContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  position: 'relative',
  minHeight: 500,
  padding: '12px 0px 36px 0px',
  background: 'rgba( 0,0,0, 0.8 )'
})

const ChatHeader = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const ChatHeaderContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: '16px 0'
})

const ChatHeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const ChatClose = styled('div', {
  position: 'absolute',
  top: 20,
  right: 20
})

const ChatInput = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const ChatBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  width: '100%'
})

interface ChatProps {
  closeChat?: any
}

export const AiChat = ({ closeChat }:ChatProps) => {
  return(

    <ChatWrap>
      <ChatContent>
        <ChatHeader>
          <ChatHeaderContent>

            <ChatHeaderLeft>
              <Icon icon="sparkles" />
              <Heading bold size="l1" title="Ask Mr Ghoul" /> 
            </ChatHeaderLeft>

          </ChatHeaderContent>
        </ChatHeader>

        <ChatBottom>
          <Prompts 
            prompts={[
              { title: "What's inside the blind box?" },
              { title: "Sneak peek?" },
              { title: "Which one is the rarest?" }
            ]}
          />
          <ChatInput><Input /></ChatInput>
        </ChatBottom>
      </ChatContent>

      <ChatClose><ButtonIcon icon="x" onClick={ closeChat } /></ChatClose>
    </ChatWrap>

  )
}
