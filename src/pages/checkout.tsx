import React, { useState } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, BuyNow, Heading, ButtonIcon, HomePage, Alert, Confirmation } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const BottomSheet = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 730,
  background: '$bgSecondary',
  borderRadius: '$r3 $r3 0 0',
  paddingBottom: 32,
  zIndex: 9999,
  pointerEvents: 'none',
  opacity: 0,
  transform: 'translateY( 30px )',
  overflow: 'hidden',

  variants: {
    active: {
      true: { 
        opacity: 1, 
        pointerEvents: 'auto' ,
        transform: 'translateY( 0 )',
        transition: '$s2',
      }
    }
  }
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

const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba( 0,0,0, 0.8 )',
  zIndex: 9000,
  opacity: 0,
  pointerEvents: 'none',

  variants: {
    active: {
      true: { 
        opacity: 1, 
        pointerEvents: 'auto',
        transition: '$s1' 
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

  const [ buy, setBuy ] = useState( false )
  const onBuy = () => { setBuy( !buy ) }

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
          <Phone removeBg hasAlert>
            <PhoneHeader home />
            <HomePage />

            <BottomSheet active={ buy }>
              <BottomSheetHeader>
                <div>
                  <Heading bold title="Buy now" />
                  <ButtonIcon size="l1" icon="x" onClick={ onBuy } />
                </div>
              </BottomSheetHeader>
              {/* <BuyNow /> */}
              <Confirmation />
            </BottomSheet>

            <Alert onBuyNow={ onBuy } />
            <Overlay active={ buy } />
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
