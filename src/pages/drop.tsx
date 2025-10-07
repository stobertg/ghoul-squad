import React, { useState } from 'react'
import { styled, keyframes } from '@theme'
import { HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails, Live, LockScreen } from '@components'

const fadeIn = keyframes({
  '0%': { transform: 'scale( 0.5 ) rotateY(180deg)', opacity: 0 },
  '30%, 60%': { transform: 'scale( 1 ) rotateY(360deg)', opacity: 1 },
  '100%': { transform: 'scale( 0.5 ) rotateY(0deg)', opacity: 0 },
})

const fadeOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const AppScreen = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transform: 'translateX( 50% )',
  zIndex: 9999,

  variants: {
    show: {
      true: { transform: 'translateX( 0% )' }
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

  return (

    <>
      <HeadTags bgColor="#181818" />
      
      <Phone 
        removeBg 
        hasLockScreen
        hasHero={ true }
        bottomNav={ false }
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
              video="/ghouls/livedrop.mp4" 
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
    
        { live && ( 

          <AppScreen show={ live === true }>
            <Live /> 
          </AppScreen>

        )}
      </Phone>

      
    </>

  )
}
