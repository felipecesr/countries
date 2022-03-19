import React from 'react';
import * as S from './styled';

import PageHeader from './PageHeader';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <PageHeader />
    <S.LayoutWrapper>{children}</S.LayoutWrapper>
  </>
);

export default Layout;
