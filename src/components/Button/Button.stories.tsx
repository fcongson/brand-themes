import { ThemeProvider } from 'styled-components'
import airbnb from '../../themes/airbnb'
import figma from '../../themes/figma'
import spotify from '../../themes/spotify'
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const AirbnbPrimary = () => {
  return (
    <ThemeProvider theme={airbnb}>
      <Button primary>Airbnb primary</Button>
    </ThemeProvider>
  )
}

export const AirbnbSecondary = () => {
  return (
    <ThemeProvider theme={airbnb}>
      <Button>Airbnb secondary</Button>
    </ThemeProvider>
  )
}

export const FigmaPrimary = () => {
  return (
    <ThemeProvider theme={figma}>
      <Button primary>Figma primary</Button>
    </ThemeProvider>
  )
}

export const FigmaSecondary = () => {
  return (
    <ThemeProvider theme={figma}>
      <Button>Figma secondary</Button>
    </ThemeProvider>
  )
}

export const SpotifyPrimary = () => {
  return (
    <ThemeProvider theme={spotify}>
      <Button primary>Spotify primary</Button>
    </ThemeProvider>
  )
}

export const SpotifySecondary = () => {
  return (
    <ThemeProvider theme={spotify}>
      <Button>Spotify secondary</Button>
    </ThemeProvider>
  )
}
