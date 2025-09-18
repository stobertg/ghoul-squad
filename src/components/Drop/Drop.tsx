import React from 'react'
import { styled } from '@theme'
import { Hero, Countdown } from './Parts'
import { BrandChip } from '@components'

const DropWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 50,
  position: 'relative',
  width: '100%'
})

const DropMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 20,
  position: 'relative',
  width: '100%'
})

interface DropProps {
  title?: string
  subTitle?: string
  image?: string
  video?: string
  videos?: any
  titles?: any
}

export const Drop = ({
    title,
    subTitle,
    image,
    video,
    videos,
    titles
  }:DropProps) => {

  return(

    <DropWrap>
      <DropMain>
        <Hero {...{ title, subTitle, image, video, videos, titles }} />
        <Countdown targetDate="2025-10-01T23:59:59" />
      </DropMain>

      <BrandChip />
    </DropWrap>


  )
}