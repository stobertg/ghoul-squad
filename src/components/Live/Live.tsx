import React from 'react'
import { styled } from '@theme'
import { LiveHeader, LiveProduct, LiveChat, Input } from './Parts'

// For the master container of the live experience
// This shows the video for the drop with the buying options and chat input on the bottom

const LiveWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: 840,
  background: '$bgPrimary',
  overflow: 'hidden',
  zIndex: 9999,

  '@mobile': {
    borderRadius: '$r3 $r3 0 0',
    height: '100dvh'
  }
})

// For the container of all of the content wihtin the master container
// This contains the header on the top, and the chat and buying cards on the bottom of the container

const LiveContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  height: '100%',
  zIndex: 10
})

// For the content on the bottom of the container

const LiveBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  width: '100%',
  paddingBottom: 32
})

const LiveVideo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',

  video: {
    position: 'relative',
    width: '120%',
    height: '100%',
    objectFit: 'cover'
  }
})

interface LiveProps {

}

export const Live = ({}:LiveProps) => {
  return(

    <LiveWrap>
      <LiveContent>
        <LiveHeader />

        <LiveBottom>
          <LiveChat />
          <LiveProduct 
            cards={[
              {
                image: "/ghouls/mystery-box.png",
                title: 'Single box',
                price: '$27.99'
              },
              {
                image: "/ghouls/mystery-box.png",
                title: 'Whole set',
                price: '$111.96'
              },
            ]}
          />
          <Input />
        </LiveBottom>
      </LiveContent>

      <LiveVideo>
        <video
          src="/ghouls/livedrop.mp4"
          autoPlay
          playsInline
          loop
          preload="auto"
        />
      </LiveVideo>
    </LiveWrap>

  )
}