import React, { useState } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Unbox, Share, Record, UserProfile } from '@components'
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
  overflow: 'hidden',
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
  transform: 'translateX( 100% )',
  borderRadius: '50px 0 0 50px',
  overflow: 'hidden',
  zIndex: 9999,

  variants: {
    active: {
      true: {
        transform: 'translateX( 0px )'
      }
    }
  }
})

const ProfileWrap = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '$bgPrimary',
  transition: '$s2',
  // transform: 'translateX( 100% )',
  borderRadius: '50px 0 0 50px',
  overflow: 'hidden',
  zIndex: 9999,
  pointerEvents: 'none',
  opacity: 0,

  variants: {
    active: {
      true: {
        pointerEvents: 'auto',
        opacity: 1,
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
  
  const [ record, setRecord ] = useState( false )
  const onRecord = () => { setRecord( !record ) }

  const [ video, setVideo ] = useState( false )
  const onVideoSubmit = () => { setVideo( true ) }
  const onVideoRemove = () => { setVideo( false ) }

  const [ profile, setProfile ] = useState( false )
  const onPost = () => { setProfile( !profile ) }


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
          { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
          { icon: 'shopping-cart', title: 'Checkout', link: '/checkout' },
          { icon: 'box', title: 'Unboxing', link: '/unbox', active: true },
          { icon: 'pumpkin', title: 'Product', link: '/product' },
          { icon: 'user-check', title: 'Profile', link: '/profile' },
          { icon: 'tags', title: 'Buy now', link: '/buy-now' },
        ]}
        >
          <HeadTags bgColor="#181818" />
          <Phone removeBg blockSpacing="l2">
            <PhoneHeader overlay />
            <Unbox shareCom={ onShare } />

            <ShareWrap active={ share }>
              <Share 
                onBackClick={ onShare } 
                onRecord={ onRecord } 
                hasMediaThumb={ video }
                removeThumb={ onVideoRemove }
                onPost={ onPost }
              />
            </ShareWrap>

            <RecordWrap active={ record }>
              <Record 
                onClose={ onRecord } 
                onDone={ () => { onRecord(), onVideoSubmit() }}
              />
            </RecordWrap>

            <ProfileWrap active={ profile }>
              <UserProfile />
            </ProfileWrap>
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
