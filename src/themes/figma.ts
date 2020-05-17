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

const button = {
  primary: `
  background-color: ${color.primary};
  height: 42px;
  width: 302px;
  border-radius: 8px;
  border: 3px solid ${color.primary};
  color: ${color.white};
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
  }
  transition: transform 200ms,background 200ms;
  `,
  secondary: `
  background-color: ${color.secondary};
  height: 42px;
  width: 302px;
  border-radius: 8px;
  border: 3px solid ${color.primary};
  color: ${color.black};
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
  }
  transition: transform 200ms,background 200ms;
  `,
}

const theme = {
  button,
}

export default theme
