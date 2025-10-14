import React from 'react'
import { styled } from '@theme'
import { Heading, Text, Button, ButtonIcon } from '@components'

const WatchWrap = styled('div', {
  display: 'flex',
  flex: 1,
  position: 'relative',
  width: '100%'
})

const WatchContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flex: 1,
  position: 'relative',
  width: '100%',
  minHeight: 500,
  background: 'rgba( 0,0,0, 0.7 )',
  padding: '32px 32px 50px 32px',
  borderRadius: '$r3 $r3 0 0',
  overflow: 'hidden'
})

const WatchMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  position: 'relative',
  width: '100%',
  textAlign: 'center',
  zIndex: 2
})

const WatchText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative'
})

const WatchTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4
})

const WatchClose = styled('div', {
  position: 'absolute',
  top: 20,
  right: 20,
  zIndex: 10,

  svg: { color: '#000' }
})

const WatchVideo = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '80%',
  margin: '0 auto',
  zIndex: 2,

  '&:before': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg,rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%)'
  },

  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

interface WatchProps {
  closeWatch?: any
}

export const WatchList = ({ closeWatch }:WatchProps) => {
  return(

    <WatchWrap>
      <WatchContent>
        <WatchVideo>
            <video
              src="/ghouls/watch2.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            />
          </WatchVideo>
        <WatchMain>
          <WatchText>
            <WatchTitle>
              <Heading size="l1" color="secondary" title="Date saved, Get Ready!" />
              <Heading heavy size="l4" title="You're in the Squad!" />
            </WatchTitle>

            <Text fontSize="l1">
              We&apos;ll send you a reminder when the Ghoul Squad drop goes live. Get ready to unbox the squad and claim your exclusive collectable!
            </Text>
          </WatchText>

          <Button title="Dicover more Ghouls" />
        </WatchMain>

        <WatchClose><ButtonIcon icon="x" onClick={ closeWatch } /></WatchClose>
      </WatchContent>
    </WatchWrap>

  )
}
