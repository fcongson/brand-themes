import styled from 'styled-components'
import { ButtonStyleProps, variant } from 'styled-system'

const Button = styled.button<ButtonStyleProps>(
  variant({
    scale: 'buttons',
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    },
  })
)

export default Button
