import React, { useState } from 'react'
import { styled } from '@theme'
import { FallAnimation, CharacterVideo, Heading } from '@components'
import { useTheme } from 'next-themes'

const CardWrap = styled('button', {
  position: 'relative',
  width: '100%',
  perspective: '1000px',
  overflow: 'hidden',
  borderRadius: '$r3'
})

const CardContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 260,
  height: 360,
  background: '$cardBg',
  margin: '0 auto',
  transformStyle: 'preserve-3d',
  WebkitTransformStyle: 'preserve-3d',
  transition: 'transform 600ms cubic-bezier(0.2, 0.8, 0.2, 1)',
  willChange: 'transform',
  // boxShadow: '0 2px 10px rgba( 0,0,0, 1 )',

  '&:before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'calc( 100% - 2px )',
    height: 'calc( 100% - 2px )',
    border: '1px solid $cardBorder',
    borderRadius: '$r3',
    zIndex: 10,
  },

  variants: {
    flipped: {
      false: { transform: 'rotateY(0deg)' },
      true: { transform: 'rotateY(180deg)' }
    }
  },

  defaultVariants: {
    flipped: false
  }
})

const BgWrap = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  zIndex: 1
})

const CardFront = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  // background: '#141414',
  width: '100%',
  height: '100%',
  padding: 14,
  zIndex: 1,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: 'rotateY(0deg) translateZ(0)',

  '> *:first-child': { 
    width: '75%',
    zIndex: 2, 
  }
})  

const CardFrontBg = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '180%',
  height: '120%',
  backgroundColor: '$cardBgDark',
  // backgroundImage: 'url("https://www.transparenttextures.com/patterns/crissxcross.png")',
  backgroundImage:' url("/textures/cartographer.png")',
  backgroundSize: '200px',
  backgroundRepeat: 'repeat',
  // backgroundImage: 'url("https://www.transparenttextures.com/patterns/bo-play.png")',
  
  transform: 'rotate( 45deg )',
  transition: 'opacity 0.3s ease',

  variants: {
    mode: {
      light: { opacity: 0.2 },
      dark: { opacity: 1 }
    }
  }
})

const CardBackTexture = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '180%',
  height: '120%',
  backgroundColor: '$cardBgDark',
  // backgroundImage: 'url("https://www.transparenttextures.com/patterns/crissxcross.png")',
  backgroundImage:' url("/textures/cartographer.png")',
  backgroundSize: '200px',
  backgroundRepeat: 'repeat',
  // backgroundImage: 'url("https://www.transparenttextures.com/patterns/bo-play.png")',
  
  transform: 'rotate( 45deg )',
  transition: 'opacity 0.3s ease',

  variants: {
    mode: {
      light: { opacity: 0.2 },
      dark: { opacity: 1 }
    }
  }
})

const CardBack = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100% !important',
  height: '100%',
  padding: 20,
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: 'rotateY(180deg) translateZ(0)',
})

const CardBackBg = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',

  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.1,
    zIndex: 1
  }
})

const CardCorners = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: '93%',
  height: '90%',

  '&:before': {
    content: '',
    position: 'absolute',
    width: '84%',
    height: '92%',
    border: '1px solid $cardBgDark'
  }
})

const CardCornerItems = styled('div', {
  position: 'absolute',
  width: 40,
  height: 24,
  opacity: 1,

  img: {
    height: '100%',
    objectFit: 'contain'
  },

  variants: {
    placement: {
      topLeft: { top: 0, left: 0 },
      topRight: { top: 0, right: 0 },
      bottomRight: { bottom: 0, right: 0 },
      bottomLeft: { bottom: 0, left: 0 }
    }
  }
})

const CardText = styled('div', {
  position: 'absolute',
  width: '75%',
  height: '71%',
  zIndex: 10,
  
  '*': { 
    fontSize: 8,
    textTransform: 'uppercase',
    color: '#555'
  },

  '> *:first-child': { 
    position: 'absolute', 
    top: 0, 
    left: 0,
    transform: 'rotate( 90deg )',
    transformOrigin: 'top left'
  },

  '> *:last-child': { 
    position: 'absolute', 
    bottom: 46, 
    right: 0,
    transform: 'rotate( -90deg )', 
    transformOrigin: 'top right',
  }
})

const CardBackContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  paddingBottom: 24,
  zIndex: 2
})

const CardBackGraphic = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 136,
  minWidth: 136,
  height: 140,
  width: '100%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  variants: {
    opacity: {
      true: { opacity: 0.15 }
    },

    placement: {
      top: { transform: 'translateY( -70px )' },
      bottom: { transform: 'translateY( 50px )' }
    }
  }
})

const CardBackBadge = styled('div', {
  position: 'absolute',
  bottom: 20,
  right: 20,
  width: 50,
  borderRadius: '50%',
  boxShadow: '0 0 10px rgba( 0,0,0, 0.6 )',
  zIndex: 2
})

const CardTop = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'absolute',
  top: 28,
  width: '100%',
  padding: '0 20px',
  color: '$textPrimary'
})

const CardBottom = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  // justifyContent: 'space-between',
  position: 'absolute',
  bottom: 20,
  width: '100%',
  padding: '0 20px',
  zIndex: 2
})

const CardBottomBadge = styled('div', {
  position: 'relative',
  width: 36
})

const CardBottomText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  textAlign: 'left'
})

const CardFrontText = styled('div', {
  position: 'absolute',
  bottom: 22,
  width: '100%',
  padding: '0 20px',
  zIndex: 10
})

interface CardProps {
  flipped?: boolean
}

export const UnboxCard = ({ }: CardProps) => {
  const [ flip, setFlip ] = useState( false )
  const { resolvedTheme } = useTheme()
  const cardMode = resolvedTheme === 'dark' ? 'dark' : 'light'
  const darkImg = "/textures/ghost.jpg"
  const lightImg = "/textures/ghost-alt.webp"
  const bgImg = resolvedTheme === 'dark' ? darkImg : lightImg
  const flipCard = () => { setFlip( !flip ) }

  return (

    <CardWrap onClick={ flipCard }>
      <CardContent flipped={ flip }>
        <CardFront>
          <CharacterVideo video="/ghouls/casper.webm" />
          <BgWrap><FallAnimation placement="top" /></BgWrap>
          <CardFrontBg mode={cardMode} />

          <CardFrontText>
            <Heading heavy size="l2" title="Sir Casper" />
          </CardFrontText>

          <CardText>
            <Heading bold color="secondary" title="Ghoul Squad" />
            <Heading bold color="secondary" title="Ghoul Squad" />
          </CardText>

          <CardCorners>
            <CardCornerItems placement="topLeft"><img src="/ghouls/illus/ghost-trans.png" /></CardCornerItems>  
            <CardCornerItems placement="topRight"><img src="/ghouls/illus/pump-trans.png" /></CardCornerItems>  
            <CardCornerItems placement="bottomLeft"><img src="/ghouls/illus/frank-trans.png" /></CardCornerItems>  
            <CardCornerItems placement="bottomRight"><img src="/ghouls/illus/vamp-trans.png" /></CardCornerItems>  
          </CardCorners>

          <CardBackBg><img src={bgImg} /></CardBackBg>
        </CardFront>

        <CardBack>
          <CardBackContent>
            <CardBackGraphic opacity placement="top"><img src="/ghouls/illus/pump-trans.png" /></CardBackGraphic>
            <CardBackGraphic><img src="/ghouls/illus/ghost-trans.png" /></CardBackGraphic>
            <CardBackGraphic opacity placement="bottom"><img src="/ghouls/illus/frank-trans.png" /></CardBackGraphic>
          </CardBackContent>
          
          <CardBottom>
            <CardBottomBadge><img src="/badges/badge_collab.png" /></CardBottomBadge>
            <CardBottomText>
              <Heading size="l1" title="Sir Casper" />
              <Heading size="l0" title="Ghoul Squad + Finds" />
            </CardBottomText>
          </CardBottom>

          <CardTop>
            <Heading bold size="l0" title="Collectable" />
            <Heading bold size="l0" title="#111/400" />
          </CardTop>
          {/* <CardBackBadge><img src="/badges/badge_collab.png" /></CardBackBadge> */}
          <CardBackBg>
            <img src={bgImg} />
          </CardBackBg>
          <CardBackTexture mode={cardMode} />
        </CardBack>
      </CardContent>
    </CardWrap>

  )
}