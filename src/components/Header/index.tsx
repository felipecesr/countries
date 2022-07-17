import React from "react";
import Link from "next/link";
import * as S from "./styled";
import ToggleTheme from "./ToggleTheme";

const PageHeader = () => (
  <S.PageHeaderWrapper>
    <S.PageHeaderTitle>
      <Link href="/" passHref>
        <S.Logo>Where in the world?</S.Logo>
      </Link>
    </S.PageHeaderTitle>
    <ToggleTheme />
  </S.PageHeaderWrapper>
);

export default PageHeader;
