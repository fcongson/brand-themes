import { shallow } from 'enzyme'
import * as React from 'react'
import Button from './Button'

describe('Button', () => {
  it('Renders', () => {
    const button = shallow(<Button />)
    expect(button).toMatchSnapshot()
  })
})
