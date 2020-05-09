import React from 'react';
import * as S from './styled';

import PageHeader from './PageHeader';

const Layout = ({ children }) => (
  <>
    <PageHeader />
    <S.LayoutWrapper>{children}</S.LayoutWrapper>
  </>
);

export default Layout;
