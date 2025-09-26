import React from 'react'
import { HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, Hero, AppBlock } from '@components'

export default function Home() {
  return (
    <>
      <HeadTags />
      <Phone>
        <PhoneHeader overlay />
        <AppBlock blockSpacing="l1">
          <ProductHero video="/ghouls/ghoul-box.mp4" />
          <ProductIntro 

          />
        </AppBlock> 

        <AppBlock>
          <></>
        </AppBlock>
        
        {/* <CharacterVideo video="/ghouls/casper.webm" /> */}
      </Phone>
      
    </>
  )
}
