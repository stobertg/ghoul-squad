import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'
import { Input, Prompts } from './Parts'

const PromptWrap = styled('div', {
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
})

const PromptContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  width: '100%',
  padding: '16px 0',
  background: '$bgPrimary',
  borderRadius: '$r2'
})

const PromptHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%',
})

const PromptBlock = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 16px'
})

const PromptHeaderTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4
})

const IconWrap = styled('div', {
  width: 48
})

const SubTitle = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative'
})

const PromptMore = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '16px 16px',
  background: '$brandSubtle',
  borderRadius: '$r1'
})

interface AiProps {

}

export const AiInline = ({}:AiProps) => {
  return(

    <PromptWrap>
      <PromptContent>
        <PromptBlock>
          <PromptHeader>
            <IconWrap><img src="/brand/wink.png" /></IconWrap>
            <PromptHeaderTitle>
              <Heading bold size="l1" title="Ask Sparky " />
              <SubTitle>
                <Heading size="l0" title="Your AI shopping assistant" />
                <Icon size="l0" icon="info" />
              </SubTitle>
            </PromptHeaderTitle>
          </PromptHeader>
        </PromptBlock>

        <Prompts 
          prompts={[
            { title: "What's inside the blind box?" },
            { title: "Sneak peek?" },
            { title: "Which one is the rarest?" }
          ]}
        />

        <PromptBlock>
          <PromptMore>
            <Heading size="l1" title="Ask a different question" />
            <Icon size="l0" icon="message-circle" />
          </PromptMore>
        </PromptBlock>
      </PromptContent>
    </PromptWrap>

  )
}
