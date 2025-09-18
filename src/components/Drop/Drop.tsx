import React from 'react'
import { styled } from '@theme'
import { Hero, Countdown } from './Parts'

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

    <>
      <Hero {...{ title, subTitle, image, video, videos, titles }} />
      <Countdown targetDate="2025-10-01T23:59:59" />
    </>


  )
}