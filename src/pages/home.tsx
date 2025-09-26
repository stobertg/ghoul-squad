import React from 'react'
import { HeadTags, Phone, PhoneHeader, Hero, AppBlock, ProductCards } from '@components'

export default function Home() {
  return (
    <>
      <HeadTags />
      <Phone>
        <PhoneHeader home />
        <AppBlock>
          <Hero />
        </AppBlock>

        <AppBlock>
          <ProductCards 
            items={[
              { image: '/products/spongebob.png', title: 'Queenie Fok Zombie Spongebob' },
              { image: '/products/gremlins.png', title: 'Queenie Fok Zombie Spongebob' },
              { image: '/products/trickrtreat.png', title: 'Queenie Fok Zombie Spongebob' },
              { image: '/products/jack.png', title: 'Queenie Fok Zombie Spongebob' }
            ]}
          />
        </AppBlock>
        
        {/* <CharacterVideo video="/ghouls/casper.webm" /> */}
      </Phone>
      
    </>
  )
}
