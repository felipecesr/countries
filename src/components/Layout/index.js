import React, { useEffect } from 'react';
import { applySetting } from '../../lib/toggle-theme';
import * as S from './styled';

import PageHeader from './PageHeader';

const Layout = ({ children }) => {
  useEffect(() => {
    applySetting();
  }, []);

  return (
    <>
      <PageHeader />
      <S.LayoutWrapper>{children}</S.LayoutWrapper>
    </>
  );
};

export default Layout;
