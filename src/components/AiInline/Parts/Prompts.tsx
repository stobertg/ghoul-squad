import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const PromptWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
  position: 'relative',
  padding: '0 16px',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' }
})

const Prompt = styled('button', {
  position: 'relative',
  padding: 12,
  background: '$bgSecondary',
  borderRadius: '$pill',
  whiteSpace: 'noWrap'
})

interface PromptProps {
  prompts: {
    title: string
  }[]
}

export const Prompts = ({ prompts }:PromptProps) => {
  return(

    <PromptWrap>
      { prompts.map(( prompt, i ) => (
      
        <Prompt key={`prompt-${ i }`}>
          <Heading size="l0" title={ prompt.title } />
        </Prompt>

      ))}
    </PromptWrap>

  )
}