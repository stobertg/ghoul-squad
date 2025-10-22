import React, { useState, useRef } from 'react'
import { styled } from '@theme'
import { HeadTags, SiteContainer, Phone, PhoneHeader, BuyNow, Heading, ButtonIcon, HomePage, Alert, Confirmation } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'
import confetti from "canvas-confetti"

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
    height: 56,
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

const ConfirmWrap = styled('div', {
  position: 'absolute',
  top: 50,
  left: 0,
  width: '100%',
  height: '100%',
  background: '$bgSecondary',
  transition: '$s3',
  transform: 'translateY( 30px )',
  pointerEvents: 'none',
  opacity: 0,

  variants: {
    active: {
      true: {
        transform: 'translateY( 0 )',
        pointerEvents: 'auto',
        opacity: 1,
        transitionDelay: '500ms'
      }
    }
  }
})

const BuyNowWrap = styled('div', {
  position: 'relative',
  width: '100%',
  transition: '$s2',

  variants: {
    active: {
      true: {
        transform: 'translateY( -30px )',
        pointerEvents: 'none',
        opacity: 0
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

  const confettiCanvasRef = useRef<HTMLCanvasElement>(null)

  const [ buy, setBuy ] = useState( false )
  const onBuy = () => { setBuy( !buy ) }

  const [ confirm, setConfirm ] = useState( false )
  const onConfirm = () => { setConfirm( !confirm ) }

  const handleClick = () => {
    if (!confettiCanvasRef.current) return
    const myConfetti = confetti.create(confettiCanvasRef.current, { resize: true, useWorker: true })
    const end = Date.now() + 0.5 * 1000
    const colors = ["#ffffff", "#FFC220"]
    const frame = () => {
      if (Date.now() > end) return
      myConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 40,
        origin: { x: 0, y: 0.5 },
        colors
      })
      myConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 40,
        origin: { x: 1, y: 0.5 },
        colors
      })
      requestAnimationFrame(frame)
    }
    frame()
  }

  // const handleClick = () => {
  //   const end = Date.now() + 3 * 1000 // 3 seconds
  //   const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]
  //   const frame = () => {
  //     if (Date.now() > end) return
  //     confetti({
  //       particleCount: 2,
  //       angle: 60,
  //       spread: 55,
  //       startVelocity: 60,
  //       origin: { x: 0, y: 0.5 },
  //       colors: colors,
  //     })
  //     confetti({
  //       particleCount: 2,
  //       angle: 120,
  //       spread: 55,
  //       startVelocity: 60,
  //       origin: { x: 1, y: 0.5 },
  //       colors: colors,
  //     })
  //     requestAnimationFrame(frame)
  //   }
  //   frame()
  // }

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
            { icon: 'box', title: 'Unboxing', link: '/unbox' },
            { icon: 'tags', title: 'Buy now', link: '/buy-now' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: true },
          ]}
        >
          <HeadTags bgColor="#181818" />
          <Phone 
            removeBg 
            hasAlert 
            showConfettiCanvas 
            confettiCanvasRef={ confettiCanvasRef }
          >
            <PhoneHeader home />
            <HomePage />

            <BottomSheet active={ buy }>
              <BottomSheetHeader>
                <div>
                  <Heading bold title={ !confirm && "Buy now"} />
                  <ButtonIcon size="l1" icon="x" onClick={() => { onBuy(), onConfirm() }} />
                </div>
              </BottomSheetHeader>

              <BuyNowWrap active={ confirm }><BuyNow placeOrder={() => { onConfirm(), handleClick() }} /></BuyNowWrap>
              <ConfirmWrap active={ confirm }><Confirmation /></ConfirmWrap>
            </BottomSheet>

            <Alert onBuyNow={ onBuy } />
            <Overlay active={ buy } />
          </Phone>
        </SiteContainer>

      )}
    </>

  )
}
