import React, { useState } from 'react'
import { styled, keyframes } from '@theme'
import { SiteContainer, HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails, Live, AiInline, ItemCarousel, Product, TextEm } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const imageUrls = [
  // "/ghouls/ghoul-box.mp4",
  "/badges/badge_collab.png",
  "/lockscreen/homescreen.webp",
  "/ghouls/static/pump.png",
  "/ghouls/static/frank.png",
  "/ghouls/static/vamp.png"
]

const fontUrls = [
  '/font/EverydaySans-Black.woff',
  '/font/EverydaySans-Bold.woff',
  '/font/EverydaySans-Medium.woff',
  '/font/EverydaySans-Regular.woff',
  '/font/EverydaySans-Light.woff'
]

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
  paddingTop: 50,
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
        color="#0053E2"
        progress={ combinedProgress }
        shadow={ true }
      />

      { allLoaded && (

        <SiteContainer
          nav={[
            { icon: 'star', title: 'Drop hero', link: '/' },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop', active: true },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout' },
            { icon: 'box', title: 'Unboxing', link: '/unbox' },
            { icon: 'pumpkin', title: 'Product', link: '/product' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'tags', title: 'Buy now', link: '/buy-now' },
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
            
            <Product 
              isLive 
              videoMuted 
              alignVideo="top" 
              video={ Video } 
              badgeTitle={<>Collectable <TextEm><strong>#347</strong></TextEm> / 500</>} 
              onClick={ openLive }
            />

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
