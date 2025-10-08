import React from 'react'
import { HeadTags, SiteContainer, Phone, PhoneHeader, AppBlock, Profile } from '@components'

export default function Home() {
  return (
    <SiteContainer
      nav={[
        { icon: 'star', title: 'Drop hero', link: '/' },
        { icon: 'pumpkin', title: 'Product', link: '/product' },
        { icon: 'clapperboard', title: 'Live drop', link: '/drop' },
        { icon: 'user-check', title: 'Profile', link: '/profile', active: true },
        { icon: 'shopping-cart', title: 'Checkout', link: '/checkout', active: false },
      ]}
    >
      <HeadTags bgColor="#181818" />
      <Phone removeBg blockSpacing="l2">
        <PhoneHeader overlay />

        {/* <AppBlock blockSpacing="l1"> */}
          <Profile 

          />
        {/* </AppBlock>  */}
      </Phone>
      
    </SiteContainer>
  )
}
