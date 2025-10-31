import React, { useState } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Drop, Profile, WatchList, AiChat } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const ProfileWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  paddingTop: 50,
  width: '100%',
  zIndex: 9999,
  background: '$bgPrimary',
  transform: 'translateX( 100% )',
  borderRadius: '56px 0 0 0',
  transition: '$s3',
  transitionTimingFunction: 'cubic-bezier(.78,.07,.31,1)',

  variants: {
    showProfile: { true: { transform: 'translateX( 0 )' }}
  }
})

const WatchWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '100%',
  height: 832,
  zIndex: 9999,
  pointerEvents: 'none',
  transform: 'scale( 0.9 )',
  transformOrigin: 'bottom center',
  transition: '$s1',
  transitionTimingFunction: 'ease',
  opacity: 0,

  variants: {
    active: {
      true: {
        pointerEvents: 'auto',
        transform: 'scale( 1 )',
        opacity: 1
      }
    }
  }
})

const imageUrls = [
  "/badges/badge_collab.png",
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

  const [ profile, setProfile ] = useState( false )
  const toggleProfile = () => { setProfile( !profile )}

  const [ watch, setWatch ] = useState( false )
  const toggleWatch = () => { setWatch( !watch )}

  const [ chat, setChat ] = useState( false )
  const toggleChat = () => { setChat( !chat )}

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
            { icon: 'star', title: 'Drop hero', link: '/', active: true },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout' },
            { icon: 'box', title: 'Unboxing', link: '/unbox' },
            { icon: 'pumpkin', title: 'Product', link: '/product' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'tags', title: 'Buy now', link: '/buy-now' },
          ]}
        >
          <HeadTags />

          <Phone 
            fall 
            bottomNav 
            onBottomAction={ toggleWatch }
            navButtonTitle="Notify Me"
          >
            <PhoneHeader 
              overlay 
              onStar={ toggleWatch }
              onChat={ toggleChat }
            />

            <Drop
              title=""
              titles={titles}
              subTitle="Ghoul Squad"
              videos={videos}
              appleFallback={appleFallback}
              onBrandClick={ toggleProfile }
            />

            {/* <ProfileWrap showProfile={ profile }>
              <PhoneHeader 
                overlay 
                onBackClick={ toggleProfile } 
              />
              <Profile />
            </ProfileWrap> */}

            {/* <WatchWrap active={ watch }>
              <WatchList closeWatch={ toggleWatch } />
            </WatchWrap>

            <WatchWrap active={ chat }>
              <AiChat closeChat={ toggleChat } />
            </WatchWrap> */}
          </Phone>
        </SiteContainer>
      )}
    </>
  )
}