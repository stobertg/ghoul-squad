import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const HeroWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const HeroContent = styled('div', {
  position: 'relative',
  width: '100%',
  height: 340,
  borderRadius: '$r2',
  overflow: 'hidden',

  variants: {
    isLive: {
      true: {
        height: 360
      }
    }
  }
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
  },

  variants: {
    alignVideo: {
      top: { alignItems: 'flex-start' }
    }
  }
})

const LiveBadge = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'absolute',
  bottom: 12,
  right: 12,
  padding: '10px 16px 10px 10px',
  borderRadius: '$pill',
  background: 'red',

  span: {
    display: 'inline-flex',
    position: 'relative',
    width: 16,
    height: 16,
    background: '#fff',
    borderRadius: '50%'
  }
})

interface HeroProps {
  video?: string
  alignVideo?: 'top'
  videoMuted?: boolean
  isLive?: boolean
  image?: string
  onClick?: any
}

export const ProductHero = ({ 
    video, 
    alignVideo, 
    videoMuted, 
    isLive,
    image,
    onClick
  }:HeroProps) => {

  return(

    <HeroWrap>
      <HeroContent {...{ isLive }}>
        { video && (
          <>
            { onClick ? (

              <button {...{ onClick }}>
                <Video {...{ alignVideo }}>
                  <video
                    src={ video }
                    autoPlay
                    muted={ videoMuted }
                    playsInline
                    loop
                    preload="auto"
                  />

                  { isLive && ( 
                    <LiveBadge>
                      <span />
                      <Heading bold color="white" size="l0" title="Live now" />
                    </LiveBadge>
                  )}
                </Video>
              </button>

            ) : (

              <Video {...{ alignVideo }}>
                <video
                  src={ video }
                  autoPlay
                  muted={ videoMuted }
                  playsInline
                  loop
                  preload="auto"
                />

                { isLive && ( 
                  <LiveBadge>
                    <span />
                    <Heading bold color="white" size="l0" title="Live now" />
                  </LiveBadge>
                )}
              </Video>

            )}
          </>
        )}

        { image && (
          <img src={ image } alt="Ghoul Squad" />
        )}
      </HeroContent>
    </HeroWrap>

  )
} 