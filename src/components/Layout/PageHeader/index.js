import React from 'react';
import * as S from './styled';
import { useDarkMode } from '../../../hooks/useDarkMode';

import Toggle from './Toggle';

const PageHeader = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <S.PageHeaderWrapper>
      <S.PageHeaderTitle>
        <a href="/">Where in the world?</a>
      </S.PageHeaderTitle>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </S.PageHeaderWrapper>
  );
};

export default PageHeader;
