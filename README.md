# brand-themes

Brand themes for [styled components](https://styled-components.com/docs/advanced#theming).

## Concept

This project is a proof of concept for building a set of themable reusable React Components allowing for support of different brand designs.

## Components

The component uses each property from the theme.

Button Component

```js
const PrimaryButton = styled.button`
  ${(props) => props?.theme?.button?.primary}
`
```

## Themes

The theme provides each property of the component.

Brand Theme

```js
const button = {
  primary: `
  background-color: ${color.primary};
  height: 42px;
  width: 302px;
  border-radius: 8px;
  border: 3px solid ${color.primary};
  color: ${color.white};
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  text-transform: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(1px);
  }
  transition: transform 200ms,background 200ms;
  `,
}
```
