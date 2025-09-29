import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@theme'

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
 
})

const TabsContent = styled( TabsPrimitive.Content, {

})

interface DetailProps {
  defaultTab?: number
  triggers: {

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
            <TabsContainer>
              { triggers.map(( trigger, i ) => (
                <TabsTrigger 
                  key={ `trigger-${ i + 1 }`} 
                  value={`tab${ i + 1 }`}
                
                > 
                  
                  <></>
                </TabsTrigger>
           
              ))}
            </TabsContainer>
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