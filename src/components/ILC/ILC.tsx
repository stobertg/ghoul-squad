import React from 'react'
import { styled } from '@theme'
import { Heading, TextEm, Icon } from '@components'
import { WPlus, Selection } from './Parts'

const Wrap = styled('div', {

})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  position: 'relative',
  width: '100%',
  padding: '28px 22px',
  border: '1px solid $seperator',
  borderRadius: '$r2',

  a: {
    textDecoration: 'underline'
  }
})

const ContentBlock = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative',
  width: '100%',

  variants: {
    hasDivider: {
      true: {
        paddingTop: 16,
        borderTop: '1px solid $seperator'
      }
    }
  }
})

const BlockItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',
  width: '100%'
})

const BlockIcon = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 20,
  height: 20
})

interface ILCProps {

}

export const ILC = ({}:ILCProps) => {
  return(

    <Wrap>
      <Content>
        <ContentBlock>
          <Heading bold title="How do you want your item?" />
          <WPlus />
          <Selection />
        </ContentBlock>
        
        <ContentBlock>
          <Heading size="l0" title={<>Deliver to <a href="#"><strong>3741 Park Ln</strong></a> &nbsp;&nbsp;|&nbsp;&nbsp; Item is online only</>} />
          <Heading size="l0" title={<>Free delivery <strong>tomorrow</strong>. <TextEm>Order within 2 hrs 17 mins</TextEm></>} />
        </ContentBlock>

        <ContentBlock hasDivider>
          <BlockItem>
            <BlockIcon><Icon size="l1" icon="store" /></BlockIcon>
            <Heading size="l0" title={<>Sold and shipped by <strong>Walmart</strong></>} />
          </BlockItem>
          
          <BlockItem>
            <BlockIcon><img src="/brand/return.svg" /></BlockIcon>
            <Heading size="l0" title={<><strong>Free 90 day returns</strong>&nbsp;&nbsp;&nbsp;<a href="#">Details</a></>} />
          </BlockItem>
        </ContentBlock>
      </Content>
    </Wrap>

  )
}