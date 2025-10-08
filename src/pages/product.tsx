import React from 'react'
import { HeadTags, SiteContainer, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails, ItemCarousel, AiInline } from '@components'
import { useImagePreloader } from '@lib'
import LoadingBar from 'react-top-loading-bar'

const imageUrls = [
  // "/ghouls/ghoul-box.mp4",
  "/ghouls/static/pump.png",
  "/ghouls/static/frank.png",
  "/ghouls/static/vamp.png"
]

export default function Home() {
  const { progress, isLoaded } = useImagePreloader( imageUrls )

  return (

    <>
      <LoadingBar 
        color="yellow"
        progress={ progress }
        shadow={ true }
      />

      { isLoaded && (

        <SiteContainer
          nav={[
            { icon: 'star', title: 'Drop hero', link: '/' },
            { icon: 'pumpkin', title: 'Product', link: '/product', active: true },
            { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
            { icon: 'user-check', title: 'Profile', link: '/profile' },
            { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: false },
          ]}
        >
          <HeadTags bgColor="#181818" />
          <Phone removeBg bottomNav blockSpacing="l2">
            <PhoneHeader overlay />

            <AppBlock blockSpacing="l1">
              <ProductHero video="/ghouls/ghoul-box.mp4" />
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

            <AppBlock width="l1">
              <AiInline />
            </AppBlock>
          </Phone>
        </SiteContainer>
      
      )}
    </>

  )
}
