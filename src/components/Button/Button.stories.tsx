import * as React from 'react'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../themes/default'
import airbnb from '../../themes/airbnb'
import figma from '../../themes/figma'
import spotify from '../../themes/spotify'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => {
  return <Button>Default</Button>
}

export const DefaultPrimary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='primary'>Default primary</Button>
    </ThemeProvider>
  )
}

export const DefaultSecondary = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button variant='secondary'>Default secondary</Button>
    </ThemeProvider>
  )
}

// export const AirbnbPrimary = () => {
//   return (
//     <ThemeProvider theme={airbnb}>
//       <Button type='primary'>Airbnb primary</Button>
//     </ThemeProvider>
//   )
// }

// export const AirbnbSecondary = () => {
//   return (
//     <ThemeProvider theme={airbnb}>
//       <Button type='secondary'>Airbnb secondary</Button>
//     </ThemeProvider>
//   )
// }

// export const FigmaPrimary = () => {
//   return (
//     <ThemeProvider theme={figma}>
//       <Button type='primary'>Figma primary</Button>
//     </ThemeProvider>
//   )
// }

// export const FigmaSecondary = () => {
//   return (
//     <ThemeProvider theme={figma}>
//       <Button type='secondary'>Figma secondary</Button>
//     </ThemeProvider>
//   )
// }

// export const SpotifyPrimary = () => {
//   return (
//     <ThemeProvider theme={spotify}>
//       <Button type='primary'>Spotify primary</Button>
//     </ThemeProvider>
//   )
// }

// export const SpotifySecondary = () => {
//   return (
//     <ThemeProvider theme={spotify}>
//       <Button type='secondary'>Spotify secondary</Button>
//     </ThemeProvider>
//   )
// }
