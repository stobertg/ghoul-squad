import React from 'react'
import { HeadTags, Phone, PhoneHeader, AppBlock, TikTok } from '@components'

export default function Home() {
  return (
    <>
      <HeadTags bgColor="#181818" />
      <Phone removeBg hasHero blockSpacing="l2">
        <TikTok />
      </Phone>
      
    </>
  )
}
