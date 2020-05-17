import * as React from 'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  ${(props) => props?.theme?.button?.primary}
`

const SecondaryButton = styled.button`
  ${(props) => props?.theme?.button?.secondary}
`

const Button: React.FC<{ type?: 'primary' | 'secondary' }> = ({ type, children }) => {
  switch (type) {
    case 'primary':
      return <PrimaryButton>{children}</PrimaryButton>
    case 'secondary':
      return <SecondaryButton>{children}</SecondaryButton>
    default:
      return <button>{children}</button>
  }
}

export default Button
