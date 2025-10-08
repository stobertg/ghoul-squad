import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'
import { Blob, StageNav } from './Parts'

const SiteWrap = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  background: '#1e1e1e',
  overflow: 'hidden'
})

const StageContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: 1400,
  width: '90%',
  minHeight: '100dvh',
  padding: '28px 0',
  margin: '0 auto',
  zIndex: 1,

  '@mobile': { 
    flexDirection: 'column',
    width: '100vw',
    padding: 0,
    gap: 0
  }
})

const StageLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  maxWidth: 600,
  height: '85%',
  
  '@mobile': { display: 'none' }
})

const StageLogo = styled('div', {
  position: 'relative',
  width: 50
})

const StageLegal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})

const StageLeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 40,
  position: 'relative',
  width: '100%'
})

const StageLeftIntro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  position: 'relative',
  width: '100%'
})

const StagePhone = styled('div', {

})

const StageRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  height: '85%',
  '@mobile': { display: 'none' }
})

const BlobWrap = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 0,
  maxWidth: '80vw',
  '@mobile': { display: 'none' }
})

interface SiteProps {
  children: React.ReactNode
  nav?: {
    link: string
    icon: string
    title: string
    active?: boolean
  }[]
}

export const SiteContainer = ({ children, nav }:SiteProps) => {
  return(

    <SiteWrap>
      <StageContent>
        <StageLeft>
          <StageLogo><img src="/badges/badge_collab.png" /></StageLogo>

          <StageLeftContent>
            <StageLeftIntro>
              <Heading size="l3" color="secondary" title="Design" />
              <Heading heavy size="l9" title="Collectibles Northstar Vision" />
              <Heading size="l5" color="secondary" title="Seasonal Concept" />
            </StageLeftIntro>

            <StageNav items={ nav } />
          </StageLeftContent>

          <StageLegal>
            <Heading title="October 2025" />
            <Heading size="l0" color="secondary" title="This document is private and confidential. For internal user only." />
          </StageLegal>
        </StageLeft>

        <StagePhone>{ children }</StagePhone>

        <StageRight>
          <Heading bold size="l3" title="Ghoul Squad" />
        </StageRight>
      </StageContent>

      <BlobWrap><Blob /></BlobWrap>
    </SiteWrap>

  )
}