import React from 'react'
import { styled } from '@theme'
import { ButtonIcon } from '@components'

const ButtonWrap = styled('div', {
  position: 'relative'
})

const ButtonContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  position: 'relative',

  variants: {
    spacing: {
      l0: { gap: 4 },
      l1: { gap: 12 },
      l2: { gap: 16 }
    }
  }
})

interface ButtonProps {
  spacing?: 'l0' | 'l1' | 'l2'
  children?: React.ReactNode
  icons?: boolean
  buttons?: {
    icon: string
    onClick: any
  }[]
}

export const ButtonContainer = ({ 
    children, 
    icons, 
    buttons,
    spacing
  }:ButtonProps) => {

  return(

    <ButtonWrap>
      <ButtonContent {...{ spacing }}>

        { children ? (

          <>{ children }</>

        ) : icons? (
          <>
            { buttons?.map(( button, i ) => (

              <ButtonIcon 
                key={`button-${ i }`}
                icon={ button.icon } 
                onClick={ button.onClick }
              /> 

            ))}
          </>
        ) : null }

      </ButtonContent>
    </ButtonWrap>

  )
}