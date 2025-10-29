import React from 'react'
import { styled } from '@theme'
import { AppBlock, ProductHero, ProductIntro, DropDetails, ItemCarousel, AiInline, ILC, LiveNow } from '@components'

interface ProductProps {
  video?: string
  image?: string
  badgeTitle?: string | React.ReactNode
  onClick?: any
  alignVideo?: 'top'
  videoMuted?: boolean
  isLive?: boolean
} 

export const Product = ({
    video,
    image,
    badgeTitle,
    onClick,
    alignVideo,
    videoMuted,
    isLive,
  }:ProductProps) => {
  
  return(

    <>
      <AppBlock blockSpacing="l1">
        { onClick ? ( 
            <button {...{ onClick }}><ProductHero {...{ video, image, alignVideo, videoMuted, isLive }} /></button>
         ) : (
            <ProductHero {...{ video, image, alignVideo, videoMuted, isLive }} />
        )}
        <ProductIntro {...{ badgeTitle }} />
      </AppBlock> 

      <AppBlock blockSpacing="l1">
        <ILC />
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
            title: "Ghoul Squad Mystery Drop collaboration with Walmart",
            price: "111.96",
            ratingNumber: 23
          },
          {
            image: "/ghouls/static/pump.webp",
            title: "Sir Pump Blind Box",
            price: "27.99",
            ratingNumber: 45
          },
          {
            image: "/ghouls/static/frank.webp",
            title: "Sir Frank Blind Box",
            price: "27.99",
            ratingNumber: 15
          },
          {
            image: "/ghouls/static/casper.webp",
            title: "Sir Casper Blind Box",
            price: "27.99",
            ratingNumber: 32
          },
          {
            image: "/ghouls/static/vamp.webp",
            title: "Sir Vamp Blind Box",
            price: "27.99",
            ratingNumber: 28
          },
          {
            image: "/ghouls/static/jeremy.webp",
            title: "Jeremy Blind Box",
            price: "27.99",
            ratingNumber: 41
          },
        ]}
      />

      <AppBlock bgColor="subtle">
        <AiInline />
      </AppBlock>

    
      <LiveNow />
    
    </>

  )
}