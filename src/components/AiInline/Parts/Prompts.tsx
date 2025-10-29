import React from 'react'
import { styled } from '@theme'
import { Heading, Icon } from '@components'

const PromptWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    borderBottom: '1px solid $seperator'
  }
})

const Prompt = styled('button', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 'calc( 100% - 32px )',
  margin: '0 auto',
  padding: '16px 0',
  textAlign: 'left'
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
          <Heading size="l1" title={ prompt.title } />
          <Icon size="l1" icon="chevron-down" />
        </Prompt>

      ))}
    </PromptWrap>

  )
}