import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@theme'
import { Grid, Heading } from '@components'

const DetailWrap = styled('div', {

})

const DetailContent = styled('div', {

})

const DetailTabs = styled('div', {

})

const TabsWrap = styled( TabsPrimitive.Root, {
 
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
  background: '$bgTert',
  borderRadius: '$r1',
  overflow: 'hidden'
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

interface DetailProps {
  defaultTab?: number
  triggers: {
    image?: string
    title: string
  }[]
  tabContent: {

  }[]
}

export const DropDetails = ({ defaultTab, triggers, tabContent }:DetailProps) => {
  return(

    <DetailWrap>
      <DetailContent>
        <DetailTabs></DetailTabs>

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
          
          { tabContent.map(( content, i ) => (
            <TabsContent 
              key={`tab-${ i }`} 
              value={`tab${ i + 1 }`}
            >
              <></>
            </TabsContent>
          ))}
        </TabsWrap>
      </DetailContent>
    </DetailWrap>

  )
}