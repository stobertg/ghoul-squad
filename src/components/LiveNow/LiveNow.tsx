import React from 'react'
import { styled } from '@theme'
import { Heading } from '@components'

const LiveWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const LiveContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  position: 'relative',
  width: '100%',
})

const LiveHeader = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  gap: 4,
  position: 'relative',
  width: '100%',
  padding: '0 24px',

  '> *:last-child': {
    marginBottom: 2
  }
})

const LiveCards = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 12,
  position: 'relative',
  padding: '0 24px',
  width: '100%',
  overflow: 'scroll'
})

const LiveCard = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 268,
  minWidth: 268,
  height: 388,
  background: '#000',
  borderRadius: '$r2',
  overflow: 'hidden'
})

const CardContent = styled('div', {

})

const CardHeader = styled('div', {

})

const CardBg = styled('div', {

})

interface LiveProps {

}

export const LiveNow = ({}:LiveProps) => {
  return(

    <LiveWrap>
      <LiveContent>

        <LiveHeader>
          <Heading size="l3" title="🎥" />
          <Heading size="l2" bold title="Live Now" />
        </LiveHeader>

        <LiveCards>
          <LiveCard>
            <CardContent>
              <CardHeader>
              
              </CardHeader>
            </CardContent>

            <CardBg><img src="/videos/1.png" /></CardBg>
          </LiveCard>

          <LiveCard>
            <img src="/videos/2.png" />
          </LiveCard>

          <LiveCard>
            <img src="/videos/3.png" />
          </LiveCard>
        </LiveCards>

      </LiveContent>
    </LiveWrap>

  )
}