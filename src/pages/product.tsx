import React from 'react'
import { HeadTags, SiteContainer, Phone, PhoneHeader, ProductHero, ProductIntro, AppBlock, Heading, DropDetails } from '@components'

export default function Home() {
  return (

    <SiteContainer
      nav={[
        { icon: 'star', title: 'Drop hero', link: '/' },
        { icon: 'pumpkin', title: 'Product', link: '/product', active: true },
        { icon: 'clapperboard', title: 'Live drop', link: '/' },
        { icon: 'shopping-cart', title: 'Checkout', link: '/' }
      ]}
    >
      <HeadTags bgColor="#181818" />
      <Phone removeBg bottomNav blockSpacing="l2">
        <PhoneHeader overlay />

        <AppBlock blockSpacing="l1">
          <ProductHero video="/ghouls/ghoul-box.mp4" />
          <ProductIntro />
        </AppBlock> 

        <AppBlock bgColor="subtle" blockSpacing="l1">
          <DropDetails 
            triggers={[
              { image: '/ghouls/static/pump.png', title: 'Sir Pump' },
              { image: '/ghouls/static/casper.png', title: 'Sir Casper' },
              { image: '/ghouls/static/frank.png', title: 'Sir Frank' },
              { image: '/ghouls/static/vamp.png', title: 'Sir Vamp' }
            ]}
            tabContent={[
              { image: '/ghouls/static/pump.png' },
              { image: '/ghouls/static/casper.png' },
              { image: '/ghouls/static/frank.png' },
              { image: '/ghouls/static/vamp.png' }
            ]}
          />
        </AppBlock>
      </Phone>
    </SiteContainer>

  )
}
