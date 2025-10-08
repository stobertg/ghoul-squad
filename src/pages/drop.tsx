import React, { useState } from 'react'
import { styled, keyframes } from '@theme'
import { SiteContainer, HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails, Live, AiInline, ItemCarousel } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const imageUrls = [
  // "/ghouls/ghoul-box.mp4",
  "/ghouls/static/pump.png",
  "/ghouls/static/frank.png",
  "/ghouls/static/vamp.png"
]

const fontUrls = [
  '/font/EverydaySans-Regular.woff'
];

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

  const { progress, isLoaded } = useImagePreloader(imageUrls);
  const { progress: fontProgress, isLoaded: isFontLoaded } = useFontPreloader(fontUrls);
  const combinedProgress = Math.round(((progress || 0) + (fontProgress || 0)) / 2);
  const allLoaded = isLoaded && isFontLoaded;

  return (

    <>
      <LoadingBar 
        color="yellow"
        progress={ combinedProgress }
        shadow={ true }
      />

      { allLoaded && (

        <SiteContainer
          nav={[
            { icon: 'star', title: 'Drop hero', link: '/' },
            { icon: 'pumpkin', title: 'Product', link: '/product' },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop', active: true },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: false },
          ]}
        >
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

            <ItemCarousel 
              items={[
                {
                  image: "/ghouls/static/mystery-box.webp",
                  title: "Ghoul Squad Mystery Drop collaboration with Finds",
                  price: "$111.96"
                },
                {
                  image: "/ghouls/static/pump.webp",
                  title: "Sir Pump Blind Box",
                  price: "$27.99"
                },
                {
                  image: "/ghouls/static/casper.webp",
                  title: "Sir Casper Blind Box",
                  price: "$27.99"
                },
                {
                  image: "/ghouls/static/frank.webp",
                  title: "Sir Frank Blind Box",
                  price: "$27.99"
                },
                {
                  image: "/ghouls/static/vamp.webp",
                  title: "Sir Vamp Blind Box",
                  price: "$27.99"
                },
                {
                  image: "/ghouls/static/jeremy.webp",
                  title: "Jeremy Blind Box",
                  price: "$27.99"
                },
              ]}
            />

            <AppBlock>
              <AiInline />
            </AppBlock>

            <AppScreen show={ live === true }>
              <Live 
                backClick={ openLive }
                video={ Video } 
              />
            </AppScreen>
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
