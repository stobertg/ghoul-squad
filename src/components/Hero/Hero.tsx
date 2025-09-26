import React from 'react'
import { styled } from '@theme'
import { Heading, CharacterVideo, Countdown } from '@components'

const HeroWrap = styled('div', {

})

const HeroContent = styled('div', {

})

interface HeroProps {

}

export const Hero = ({}:HeroProps) => {
  return(

    <HeroWrap>
      <HeroContent>
        <CharacterVideo video="/ghouls/casper.webm" />
        <Countdown targetDate="2025-10-01T23:59:59" />
      </HeroContent>
    </HeroWrap>

  )
}