import React from 'react'
import { styled } from '@theme'
import { Heading, InputSearch, ButtonIcon } from '@components'
import { IconStar } from './IconStar'
import { IconShare } from './IconShare'
import { BackButton } from './'

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
    background: '$bgPrimary',
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
  borderTop: '2px solid #000',
  borderBottom: '2px solid #000',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: 2,
    background: '#000'
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
  overlay?: boolean
}

export const PhoneHeader = ({ overlay }:HeaderProps) => {
  return(

    <HeaderWrap {...{ overlay }}>
      <HeaderContent>
        <ContentBlock>
          { overlay ? <ButtonIcon variant="primary" icon="arrow-left" /> : <MenuButtonWrap><MenuButton /></MenuButtonWrap> }
          { overlay ?? <InputSearch /> }
        </ContentBlock>

        <ContentBlock>
          <ButtonIcon icon="share" />
          <ButtonIcon icon="star" />
        </ContentBlock>
      </HeaderContent>
    </HeaderWrap>

  )
}
