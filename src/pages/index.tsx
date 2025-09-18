import React from 'react'
import { styled } from '@theme'
import { HeadTags, Phone, PhoneHeader, Heading, Drop } from '@components'

const VideoWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 340,

  video: {
    position: 'absolute',
    maxWidth: 280,
    width: '100%',
    height: 500,
    display: 'block',
    pointerEvents: 'none'
  }
})

const HeroWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  position: 'relative',
  width: '100%',
})

const HeroText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%'
})

const HeroImageWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

const HeroImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 300,

  img: {
    display: 'flex',
    mixBlendMode: 'multiply'
  }
})

export default function Home() {

  return (
    <>
      <HeadTags />
      <Phone>
        <PhoneHeader overlay />

        <Drop 
          title="Sir Casper"
          subTitle="Ghoul Squad"
          videos={[
            '/ghouls/casper.webm',
            '/ghouls/frank.webm',
            '/ghouls/pump.webm',
            '/ghouls/vamp.webm'
          ]}
        />
      </Phone>
    </>
  )
}
