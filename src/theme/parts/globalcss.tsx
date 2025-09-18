import { Typeface } from './fonts'

export const globalStyle = {
  '*': {
    boxSizing: 'border-box',
    fontFamily: '$sansSerif',
    color: 'inherit',
    fontWeight: 'normal',
    fontStyle: 'normal'
  },

  '@font-face': Typeface,

  img: {
    width: '100%'
  },

  svg: {
    width: '100%'
  },

  body: {
    padding: 0,
    margin: 0,
    lineHeight: 1,
    fontSize: '1rem',
    background: '$white50',
    color: '$textPrimary',
    webkitFontSmoothing: 'antialiased',
    mozFontSmoothing: 'none',
    fontSmoothing: 'antialiased'
  },

  a: { 
    textDecoration: 'none',
    color: '$textLink'
  },

  strong: { fontFamily: 'Labil-Medium' }, 

  button: { cursor: 'pointer' },

  p: { margin: 0 },

  'fieldset, ul, figure, button, h1, h2, h3, h4, h5, h6': {
    border: 'none',
    padding: 0,
    margin: 0,
    appearance: 'none',
    background: 'none'
  }
}
