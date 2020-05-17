import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import airbnb from '../../themes/airbnb'
import figma from '../../themes/figma'
import spotify from '../../themes/spotify'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => {
  return <Button>Default</Button>
}

export const DefaultPrimary = () => {
  return <Button type='primary'>Default primary</Button>
}

export const DefaultSecondary = () => {
  return <Button type='secondary'>Default secondary</Button>
}

export const AirbnbPrimary = () => {
  return (
    <ThemeProvider theme={airbnb}>
      <Button type='primary'>Airbnb primary</Button>
    </ThemeProvider>
  )
}

export const AirbnbSecondary = () => {
  return (
    <ThemeProvider theme={airbnb}>
      <Button type='secondary'>Airbnb secondary</Button>
    </ThemeProvider>
  )
}

export const FigmaPrimary = () => {
  return (
    <ThemeProvider theme={figma}>
      <Button type='primary'>Figma primary</Button>
    </ThemeProvider>
  )
}

export const FigmaSecondary = () => {
  return (
    <ThemeProvider theme={figma}>
      <Button type='secondary'>Figma secondary</Button>
    </ThemeProvider>
  )
}

export const SpotifyPrimary = () => {
  return (
    <ThemeProvider theme={spotify}>
      <Button type='primary'>Spotify primary</Button>
    </ThemeProvider>
  )
}

export const SpotifySecondary = () => {
  return (
    <ThemeProvider theme={spotify}>
      <Button type='secondary'>Spotify secondary</Button>
    </ThemeProvider>
  )
}
