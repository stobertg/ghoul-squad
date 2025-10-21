import React from 'react'
import { styled } from '@theme'
import { Heading, ButtonIcon } from '@components' 

const ChipWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const ChipContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  position: 'relative',
  width: '100%',
  overflow: 'scroll',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': { display: 'none' },

  ul: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    position: 'relative',
    padding: '0 20px',
    listStyle: 'none',
    '*': { whiteSpace: 'nowrap' }
  }
})

const Chip = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 40,
  padding: '12px 16px',
  borderRadius: '$pill',
  background: '$bgSecondary'
})

const ButtonWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: '$bgSecondary'
})

interface NavProps {
  items: {
    title: string
  }[]
} 

export const NavChips = ({ items }:NavProps) => {
  return(

    <ChipWrap>
      <ChipContent>
        <ul>
          <li>
            <ButtonWrap>
              <ButtonIcon size="l0" icon="list-plus" />
            </ButtonWrap>
          </li>

          { items.map(( item, i ) => (

            <li key={`item-${ i }`}>
              <Chip><Heading size="l0" title={ item.title } /></Chip>
            </li>

          ))}
        </ul>
      </ChipContent>
    </ChipWrap>

  )
}
