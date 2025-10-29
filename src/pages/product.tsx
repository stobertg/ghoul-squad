import React from 'react'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Product, TextEm } from '@components'
import { useImagePreloader, useFontPreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

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
  const { progress, isLoaded } = useImagePreloader( imageUrls )
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
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout' },
            { icon: 'box', title: 'Unboxing', link: '/unbox' },
            { icon: 'pumpkin', title: 'Product', link: '/product', active: true },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'tags', title: 'Buy now', link: '/buy-now' },
          ]}
        >
          <HeadTags bgColor="#181818" />
          <Phone removeBg bottomNav blockSpacing="l2">
            <PhoneHeader overlay />
            <Product 
              video="/ghouls/ghoul-box.mp4" 
              badgeTitle={<>Collectable <TextEm><strong>#347</strong></TextEm> / 500</>} 
            />
          </Phone>
        </SiteContainer>
      
      )}
    </>

  )
}
