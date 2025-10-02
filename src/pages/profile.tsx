import React from 'react'
import { HeadTags, Phone, PhoneHeader, AppBlock, Profile } from '@components'

export default function Home() {
  return (
    <>
      <HeadTags bgColor="#181818" />
      <Phone removeBg blockSpacing="l2">
        <PhoneHeader overlay />

        <AppBlock blockSpacing="l1">
          <Profile 

          />
        </AppBlock> 
      </Phone>
      
    </>
  )
}
