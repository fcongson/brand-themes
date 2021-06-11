/**
 * @jest-environment jsdom
 */

import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import airbnb from '../../themes/airbnb'
import figma from '../../themes/figma'
import spotify from '../../themes/spotify'
import { Button } from './Button'

describe('Button', () => {
  it('Renders', () => {
    const button = shallow(<Button>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders primary', () => {
    const button = shallow(<Button primary>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders secondary', () => {
    const button = shallow(<Button>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders airbnb primary', () => {
    const button = shallow(
      <ThemeProvider theme={airbnb}>
        <Button primary>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders airbnb secondary', () => {
    const button = shallow(
      <ThemeProvider theme={airbnb}>
        <Button>Text</Button>
      </ThemeProvider>
    )
  })
  it('Renders figma primary', () => {
    const button = shallow(
      <ThemeProvider theme={figma}>
        <Button primary>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders figma secondary', () => {
    const button = shallow(
      <ThemeProvider theme={figma}>
        <Button>Text</Button>
      </ThemeProvider>
    )
  })
  it('Renders spotify primary', () => {
    const button = shallow(
      <ThemeProvider theme={spotify}>
        <Button primary>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders spotify secondary', () => {
    const button = shallow(
      <ThemeProvider theme={spotify}>
        <Button>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
})
