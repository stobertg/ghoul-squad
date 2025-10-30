import React from 'react'
import { styled } from '@theme'
import { InputSearch, ButtonContainer, ButtonIcon, Avatar, Button, CartButton } from '@components'

const HeaderWrap = styled('div', {
  position: 'relative',
  width: '100%',
  zIndex: 1,
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
  gap: 4,
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
  borderTop: '1px solid $textPrimary',
  borderBottom: '1px solid $textPrimary',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 1,
    background: '$textPrimary'
  }
})

const Sparky = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 32,
  height: 32,

  img: { width: 26 }
})

const Cart = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 32,
  height: 32
})



interface HeaderProps {
  home?: boolean
  overlay?: boolean
  onBackClick?: any
  onStar?: any
  onChat?: any
  task?: string
  taskFunction?: any
  taskDisabled?: boolean
}

export const PhoneHeader = ({ 
    overlay, 
    home, 
    onBackClick, 
    onStar, 
    onChat, 
    task,
    taskFunction,
    taskDisabled
  }:HeaderProps) => {

  return(

    <HeaderWrap {...{ overlay }}>
      <HeaderContent>
        <ContentBlock>
          { overlay ? 
            ( <ButtonIcon variant="neutral" icon="arrow-left" onClick={ onBackClick } /> ) 
            : <MenuButtonWrap><MenuButton /></MenuButtonWrap> 
            }
          { overlay ?? <InputSearch /> }
        </ContentBlock>

        { task ? ( 
          
          <Button 
            disabled={ taskDisabled }
            title={ task }
            size="l0" 
            width="auto" 
            onClick={ taskFunction } 
          /> 
        
          ) : (

          <ContentBlock>
            { home ? (

              <ButtonContainer>
                {/* <ButtonIcon icon="bell" />
                <ButtonIcon icon="cart" /> */}
                {/* <Avatar image="/people/isabella.webp" /> */}
                <Sparky onClick={ onChat }><img src="/brand/sparky.png" /></Sparky>
                <Cart><CartButton /></Cart>
              </ButtonContainer>
              
            ) : (

              <>
                <ButtonContainer 
                  icons
                  spacing="l0"
                  buttons={[
                    { icon: 'star', onClick:  onStar },
                    { icon: 'share', onClick: () => alert('share') }
                  ]}
                />

                <Sparky onClick={ onChat }><img src="/brand/sparky.png" /></Sparky>
                <Cart><CartButton /></Cart>
              </>

            )}    
          </ContentBlock>

        )}
      </HeaderContent>
    </HeaderWrap>

  )
}
