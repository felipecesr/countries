import { createGlobalStyle } from 'styled-components';
import { themes } from './themes';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  ul,
  ol,
  figure,
  p {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--color-background);
    font-family: 'Nunito Sans', sans-serif;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  ${themes}
`;

export default GlobalStyles;
