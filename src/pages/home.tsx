import React from 'react'
import { HeadTags, SiteContainer, Phone, PhoneHeader, Hero, AppBlock, ProductCards } from '@components'

export default function Home() {
  return (

    <SiteContainer
      nav={[
        { icon: 'star', title: 'Drop hero', link: '/' },
        { icon: 'pumpkin', title: 'Product', link: '/' },
        { icon: 'clapperboard', title: 'Live drop', link: '/' },
        { icon: 'shopping-cart', title: 'Checkout', link: '/' }
      ]}
    >
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
    </SiteContainer>

  )
}
