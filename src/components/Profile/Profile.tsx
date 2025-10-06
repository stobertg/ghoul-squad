import React from 'react'
import { styled } from '@theme'
import { ProfileHero, ProfileIntro, Reputation } from './Parts'
import { AppBlock, Reviews, ItemCarousel } from '@components'

const ProfileWrap = styled('div', {

})

const ProfileContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 60,
  position: 'relative',
  width: '100%'
})

const IntroContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  position: 'relative',
  width: '100%'
})

const ProfileBio = styled('div', {

})

const ProfileBlock = styled('div', {
  
})

interface ProfileProps {

}

export const Profile = ({}:ProfileProps) => {
  return(

    <ProfileWrap>
      <ProfileContent>
        <IntroContent>
          <AppBlock>
            <ProfileHero />
          </AppBlock>

          <AppBlock width="l2">
            <ProfileIntro 
              title="Ghoul Squad Toys"
              text="Ghoul Squad is a U.S.-based collectibles brand specializing in premium vinyl figures and spooky-themed designer art toys. Blending Halloween nostalgia with modern character design, the company creates iconic figures like ghosts, pumpkins, vampires, and monsters with a stylish, playful edge. "
            />
          </AppBlock>

          <AppBlock width="l2">
            <Reputation 
              items={[
                { icon: 'star', title: '5.0', subtitle: 'Trust Score' },
                { icon: 'tags', title: '1,123', subtitle: 'Collectables sold' },
                { icon: 'thumbs-up', title: '1,004', subtitle: 'Positive reviews' },
                { icon: 'circle-check', title: 'Verified', subtitle: 'By Walmart' }
              ]}
            />
          </AppBlock>
        </IntroContent>

        

        <ItemCarousel 
          items={[
            {},
            {},
            {}
          ]}
        />

        <AppBlock width="l1">
          <Reviews />
        </AppBlock>
      </ProfileContent>
    </ProfileWrap>
      
  )
}