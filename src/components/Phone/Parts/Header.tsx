import React from 'react'
import { styled } from '@theme'
import { InputSearch, ButtonContainer, ButtonIcon, Avatar } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  zIndex: 9000,
  // background: 'rgba( 255, 255, 255, 0.5 )'

  variants: {
    overlay: {
      true: {

        '*': { 'svg > *': { fill: '#fff !important' }}
      }
    }
  }
})

const HeaderContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  position: 'relative',
  width: '100%',
  margin: '0 auto',
  padding: 24,
})

const ContentBlock = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative'
})

const MenuButtonWrap = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 42,
  height: 42,

  '&:before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '$bgTert',
    borderRadius: '50%',
    transform: 'scale( 0.5 )',
    opacity: 0,
    transition: '$s1'
  },

  '&:hover': {

    '&:before': {
      transform: 'scale( 1 )',
      opacity: 1
    }
  }
})

const MenuButton = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 16,
  height: 12,
  borderTop: '1px solid $buttonPrimary',
  borderBottom: '1px solid $buttonPrimary',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 1,
    background: '$buttonPrimary'
  }
})

const Headshot = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 32,
  width: 32,
  minHeight: 32,
  height: 32,
  borderRadius: '50%',
  overflow: 'hidden',
  border: '2px solid $bgPrimary',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})



interface HeaderProps {
  home?: boolean
  overlay?: boolean
}

export const PhoneHeader = ({ overlay, home }:HeaderProps) => {
  return(

    <HeaderWrap {...{ overlay }}>
      <HeaderContent>
        <ContentBlock>
          { overlay ? 
            ( <ButtonIcon variant="primary" icon="arrow-left" /> ) 
            : <MenuButtonWrap><MenuButton /></MenuButtonWrap> 
            }
          { overlay ?? <InputSearch /> }
        </ContentBlock>

        <ContentBlock>
          { home ? (

            <ButtonContainer spacing="l1">
              <ButtonIcon icon="bell" />
              <Avatar image="/people/isabella.webp" name="Isabella" />
            </ButtonContainer>
            
          ) : (

            <ButtonContainer 
              icons
              buttons={[
                { icon: 'message-circle', onClick: () => alert('AI Chat') },
                { icon: 'share', onClick: () => alert('Share') },
                { icon: 'star', onClick: () => alert('Star') },
              ]}
            />

          )}    
        </ContentBlock>
      </HeaderContent>
    </HeaderWrap>

  )
}
