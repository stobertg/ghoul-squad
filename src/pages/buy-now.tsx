import React, { useState } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, BuyNow, Heading, ButtonIcon } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const BottomSheet = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  background: '$bgSecondary',
  borderRadius: '$r3 $r3 0 0',
  paddingBottom: 32
})

const BottomSheetHeader = styled('div', {
  position: 'relative',
  width: '100%',

  '> *': { 
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '92%',
    margin: '0 auto',
    padding: '20px 0',

    '> *:last-child': {
      position: 'absolute',
      right: 0
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
        color="#0053E2"
        progress={ combinedProgress }
        shadow={ true }
      />

      { allLoaded && (

        <SiteContainer
          nav={[
            { icon: 'star', title: 'Drop hero', link: '/' },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout' },
            { icon: 'box', title: 'Unboxing', link: '/unbox' },
            { icon: 'pumpkin', title: 'Product', link: '/product' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'tags', title: 'Buy now', link: '/buy-now', active: true },
          ]}
        >
          <HeadTags bgColor="#131313" />
          <Phone removeBg>
            {/* <PhoneHeader overlay /> */}
            <BottomSheet>
              <BottomSheetHeader>
                <div>
                  <Heading bold title="Buy now" />
                  <ButtonIcon size="l1" icon="x" />
                </div>
              </BottomSheetHeader>

              <BuyNow placeOrder={() => alert('hello')} />
            </BottomSheet>
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
