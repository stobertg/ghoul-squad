import React, { useState } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Unbox, Share, Record } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const ShareWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '$bgPrimary',
  transition: '$s3',
  transform: 'translateX( 100% )',
  borderRadius: '50px 0 0 50px',
  zIndex: 9999,

  variants: {
    active: {
      true: {
        transform: 'translateX( 0px )'
      }
    }
  }
})

const RecordWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '$bgPrimary',
  transition: '$s3',
  // transform: 'translateX( 100% )',
  borderRadius: '50px 0 0 50px',
  zIndex: 9999,

  variants: {
    active: {
      true: {
        transform: 'translateX( 0px )'
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

export default function Home() {
  const { progress, isLoaded } = useImagePreloader(imageUrls);
  const { progress: fontProgress, isLoaded: isFontLoaded } = useFontPreloader(fontUrls);
  const combinedProgress = Math.round(((progress || 0) + (fontProgress || 0)) / 2);
  const allLoaded = isLoaded && isFontLoaded;

  const [ share, setShare ] = useState( false )
  const onShare = () => { setShare( !share ) }

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
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'box', title: 'Unboxing', link: '/unbox', active: true },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: false },
          ]}
        >
          <HeadTags bgColor="#181818" />
          <Phone removeBg blockSpacing="l2">
            <PhoneHeader overlay />
            <Unbox shareCom={ onShare } />
            <ShareWrap active={ share }><Share onBackClick={ onShare } /></ShareWrap>
            {/* <RecordWrap><Record /></RecordWrap> */}
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
