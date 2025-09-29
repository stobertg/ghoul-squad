import React from 'react'
import { HeadTags, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails } from '@components'

export default function Home() {
  return (
    <>
      <HeadTags bgColor="#181818" />
      <Phone removeBg bottomNav blockSpacing="l2">
        <PhoneHeader overlay />

        <AppBlock blockSpacing="l1">
          <ProductHero video="/ghouls/ghoul-box.mp4" />
          <ProductIntro 

          />
        </AppBlock> 

        <AppBlock bgColor="subtle" blockSpacing="l1">
          <div>
            <Heading size="l0" color="secondary" title="Details" />
            <Heading bold size="l3" title="The Ghoul Squad isn&apos;t just a toy. It&apos;s a whole world of scare." />
          </div>

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
