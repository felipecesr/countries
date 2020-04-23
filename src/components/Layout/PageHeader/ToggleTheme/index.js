import React from 'react';
import { applySetting, toggleSetting } from '../../../../lib/toggle-theme';
import * as S from './styled';

const ToggleTheme = () => {
  const handleClick = () => applySetting(toggleSetting());

  return (
    <S.ButtonThemeWrapper onClick={handleClick}>
      <S.ButtonThemeIcon />
      Dark mode
    </S.ButtonThemeWrapper>
  );
};

export default ToggleTheme;
