import React from 'react';
import * as S from './styled';

import { Moon as MoonSolid } from 'styled-icons/fa-solid';
import { Moon as MoonRegular } from 'styled-icons/fa-regular';

type Props = {
  theme: string;
  toggleTheme: (event: React.MouseEvent) => void;
};

const Toggle = ({ theme, toggleTheme }: Props) => (
  <S.ButtonThemeWrapper onClick={toggleTheme} aria-pressed={theme === 'dark'}>
    {theme === 'light' ? (
      <S.ButtonThemeIcon as={MoonRegular} />
    ) : (
      <S.ButtonThemeIcon as={MoonSolid} />
    )}
    Dark mode
  </S.ButtonThemeWrapper>
);

export default Toggle;
