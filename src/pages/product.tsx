import React from 'react'
import { HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, Hero, AppBlock, DropDetails } from '@components'

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
          <DropDetails 
            triggers={[
              { image: '/ghouls/static/pump.png', title: 'Sir Pump' },
              { image: '/ghouls/static/casper.png', title: 'Sir Casper' },
              { image: '/ghouls/static/frank.png', title: 'Sir Frank' },
              { image: '/ghouls/static/vamp.png', title: 'Sir Vamp' }
            ]}
            tabContent={[
              {},
              {},
              {},
              {}
            ]}
          />
        </AppBlock>
        
        {/* <CharacterVideo video="/ghouls/casper.webm" /> */}
      </Phone>
      
    </>
  )
}
