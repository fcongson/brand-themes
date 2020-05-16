import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Montserrat:700'],
  },
})

const color = {
  primary: '#008489',
  secondary: '#ffffff',
  white: '#ffffff',
}

const button = {
  primary: {
    backgroundColor: color.primary,
    height: '44px',
    width: '183px',
    borderRadius: '8px',
    border: `1px solid ${color.primary}`,
    color: color.white,
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer'
  },
  secondary: {
    backgroundColor: color.secondary,
    height: '44px',
    width: '183px',
    borderRadius: '8px',
    border: `1px solid ${color.primary}`,
    color: color.primary,
    fontFamily: 'Montserrat',
    fontSize: '12px',
    fontWeight: 700,
    cursor: 'pointer'
  },
}

const theme = {
  button,
}

export default theme
