import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Montserrat:700'],
  },
})

const color = {
  primary: '#1db954',
  secondary: 'transparent',
  white: '#ffffff',
  black: '#000000',
}

const button = {
  primary: {
    backgroundColor: color.primary,
    height: '48px',
    width: '214px',
    borderRadius: '500px',
    border: 'none',
    color: color.white,
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: 'pointer',
    hover: `
      transform: scale(1.04);
      background-color: #1ed760;
    `,
    active: `
      transform: scale(1);
      background-color: #14833b;
    `,
    transition: 'all 33ms',
  },
  secondary: {
    backgroundColor: color.secondary,
    height: '48px',
    width: '214px',
    borderRadius: '500px',
    border: `2px solid ${color.black}`,
    color: color.black,
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 700,
    textTransform: 'uppercase',
    cursor: 'pointer',
    hover: `
      transform: scale(1.04);
    `,
    active: `
      transform: scale(1);
    `,
    transition: 'all 33ms',
  },
}

const theme = {
  button,
}

export default theme
