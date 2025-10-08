import React from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Drop, Profile } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

// const ProfileWrap = styled('div', {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   paddingTop: 50,
//   width: '100%',
//   height: '100%',
//   zIndex: 9999,
//   background: '$bgPrimary',
//   transform: 'translateX( 100% )'
// })

const imageUrls = [
  "/ghouls/static/pump.png",
  "/ghouls/static/frank.png",
  "/ghouls/static/vamp.png"
]

const fontUrls = [
  '/font/EverydaySans-Black.woff',
  '/font/EverydaySans-Bold.woff',
  '/font/EverydaySans-Medium.woff',
  '/font/EverydaySans-Regular.woff'
]

const titles = [
  'Sir Casper',
  'Jeremy',
  'Sir Frank',
  'Sir Pump',
  'Sir Vamp'
]

const videos = [
  '/ghouls/casper.webm',
  '/ghouls/jeremy.webm',
  '/ghouls/frank.webm',
  '/ghouls/pump.webm',
  '/ghouls/vamp.webm'
]

const appleFallback = [
  '/ghouls/apple-fallback/casper.mov',
  '/ghouls/apple-fallback/jeremy.mov',
  '/ghouls/apple-fallback/frank.mov',
  '/ghouls/apple-fallback/pump.mov',
  '/ghouls/apple-fallback/vamp.mov'
]

export default function Home() {
  const { progress, isLoaded } = useImagePreloader(imageUrls)
  const { progress: fontProgress, isLoaded: isFontLoaded } = useFontPreloader(fontUrls)
  const combinedProgress = Math.round(((progress || 0) + (fontProgress || 0)) / 2)
  const allLoaded = isLoaded && isFontLoaded

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
            { icon: 'star', title: 'Drop hero', link: '/', active: true },
            { icon: 'pumpkin', title: 'Product', link: '/product' },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: false },
          ]}
        >
          <HeadTags />

          <Phone fall>
            <PhoneHeader overlay />
            <Drop
              title=""
              titles={titles}
              subTitle="Ghoul Squad"
              videos={videos}
              appleFallback={appleFallback}
              onBrandClick={ () => alert( 'hello' )}
            />

            {/**
            <ProfileWrap>
              <PhoneHeader overlay />
              <Profile />
            </ProfileWrap>
            **/}
          </Phone>
        </SiteContainer>
      )}
    </>
  )
}