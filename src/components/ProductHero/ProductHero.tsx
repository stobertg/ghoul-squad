import React from 'react'
import { styled } from '@theme'

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const HeroContent = styled('div', {
  position: 'relative',
  width: '100%',
  height: 340,
  borderRadius: '$r2',
  overflow: 'hidden'
})

const Video = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',

  video: {
    position: 'absolute',
    width: '101%', 
  }
})

interface HeroProps {
  video?: string
}

export const ProductHero = ({ video }:HeroProps) => {
  return(

    <HeroWrap>
      <HeroContent>
        <Video>
          <video
            src={ video }
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
        </Video>
      </HeroContent>
    </HeroWrap>

  )
} 