# brand-themes

Brand themes for [styled components](https://styled-components.com/docs/advanced#theming).

## Concept

This project is a proof of concept for building a set of themable reusable React Components allowing for support of different brand designs.

## Components

The component uses each property from the theme.

Button Component

```js
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
    `
  }}
`
```

## Themes

The theme provides each property of the component.

Brand Theme

```js
const button = {
  primary: {
    backgroundColor: color.primary,
    height: '42px',
    width: '302px',
    borderRadius: '8px',
    border: `3px solid ${color.primary}`,
    color: color.white,
  },
}
```
