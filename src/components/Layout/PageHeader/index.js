import React from 'react';
import * as S from './styled';

import ToggleTheme from './ToggleTheme';

const PageHeader = () => (
  <S.PageHeaderWrapper>
    <S.PageHeaderTitle>
      <a href="/">Where in the world?</a>
    </S.PageHeaderTitle>
    <ToggleTheme />
  </S.PageHeaderWrapper>
);

export default PageHeader;
