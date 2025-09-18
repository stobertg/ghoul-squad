import React, { useState, useEffect } from 'react'
import { styled } from '@theme'
import { ButtonContainer } from '@components'

// For the master container of the header, positioned fixed on the top of the site
// This header hides and reveals if the user ic scrolling up or down

const Header = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  transition: '$s1',
  zIndex: 9999,

  // For the frosted glass effect of the background and the white overlay above the blur
  // This doesn't show up until the user scrolls and then scrolls up - the header will hide when the user scrolls down

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    opacity: 0,
    transition: '$s1',
  },

  // For the background to be blur for the before and white overlay on top

  '&:before': { backdropFilter: 'blur( 10px )' },
  '&:after': { background: 'rgba( 255, 255, 255, 0.8 )' },

  variants: {
    scroll: {
      down: { transform: 'translateY( -100% )' },
      up: { transform: 'translateY( 0px )' }
    },

    bg: {
      show: { 'nav': { padding: '12px 0' }, '&:before, &:after': { opacity: 1 }},
      hide: { '&:before, &:after': { opacity: 0 }}
    }
  }
})

// For all of the content of within the master container
// This sets the position of the content to be in the center of the header, with the width adjusted

const Nav = styled('nav', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '90%',
  margin: '0 auto',
  padding: '20px 0',
  zIndex: 10,

  '@tablet': {
    '> *:last-child': {
      '> *:not(:last-child)': { display: 'none' }
    }
  }
})

// For the container of the logo on the left of the header
// This holds the logo for Stober Window Cleaning

const Logo = styled('figure', {
  position: 'relative',
  width: 100
})

const LogoFigCap = styled('figcaption', {
  display: 'none'
})

interface HeaderProps {
  ref: any
  buttons: any
}

// ---------- This is the end of declarations ---------- //

export const SiteHeader = ({ ref, buttons }:HeaderProps) => {
  const [ showHeader, setShowHeader ] = useState( true );
  const [ scrollPos, setScrollPos ] = useState( 0 );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShowHeader = currentScrollPos < scrollPos || currentScrollPos < 50;
      setScrollPos(currentScrollPos);
      setShowHeader(shouldShowHeader);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [ scrollPos ])

  return(

    <Header 
      scroll={ showHeader ? 'up' : 'down' }
      bg={ showHeader && scrollPos > 400 ? 'show' : 'hide' }
      {...{ ref }}
    >
      <Nav> 
        <Logo>
          <img src="/logo/logo.svg" alt="Stober Window Cleaning" />
          <LogoFigCap aria-readonly>Stober Window Cleaning</LogoFigCap>
        </Logo>

        <ButtonContainer
          spacing='l0'
          {...{ buttons }}
        />
      </Nav>
    </Header>

  )
}