import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  :root {
    --dark-blue: hsl(209, 23%, 22%);
    --very-dark-blue: hsl(207, 26%, 17%);
    --dark-gray: hsl(0, 0%, 52%);
    --very-light-gray: hsl(0, 0%, 98%);
    --black: hsl(200, 15%, 8%);
    --white: hsl(0, 0%, 100%);
    --color-mode: 'light';
    --color-elements: var(--white);
    --color-background: var(--very-light-gray);
    --color-text: var(--black);

    &[data-user-color-scheme='dark'] {
      --color-elements: var(--dark-blue);
      --color-background: var(--very-dark-blue);
      --color-text: var(--white);
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-mode: 'dark';

      &:not([data-user-color-scheme]) {
        --color-elements: var(--dark-blue);
        --color-background: var(--very-dark-blue);
        --color-text: var(--white);
      }
    }
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
`;

export default GlobalStyles;
