import styled from 'styled-components'
import { ButtonStyleProps, variant } from 'styled-system'

export interface ButtonProps {
  /**
   * Choose between the primary and secondary variants
   */
  primary?: boolean
}

const StyledButton = styled.button<ButtonStyleProps>(
  variant({
    scale: 'buttons',
  })
)

export const Button: React.FunctionComponent<ButtonProps> = ({ children, primary = false }) => (
  <StyledButton variant={primary ? 'primary' : 'secondary'}>{children}</StyledButton>
)
