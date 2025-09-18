import React from 'react'
import { styled } from '@theme'

// For the master container of the icons
// Icons are used in various parts of the size, such as buttons, steps, static, ect

const IconWrap = styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 24,
  height: 24,
  pointerEvents: 'none',
  overflow: 'hidden',

  // For the size of the svg to sit in the center of the container
  // This also changes the color to inheit the parent color 

  svg: {
    position: 'absolute',
    width: '100%',
    fill: 'CurrentColor'
  },

  // For the different variants supporting the icon component
  // This conains changes to the size and background of the icon

  variants: {
    size: {
      l0: { minWidth: 16, width: 16, minHeight: 16, height: 16 },
      l1: { minWidth: 20, width: 20, minHeight: 20, height: 20 },
      l2: { minWidth: 24, width: 24, minHeight: 24, height: 24 },
      l3: { minWidth: 28, width: 28, minHeight: 28, height: 28 },
      l4: { minWidth: 40, width: 40, minHeight: 40, height: 40 },
      l5: { minWidth: 52, width: 52, minHeight: 52, height: 52 }
    }
  }
})

// -------------- Typescript declarations -------------- //

interface IconProps {
  size?: 'l0' | 'l1' | 'l2' | 'l3' | 'l4'
  icon?: string
  iconAlt?: string
}

// ---------- This is the end of declarations ---------- //

export const Icon = ({
    size,
    icon,
    iconAlt
  }: IconProps ) => {
  
  return(

    <IconWrap {...{ size }}>
      <svg>
        <use 
          xlinkHref={ `/icons/icons.svg#${ icon }` }
          xlinkTitle={ icon } 
        />
      </svg>
    </IconWrap>
    
  )
}
