import React from 'react'
import { styled } from '@theme'
import Tilt from 'react-parallax-tilt'
import { Heading, Text, Button, Grid } from '@components'
import { UnboxCard } from './Parts' 

const BoxWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  paddingTop: 10,
})

const BoxHero = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  zIndex: 1
})

const BoxBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  zIndex: 1
})

const BoxText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%'
})

const BoxTextIntro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4
})

const BoxContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '80%',
  margin: '0 auto',
  padding: '32px 0',
  textAlign: 'center'
})

const BoxShare = styled('div', {

})

const BoxBg = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: -150,
  left: 0,
  width: '100%',
  height: 'calc( 50% + 200px )',
  zIndex: 0,
  opacity: '0.015',

  img: {
    width: '100%',
    objectFit: 'contain'
  }
})

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  position: 'relative',
  width: '100%'
})

interface UnboxProps {

}

export const Unbox = ({}:UnboxProps) => {
  return(

    <BoxWrap>
      <BoxHero>
        <Tilt
          trackOnWindow={ true }
          tiltMaxAngleX={ 20 }
          tiltMaxAngleY={ 20 }
          glareEnable={ true }
          glareMaxOpacity={0.15}
          glareBorderRadius="32px"
          glareColor="orange"
          tiltReverse={ true }
          glarePosition="all"
        >
          <UnboxCard />
        </Tilt>
      </BoxHero>

      <BoxBottom>
        <BoxContent>
          <BoxText>
            <BoxTextIntro>
              <Heading size="l1" color="secondary" title="Congrats, Isabella" />
              <Heading heavy size="l5" title="You Collected Casper!" />
            </BoxTextIntro>
            
            <Text fontSize="l1">
              Welcome to the Ghoul Squad! Your collection is growing - don't stop here. Collect them all for exclusive 
              benefits, discounts, and more!
            </Text>
          </BoxText>

          <ButtonContainer>
            <div><Button size="l1" title="Share in community" /></div>
            <div><Button size="l1" variant="underline" title="View Profile" /></div>
          </ButtonContainer>
        </BoxContent>

        {/* <BoxShare>
          <Grid columns={ 3 }>
            <button><img src="/social/tiktok-white.svg" /></button>
            <button><img src="/social/instagram-white.svg" /></button>
            <button><img src="/social/facebook-white.svg" /></button>
          </Grid>
        </BoxShare> */}
      </BoxBottom>

      <BoxBg>
        <img src="/textures/ghost.jpg" />
        <img src="/textures/ghost.jpg" />
      </BoxBg>
    </BoxWrap>

  )
}