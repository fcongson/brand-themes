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
  primary: `
  background-color: ${color.primary};
  height: 48px;
  width: 214px;
  border-radius: 500px;
  border: none;
  color: ${color.white};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
    background-color: #1ed760;
  }
  &:active {
    transform: scale(1);
    background-color: #14833b;
  }
  transition: all 33ms;
  `,
  secondary: `
  background-color: ${color.secondary};
  height: 48px;
  width: 214px;
  border-radius: 500px;
  border: 2px solid ${color.black};
  color: ${color.black};
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
  &:active {
    transform: scale(1);
  }
  transition: all 33ms;
  `,
}

const theme = {
  button,
}

export default theme
