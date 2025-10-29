import React, { useRef, useState, useEffect } from 'react'
import { styled } from '@theme'
import { LiveHeader, LiveProduct, LiveChat, Input, ChatBubble } from './Parts'
import { Icon } from '@components'

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
  height: 843,
  paddingTop: 64,
  background: '$bgPrimary',
  overflow: 'hidden',
  zIndex: 9999,

  // For the gradient on the bottom of the container
  // This will give the content more contrast and not overwhelm the attention of the video

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    background: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
  },

  '@mobile': {
    borderRadius: '$r3 $r3 0 0',
    height: '100dvh',
    paddingTop: 20,
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
  gap: 12,
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

const PlayWrap = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  position: 'relative',
  padding: '0 12px'
})

const PlayButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 40,
  height: 40,
  borderRadius: '50%',
  color: '#fff',
  '> *': { zIndex: 3 },

  '&:before, &:after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  },

  '&:before': { 
    backdropFilter: 'blur( 10px )',
    zIndex: 1
  },

  '&:after': { 
    background: 'rgba( 0,0,0, 0.5 )',
    zIndex: 2
  }
})

const Chat = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  position: 'relative',
  width: '100%'
})

interface LiveProps {
  video: string
  backClick: any
}

export const Live = ({ video, backClick }:LiveProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  // Keep the video playing; tie element.muted to state
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    el.muted = isMuted
    const p = el.play()
    if (p && typeof p.catch === 'function') p.catch(() => {})
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted((m) => !m)
  }

  return(
    <LiveWrap>
      <LiveContent>
        <LiveHeader {...{ backClick }} />

        <LiveBottom>
          <Chat>
            <LiveChat 
              chats={[
                { author: 'Camila O', text: "OMG these are sooo cute 😍" },
                { author: 'El Pablo', text: "Just grabbed 3 boxes, for my daughter  🙌 " },
                { author: 'Tyler', text: "Finallyyyyy it's here" },
                { author: 'Carissa', text: "I need Sunny in my live! 🦊" },
                { author: 'Kate C', text: "Imagine lining them up on a shelf!" },
                { author: 'Lidija', text: "Can we pick up at the Ghoul Squad shop???" },
                { author: 'Lidija', text: "It's so close to my home!!!" }
              ]}
            />

            <PlayWrap>
              <PlayButton onClick={toggleMute} aria-label={isMuted ? 'Unmute video' : 'Mute video'}>
                {isMuted ? (
                  <Icon size="l0" icon="sound-off" />
                ) : (
                  <Icon size="l0" icon="sound" />
                )}
              </PlayButton>
            </PlayWrap>
          </Chat>

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
          ref={videoRef}
          src={ video }
          autoPlay
          muted={isMuted}
          playsInline
          loop
          preload="auto"
          onError={(e) => {
            const el = e.currentTarget as HTMLVideoElement;
            console.error('Video failed to load/play', {
              error: el.error?.code,
              src: el.currentSrc || el.src
            });
          }}
        />
      </LiveVideo>
    </LiveWrap>
  )
}