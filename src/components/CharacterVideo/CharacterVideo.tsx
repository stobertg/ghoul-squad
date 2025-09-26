import React from 'react'
import { styled } from '@theme'

// For the master container of the of the video within the hero section
// This show the character animating, below the title

const VideoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 340,

  // For the sizing of the video to be in the center of the parent container
  // This addresses the actual sizing of the video within the container

  video: {
    position: 'absolute',
    maxWidth: 280,
    width: '100%',
    height: 'auto',
    display: 'block',
    background: 'transparent',
    pointerEvents: 'none'
  }
})

interface CharProps {
  video: string
}

export const CharacterVideo = ({ video }:CharProps) => {
  return(

    <VideoWrap>
      <video
        src={ video }
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
    </VideoWrap>

  )
}