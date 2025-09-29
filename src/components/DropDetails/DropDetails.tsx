import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@theme'
import { Grid, Heading, FallAnimation } from '@components'
import { DropSeller } from './Parts/DropSeller'

const DetailWrap = styled('div', {

})

const DetailContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%'
})

const TabsWrap = styled( TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%'
})

const TabsList = styled( TabsPrimitive.List, {
  
})

const TabsContainer = styled('div', {

})

const TabsTrigger = styled( TabsPrimitive.Trigger, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 0,
  position: 'relative',
  height: 55,
  border: '1px solid $bgTert',
  borderRadius: '$r1',
  overflow: 'hidden',
  transition: '$s1',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$bgTert'
  },

  '&[data-state="active"]': {
    border: '1px solid $borderActive',

    '&:before': {  
      background: '$borderActive',
      opacity: 0.4 
    }
  }
})

const TriggerImage = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  position: 'relative',
  width: 60,
  height: '100%',

  img: {
    position: 'absolute',
    width: '160%',
    height: '160%',
    objectFit: 'cover'
  }
})

const TabsContent = styled( TabsPrimitive.Content, {

})

const DropIntro = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative',
  wdith: '100%'
})

const DropStageWrap = styled('div', {
  position: 'relative',
  width: '100%',
  border: '1px solid $border',
  borderRadius: '$r2',
  overflow: 'hidden'
})

const DropStage = styled('div', {
  position: 'relative',
  zIndex: 10
})

const DropStageContent = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '32px 0'
})

const DropStageImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: 240,

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  }
})

interface DetailProps {
  defaultTab?: number
  triggers: {
    image?: string
    title: string
  }[]
  tabContent: {
    image: string
  }[]
}

export const DropDetails = ({ defaultTab, triggers, tabContent }:DetailProps) => {
  return(

    <DetailWrap>
      <DetailContent>

        <DropIntro>
          <Heading size="l0" color="secondary" title="Details" />
          <Heading bold size="l3" title="The Ghoul Squad isn&apos;t just a toy. It&apos;s a whole world of scare." />
        </DropIntro>

        <TabsWrap defaultValue={ `tab${ defaultTab ? defaultTab : 1 }` }>
          <TabsList aria-label="Manage your account">
            <Grid>
              { triggers.map(( trigger, i ) => (

                <TabsTrigger 
                  key={ `trigger-${ i + 1 }`} 
                  value={`tab${ i + 1 }`}
                
                > 
                  { trigger.image && ( 
                    <TriggerImage>
                      <img src={ trigger.image } alt={ trigger.title } />
                    </TriggerImage> 
                  )}

                  <Heading bold size="l1" title={ trigger.title } />
                </TabsTrigger>
           
              ))}
            </Grid>
          </TabsList>
          
          <DropStageWrap>
            <DropStageContent>
              { tabContent.map(( content, i ) => (

                <TabsContent 
                  key={`tab-${ i }`} 
                  value={`tab${ i + 1 }`}
                >
                  <DropStage>
                    <DropStageImage>
                      <img src={ content.image } alt="Ghoul Squad" />
                    </DropStageImage>
                  </DropStage>
                </TabsContent>

              ))}
            </DropStageContent>

            <FallAnimation />
          </DropStageWrap>
        </TabsWrap>

        <DropSeller />
      </DetailContent>
    </DetailWrap>

  )
}