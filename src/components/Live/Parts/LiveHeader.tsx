import React from 'react'
import { styled } from '@theme'
import { ButtonIcon, ButtonContainer, Icon, Heading } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  
})

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  padding: '0 20px'
})

const HeaderLeft = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 12,
  position: 'relative'
})

const LiveStats = styled('div', {

})

const Watching = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  padding: '12px 16px 12px 12px',
  borderRadius: '$pill',
  overflow: 'hidden',
  '*': { color: '$white !important' },
  
  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur( 10px )',
    borderRadius: '$pill',
  }
})

const HeaderRight = styled('div', {
  '*': { color: '$white !important' }
})

interface HeaderProps {
  backClick: any
}

export const LiveHeader = ({ backClick }:HeaderProps) => {
  return(

    <HeaderWrap>
      <HeaderContent>
        <HeaderLeft>
          <ButtonIcon 
            variant="secondary" 
            icon="arrow-left" 
            onClick={ backClick } 
          />

          <LiveStats>
            <Watching>
              <Icon size="l1" icon="eye" />
              <Heading size="l0" title="3.1k Watching" />
            </Watching>
          </LiveStats>
        </HeaderLeft>

        <HeaderRight>
          <ButtonContainer 
            icons
            buttons={[
              { icon: 'more', onClick: () => alert( 'hello' )},
              { icon: 'share', onClick: () => alert( 'hello' )},
              { icon: 'star', onClick: () => alert( 'hello' )}
            ]}
          />
        </HeaderRight>
      </HeaderContent>
    </HeaderWrap>

  )
}