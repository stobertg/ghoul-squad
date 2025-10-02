import React from 'react'
import { styled } from '@theme'
import { Heading, Icon, InputChat } from '@components'

const ChatWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  zIndex: 10,
})

const ChatHeader = styled('div', {
  position: 'relative',
  width: '100%'
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

const ChatImage = styled('div', {
  position: 'relative',
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: 'yellow'
})

interface ChatProps {

}

export const AiChat = ({}:ChatProps) => {
  return(

    <ChatWrap>
      <ChatHeader>
        <ChatHeaderContent>

          <ChatHeaderLeft>
            <ChatImage />
            <Heading bold size="l1" title="Ask Mr Ghoul" /> 
          </ChatHeaderLeft>

        </ChatHeaderContent>
      </ChatHeader>

      <InputChat />
    </ChatWrap>

  )
}
