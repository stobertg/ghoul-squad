import React from 'react'
import { styled } from '@theme'
import { Hero, Countdown } from './Parts'

interface DropProps {
  title?: string
  subTitle?: string
  image?: string
  video?: string
  videos?: any
}

export const Drop = ({
    title,
    subTitle,
    image,
    video,
    videos
  }:DropProps) => {

  return(

    <>
      <Hero {...{ title, subTitle, image, video, videos }} />
      <Countdown targetDate="2025-12-31T23:59:59" />
    </>


  )
}