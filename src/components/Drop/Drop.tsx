import React from 'react'
import { styled } from '@theme'
import { Hero, Countdown } from './Parts'
import { BrandChip, Product, FallAnimation } from '@components'

const DropWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  gap: 40,
  position: 'relative',
  width: '100%',

  '@mobile': { 
    gap: 32 
  },

  '&:before': {
    content: '',
    position: 'absolute',
    top: -140,
    left: 0,
    width: '100%',
    height: 440,
    background: '$bgSubtle',
    borderRadius: '0 0 50% 50%',
    '@mobile': { height: 380 }
  },
})

const DropMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 12,
  position: 'relative',
  width: '100%',
  zIndex: 2
})

const AnimationWrap = styled('div', {
  position: 'absolute',
  top: -100,
  left: 0,
  width: '100%',
  height: 820,
  zIndex: 1
})

const ChipWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
})

const DropContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20
})

interface DropProps {
  title?: string
  subTitle?: string
  image?: string
  video?: string
  videos?: any
  titles?: any
  appleFallback?: any
  onBrandClick?: any
}

export const Drop = ({
    title,
    subTitle,
    image,
    video,
    videos,
    titles,
    appleFallback,
    onBrandClick
  }:DropProps) => {

  return(

    <DropWrap>
      <DropContent>
        <DropMain>
          <Hero {...{ title, subTitle, image, video, videos, titles }} hevcVideos={ appleFallback } />
          <Countdown targetDate="2025-11-15T23:59:59" />
        </DropMain>
        
        <ChipWrap>
          <BrandChip 
            size="l0"
            image="/brand/ghoul.jpg"
            title="Ghoul Squad"
            onClick={ onBrandClick }
          />
        </ChipWrap>
      </DropContent>

      <Product 
        image="/ghouls/static/mystery-box.webp"
        badgeTitle="Special Walmart Exclusive"
      />

      <AnimationWrap><FallAnimation /></AnimationWrap>
    </DropWrap>

  )
}