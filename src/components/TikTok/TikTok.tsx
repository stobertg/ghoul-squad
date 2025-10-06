import React from 'react'
import { styled } from '@theme'

const VideoWrap = styled('div', {
  position: 'relative',
  width: '100%',
  height: 840,

  video: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 'calc( 100% - 50px )',
    objectFit: 'cover'
  }
})

const Video = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'scroll'
})

const TikTokNav = styled('div', {
  position: 'absolute',
  bottom: -2,
  left: 0,
  width: '100%',
  zIndex: 10
})

const TikTokOverlay = styled('div', {
  position: 'absolute',
  bottom: 80,
  left: 0,
  width: '100%',
  paddingBottom: 20,
  zIndex: 10,
  img: { position: 'relative', zIndex: 10 },

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 0
  }
})

const OverlayContent = styled('div', {
  position: 'relative',
  width: '95%',
  margin: '0 auto',
  paddingLeft: 12
})

const Videos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'scroll'
})

interface TikTokProps {

}

export const TikTok = ({}:TikTokProps) => {
  return(

    <VideoWrap>
      <Videos>
        <Video>
          <video
            src="/tiktok/fall1.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
  
          <TikTokOverlay>
            <OverlayContent>
              <img src="/tiktok/overlay.png" />
            </OverlayContent>
          </TikTokOverlay>
        </Video>

        <Video>
          <video
            src="/tiktok/fall1.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />
  
          <TikTokOverlay>
            <OverlayContent>
              <img src="/tiktok/overlay.png" />
            </OverlayContent>
          </TikTokOverlay>
        </Video>
      </Videos>

      <TikTokNav><img src="/tiktok/tiktoknav.jpg" alt="TikTok Nav" /></TikTokNav>
    </VideoWrap>

  )
}