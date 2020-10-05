import styled from 'styled-components'
import { ButtonStyleProps, variant } from 'styled-system'

const Button = styled.button<ButtonStyleProps>(
  variant({
    scale: 'buttons',
  })
)

export default Button
