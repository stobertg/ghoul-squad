import React from 'react'
import { styled } from '@theme'

const AvatarWrap = styled('button', {
  position: 'relative'
})

const AvatarContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 30,
  height: 30,
  borderRadius: '50%',
  overflow: 'hidden',

  img: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})  

interface AvatarProps {
  image: string
  name?: string
}

export const Avatar = ({
    image,
    name
  }:AvatarProps) => {
  
  return(

    <AvatarWrap>
      <AvatarContent>
        <img src={ image } alt={ name ? name : 'Ghoul Image' } />
      </AvatarContent>
    </AvatarWrap>
      
  )
}