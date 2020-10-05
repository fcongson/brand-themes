import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Lato:700'],
  },
})

const color = {
  primary: '#000000',
  secondary: '#ffffff',
  white: '#ffffff',
  black: '#000000',
}

const buttons = {
  primary: {
    backgroundColor: color.primary,
    height: '42px',
    width: '302px',
    borderRadius: '8px',
    border: `3px solid ${color.primary}`,
    color: color.white,
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
    transition: 'transform 200ms,background 200ms',
  },
  secondary: {
    backgroundColor: color.secondary,
    height: '42px',
    width: '302px',
    borderRadius: '8px',
    border: `3px solid ${color.primary}`,
    color: color.black,
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    '&:hover ': {
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: ' translateY(1px)',
    },
    transition: 'transform 200ms,background 200ms',
  },
}

const theme = {
  buttons,
}

export default theme
