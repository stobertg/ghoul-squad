import React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { styled } from '@theme'
import { Heading, Icon, InputSearch } from '@components'

// For the master container of the tabs
// this contains the tab triggers on the top and the content click below the tabs

const TabsWrap = styled( TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%'
})

// For the master containers of the tabs on the top of the container
// This contains the triggers that show the different content contextual to the tab that is clicked

const TabsList = styled( TabsPrimitive.List, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  borderBottom: '1px solid $seperator',
  overflow: 'scroll',
  scrollbarWidth: 'none',

  variants: {
    border: {
      noBorder: { borderBottom: 'none' }
    },

    onSearch: {
      true: { justifyContent: 'space-between' }
    }
  }
})

const TabsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
})

// For the indivudual shared stying of the tab triggers within the master container
// Clicking on these will change the content below

const TabsTrigger = styled( TabsPrimitive.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  height: 55,
  padding: '0 16px',
  color: '$textSecondary',
  fontSize: '$s1',
  transition: '$s1',
  userSelect: 'none',

  // For the auto spacing between the icon and the text
  // This will only trigger if an icon or logo is present to the left of the text

  '> *:not(:last-child)': { 
    marginRight: 16
  },

  // For the line on the bottom of the container
  // This lines shows when the tab is active, once the user has clicks on a trigger
  // By default, this will always shows the selected tab usually being the first tab

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 2,
    background: 'currentColor',
    opacity: 0,
    transition: '$s1'
  },

  // Change the color and add the bottom board on hover
  // This is to give the button the afforance that it is cickable

  '&:hover': { 
    color: '$textPrimary',
    '&:after': { opacity: 1 }
  },

  // For when the user clicks on a tab and the default tab
  // This shows the primary color, with the button unclickable and shows the border on the bottom of the container

  '&[data-state="active"]': {
    color: '$textPrimary',
    pointerEvents: 'none',
    '&:after': { opacity: 1 }
  },

  variants: {
    tabSize: {
      tiny: {
        height: 32, 
        padding: '0 16px',
        '*': { fontSize: '$s1' }
      },
      small: { 
        '*': { fontSize: 'initial' }
      }
    },

    hasIcon: {
      true: { }
    },

    variant: {
      pill: {
        height: 44,
        padding: '0 20px',
        border: '1px solid $border',
        borderRadius: '$pill',

        '&:not(:last-child)': { marginRight: 4 },
        '&:after': { display: 'none' },
        '*': { fontSize: '$s1' }
      }
    }
  }
})

const TabsContent = styled( TabsPrimitive.Content, {
  padding: '20px 0',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
  // '&:focus': { boxShadow: `0 0 0 2px black` },

  variants: {
    bgColor: {
      primary: { background: '$brandPrimary' },
      secondary: { background: '$brandSecondary' },
      tertiary: { background: '$brandTertiary' }
    },

    width: {
      small: {},
      medium: {},
      large: { width: '90%', margin: '32px auto', borderRadius: '$r2' }
    }
  }
})
  
// -------------- Typescript declarations -------------- //

interface TabsProps {
  variant?: 'pill'
  triggers: { 
    logo?: React.ReactNode
    icon?: string
    iconLayered?: string
    title?: string 
  }[]
  tabContent: { 
    title?: string 
    content?: React.ReactNode 
  }[]
  defaultTab?: number
  bgColor?: 'primary' | 'secondary' | 'tertiary'
  border?: 'noBorder'
  tabSize?: 'tiny' | 'small'
  contentWidth?: 'small' | 'medium' | 'large'
  onSearch?: any
}

// ---------- This is the end of declarations ---------- //

export const Tabs = ({ 
    variant,
    triggers,
    tabContent,
    defaultTab,
    bgColor,
    border,
    tabSize,
    contentWidth,
    onSearch
  }: TabsProps) => {
  return (

    <TabsWrap defaultValue={ `tab${ defaultTab ? defaultTab : 1 }` }>
      <TabsList aria-label="Manage your account" {...{ border, onSearch }}>
        <TabsContainer>
          { triggers.map(( trigger, i ) => (
            <TabsTrigger 
              key={ `trigger-${ i + 1 }`} 
              value={`tab${ i + 1 }`}
              hasIcon={ true }
              {...{ variant, tabSize }}
            > 
              { trigger.logo && ( <>{ trigger.logo }</> )}
              { trigger.icon && ( <Icon size="l0" icon={ trigger.icon } /> )}
              { trigger.iconLayered && ( <Icon size="l1" iconAlt={ trigger.iconLayered } /> )}
              { trigger.title && ( <Heading size="l2" title={ trigger.title } /> )}
            </TabsTrigger>
          ))}
        </TabsContainer>

        { onSearch && ( <InputSearch 
        // size="small" 
        // onChange={ onSearch } 
        /> )}
      </TabsList>
      
      { tabContent.map(( content, i ) => (
        <TabsContent 
          {...{ bgColor }}
          key={`tab-${ i }`} 
          value={`tab${ i + 1 }`}
          width={ contentWidth }
        >
          { content.content || content.title }
        </TabsContent>
      ))}
    </TabsWrap>
    
  )
}
