import { createGlobalStyle } from "styled-components";
import { themes } from 'styles/themes';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
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

  html, body, div, input, button, select, option, p, text {
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  ol,
  ul {
    list-style: none;
  }

  ${themes}
`;

export default GlobalStyles;
