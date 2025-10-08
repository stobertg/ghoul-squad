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
  gap: 16,
  position: 'relative',
  width: '100%',
  padding: '16px 0',
  border: '1px solid $border',
  borderRadius: '$r2'
})

const PromptHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%',
  svg: { color: '$borderActive' }
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

})

interface AiProps {

}

export const AiInline = ({}:AiProps) => {
  return(

    <PromptWrap>
      <PromptContent>
        <PromptBlock>
          <PromptHeader>
            <IconWrap><Icon size="l3" icon="sparkles" /></IconWrap>
            <PromptHeaderTitle>
              <Heading size="l1" title="Do you have any questions?" />
              <Heading color="secondary" size="l0" title="Ask sparky, your personal Assistant!" />
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

        <PromptBlock><Input /></PromptBlock>
      </PromptContent>
    </PromptWrap>

  )
}
