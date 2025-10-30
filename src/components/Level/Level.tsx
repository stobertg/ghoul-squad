import React from 'react'
import { useTheme } from 'next-themes'
import { styled } from '@theme'
import { Heading } from '@components'

const LevelWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const LevelContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 16,
  position: 'relative',
  width: '100%',
  padding: 16,
  border: '1px solid $seperator',
  borderRadius: '$r2'
})

const LevelBadge = styled('div', {
  position: 'relative',
  width: 64
})

const LevelText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  position: 'relative',
  '> *:last-child': { lineHeight: 1.3 }
})

const LevelMain = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  position: 'relative'
})

const LevelProgress = styled('div', {
  position: 'relative',
  width: '100%',
  height: 8,
  background: '$progress',
  borderRadius: '$pill',
  overflow: 'hidden',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '35%',
    height: '100%',
    background: 'green',
    borderRadius: '$pill'
  }
})

interface LevelProps {

}

export const Level = ({}:LevelProps) => {
  const { resolvedTheme } = useTheme()
  const badgeSrc = resolvedTheme === 'light'
    ? '/badges/pump-badge.png'
    : '/badges/pump-badge-inverse.png'
  return(

    <LevelWrap>
      <LevelContent>
        <LevelBadge>
          <img src={badgeSrc} />
        </LevelBadge>

        <LevelMain>
          <LevelText>
            <Heading size="l0" color="secondary" title="Level 1 - Halloween Stater Pack" />
            <Heading size="l1" title="Complete your first collection and unlock exclusive benefits" />
          </LevelText>

          <LevelProgress />
        </LevelMain>
      </LevelContent>
    </LevelWrap>
      
  )
}