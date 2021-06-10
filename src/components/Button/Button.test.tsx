import { shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'
import airbnb from '../../themes/airbnb'
import figma from '../../themes/figma'
import spotify from '../../themes/spotify'
import Button from './Button'

describe('Button', () => {
  it('Renders', () => {
    const button = shallow(<Button>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders primary', () => {
    const button = shallow(<Button variant='primary'>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders secondary', () => {
    const button = shallow(<Button variant='secondary'>Text</Button>)
    expect(button).toMatchSnapshot()
  })
  it('Renders airbnb primary', () => {
    const button = shallow(
      <ThemeProvider theme={airbnb}>
        <Button variant='primary'>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders airbnb secondary', () => {
    const button = shallow(
      <ThemeProvider theme={airbnb}>
        <Button variant='secondary'>Text</Button>
      </ThemeProvider>
    )
  })
  it('Renders figma primary', () => {
    const button = shallow(
      <ThemeProvider theme={figma}>
        <Button variant='primary'>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders figma secondary', () => {
    const button = shallow(
      <ThemeProvider theme={figma}>
        <Button variant='secondary'>Text</Button>
      </ThemeProvider>
    )
  })
  it('Renders spotify primary', () => {
    const button = shallow(
      <ThemeProvider theme={spotify}>
        <Button variant='primary'>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
  it('Renders spotify secondary', () => {
    const button = shallow(
      <ThemeProvider theme={spotify}>
        <Button variant='secondary'>Text</Button>
      </ThemeProvider>
    )
    expect(button).toMatchSnapshot()
  })
})
