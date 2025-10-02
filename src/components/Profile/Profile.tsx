import React from 'react'
import { styled } from '@theme'
import { ProfileHero, ProfileIntro, Reputation } from './Parts'
import { AppBlock, Reviews } from '@components'

const ProfileWrap = styled('div', {

})

const ProfileContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 28,
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
        <ProfileHero />

        <AppBlock>
          <ProfileIntro 
            title="Ghoul Squad Toys"
            text="Ghoul Squad is a U.S.-based collectibles brand specializing in premium vinyl figures and spooky-themed designer art toys. Blending Halloween nostalgia with modern character design, the company creates iconic figures like ghosts, pumpkins, vampires, and monsters with a stylish, playful edge. "
          />
        </AppBlock>

        <AppBlock>
          <Reputation 
            items={[
              { title: '5.0', subtitle: 'Trust Score'},
              { title: '1,123', subtitle: 'Collectables sold'},
              { title: '1,004', subtitle: 'Positive reviews'},
              { title: 'Verified', subtitle: 'By Walmart'}
            ]}
          />
        </AppBlock>

        <AppBlock width="l0">
          <Reviews />
        </AppBlock>
      </ProfileContent>
    </ProfileWrap>
      
  )
}