const modifiers = {
  darkColors: () => `
    --color-elements: var(--dark-blue);
    --color-background: var(--very-dark-blue);
    --color-text: var(--white);
  `,
};

export const themes = `
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

    &[data-theme='dark'] {
      ${modifiers.darkColors()}
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --color-mode: 'dark';

      &:not([data-theme]) {
        ${modifiers.darkColors()}
      }
    }
  }
`;
