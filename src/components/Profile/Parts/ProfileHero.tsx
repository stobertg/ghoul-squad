import React from 'react'
import { styled } from '@theme'
import { Rating, VerifiedTag } from '@components'

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  paddingBottom: 48,
})

const HeroBg = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  height: 134,
  borderRadius: '$r2',
  overflow: 'hidden',

  img: { 
    position: 'absolute',
    width: '100%',
    objectFit: 'contain'
  }
})

const HeroInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',
  gap: 10,
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  padding: '0 20px',
  margin: 'auto',
})

const HeroInfoAttr = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  position: 'relative',
})

const HeroAvatar = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 94,
  width: 94,
  height: 94,
  background: '#fff',
  borderRadius: '$r2',
  overflow: 'hidden'
})

interface HeroProps {

}

export const ProfileHero = ({}:HeroProps) => {
  return(

    <HeroWrap>
      <HeroBg><img src="/ghouls/hero.jpg" alt="Ghoul Squad" /></HeroBg>

      <HeroInfo>
        <HeroAvatar><img src="/ghouls/static/pump.png" /></HeroAvatar>

        <HeroInfoAttr>
          <VerifiedTag />
          <Rating />
        </HeroInfoAttr>
      </HeroInfo>
    </HeroWrap>

  )
}