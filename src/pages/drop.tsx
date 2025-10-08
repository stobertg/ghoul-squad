import React, { useState } from 'react'
import { styled, keyframes } from '@theme'
import { SiteContainer, HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails, Live, LockScreen } from '@components'

const fadeIn = keyframes({
  '0%': { transform: 'translateX( 100% )' },
  '100%': { transform: 'translateX( 0 )' },
})

const fadeOut = keyframes({
  '0%': { transform: 'translateX( 0 )' },
  '100%': { transform: 'translateX( 100% )' },
})

const AppScreen = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  zIndex: 9999,

  '> *': {
    transform: 'translateX( 100% )',
    animationDelay: '300ms',
  },

  variants: {
    show: {
      true: { 
        pointerEvents: 'auto',
        '> *': { animation: `${ fadeIn } 600ms ease forwards` }
      },

      false: { 
        pointerEvents: 'none',
        '> *': { animation: `${ fadeOut } 600ms ease forwards` }
      }
    }
  }
})


const StupidGap = styled('div', {
  paddingTop: 40,
  // animation: `${ fadeOut } 600ms ease forwards`,
})

export default function Home() {
  const [ live, setLive ] = useState( false )
  const openLive = () => {
    setLive( !live )
  }

  const Video = "/ghouls/livedrop.mp4" 

  return (

    <SiteContainer>
      <HeadTags bgColor="#181818" />
      
      <Phone 
        removeBg 
        hasLockScreen
        hasHero={ true }
        bottomNav={ !live }
        blockSpacing="l2"
      >
        <div>
          <StupidGap />
          <PhoneHeader overlay />
        </div>

        <AppBlock blockSpacing="l1">
          <button onClick={ openLive }>
          <ProductHero 
            isLive 
            videoMuted 
            alignVideo="top" 
            video={ Video }
          />
          </button>
          <ProductIntro />
        </AppBlock> 

        <AppBlock bgColor="subtle" blockSpacing="l1">
          <DropDetails 
            triggers={[
              { image: '/ghouls/static/pump.png', title: 'Sir Pump' },
              { image: '/ghouls/static/casper.png', title: 'Sir Casper' },
              { image: '/ghouls/static/frank.png', title: 'Sir Frank' },
              { image: '/ghouls/static/vamp.png', title: 'Sir Vamp' }
            ]}
            tabContent={[
              { image: '/ghouls/static/pump.png' },
              { image: '/ghouls/static/casper.png' },
              { image: '/ghouls/static/frank.png' },
              { image: '/ghouls/static/vamp.png' }
            ]}
          />
        </AppBlock>

        <AppScreen show={ live === true }>
          <Live 
            backClick={ openLive }
            video={ Video } 
          />
        </AppScreen>
      </Phone>
    </SiteContainer>

  )
}
