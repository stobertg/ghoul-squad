import React from 'react'
import { styled } from '@theme'
import { Grid } from '@components'
import { useTheme } from 'next-themes'

const ColWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '8px 24px'
})

const CardWrap = styled('div', {

})

interface ColProps {

}

export const Collections = ({}:ColProps) => {
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === 'light'

  return(

    <ColWrap>
      <Grid>
        <CardWrap>
          <img src={isLight ? '/cards/light/front/ghost.png' : '/cards/dark/front/ghost.png'} />
        </CardWrap>

        <CardWrap>
          <img src={isLight ? '/cards/light/front/frank.png' : '/cards/dark/front/frank.png'} />
        </CardWrap>

        <CardWrap>
          <img src={isLight ? '/cards/light/front/pump.png' : '/cards/dark/front/pump.png'} />
        </CardWrap>

        <CardWrap>
          <img src={isLight ? '/cards/light/front/vamp.png' : '/cards/dark/front/vamp.png'} />
        </CardWrap>
      </Grid>
    </ColWrap>

  )
}