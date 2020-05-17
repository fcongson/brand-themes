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
  primary: `
  background-color: ${color.primary};
  height: 44px;
  width: 183px;
  border-radius: 8px;
  border: 1px solid ${color.primary};
  color: ${color.white};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  `,
  secondary: `
  background-color: ${color.secondary};
  height: 44px;
  width: 183px;
  border-radius: 8px;
  border: 1px solid ${color.primary};
  color: ${color.primary};
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  `,
}

const theme = {
  button,
}

export default theme
