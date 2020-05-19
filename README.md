# brand-themes

Brand themes for [styled components](https://styled-components.com/docs/advanced#theming).

## Concept

This project is a proof of concept for building a set of themable reusable React Components allowing for support of different brand designs.

## Components

The component provides sensible defaults that can be overriden based on design tokens while also allowing an `override` property to supply any css to the component.

Button Component

```js
const PrimaryButton = styled.button`
  ${({ theme }) => {
    if (!theme) return
    const primary = theme?.button?.primary
    return `
      // defaults using tokens
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

      // css
      ${primary?.override}
    `
  }}
`
```

## Themes

The theme can provide a value to each token and css to the `override` property.

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
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    override: `
      &:hover {
        transform: translateY(-2px);
      }
      &:active {
        transform: translateY(1px);
      }
      transition: transform 200ms,background 200ms;
    `,
  },
}
```
