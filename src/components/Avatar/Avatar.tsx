import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const AvatarWrap = styled('button', {
  position: 'relative'
})

const AvatarContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 10,
  position: 'relative'
})

const AvatarImage = styled('div', {
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
  },

  variants: {
    size: {
      l1: { width: 40, height: 40 }
    }
  }
})  

const AvatarText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative',
  textAlign: 'left'
})

interface AvatarProps {
  image: string
  name?: string
  size?: 'l1'
  timeStamp?: string
}

export const Avatar = ({
    image,
    name,
    size,
    timeStamp
  }:AvatarProps) => {
  
  return(

    <AvatarWrap>
      <AvatarContent>
        <AvatarImage {...{ size }}>
          <img src={ image } alt={ name ? name : 'Ghoul Image' } />
        </AvatarImage>

        { name && (
          <AvatarText>
            <Heading bold size="l1" title={ name } />
            { timeStamp && ( <Heading size="l0" color="secondary" title={ timeStamp } /> )}
          </AvatarText>
        )}
      </AvatarContent>
    </AvatarWrap>
      
  )
}