# brand-themes

Brand themes for [styled components](https://styled-components.com/docs/advanced#theming) using [styled system](https://styled-system.com/).

## Concept

This project is a proof of concept for building a set of themeable reusable React Components allowing for support of different brand designs.

View the [Storybook](https://brand-themes.netlify.app/?path=/docs/button--default).

## Components

The component provides sensible defaults that can be overridden based on theme objects that follow the [System System](https://styled-system.com/) [Theme Specification](https://styled-system.com/theme-specification).

Button Component

```js
const Button =
  styled.button <
  ButtonStyleProps >
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
```

## Themes

The theme objects follow the [System System](https://styled-system.com/) [Theme Specification](https://styled-system.com/theme-specification).

Brand Theme

```js
const buttons = {
  primary: {
    backgroundColor: color.primary,
    height: '42px',
    width: '302px',
    borderRadius: '8px',
    border: `3px solid ${color.primary}`,
    color: color.white,
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(1px)',
    },
    transition: 'transform 200ms,background 200ms',
  },
}
```
