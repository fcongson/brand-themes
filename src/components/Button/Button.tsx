import * as React from 'react'
import styled from 'styled-components'

const PrimaryButton = styled.button`
  ${({ theme }) => {
    if (!theme) return
    const primary = theme?.button?.primary
    return `
      background-color: ${primary?.backgroundColor};
      height: ${primary?.height};
      width: ${primary?.width};
      border-radius: ${primary?.borderRadius};
      border: ${primary?.border};
      color: ${primary?.color};
      font-family: ${primary?.fontFamily ?? 'sans-serif'};
      font-size: ${primary?.fontSize};
      font-weight: ${primary?.fontWeight};
      text-transform: ${primary?.textTransform};
      cursor: ${primary?.cursor};
      &:hover {
        ${primary?.hover}
      }
      &:active {
        ${primary?.active}
      }
      transition: ${primary?.transition};
    `
  }}
`

const SecondaryButton = styled.button`
  ${({ theme }) => {
    if (!theme) return
    const secondary = theme?.button?.secondary
    return `
      background-color: ${secondary?.backgroundColor};
      height: ${secondary?.height};
      width: ${secondary?.width};
      border-radius: ${secondary?.borderRadius};
      border: ${secondary?.border};
      color: ${secondary?.color};
      font-family: ${secondary?.fontFamily ?? 'sans-serif'};
      font-size: ${secondary?.fontSize};
      font-weight: ${secondary?.fontWeight};
      text-transform: ${secondary?.textTransform};
      cursor: ${secondary?.cursor};
      &:hover {
        ${secondary?.hover}
      }
      &:active {
        ${secondary?.active}
      }
      transition: ${secondary?.transition};
    `
  }}
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
