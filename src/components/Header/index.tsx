import React from "react";
import Link from "next/link";
import { useDarkMode } from "./useDarkMode";
import * as S from "./styled";

import Toggle from "./Toggle";

const PageHeader = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <S.PageHeaderWrapper>
      <S.PageHeaderTitle>
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </S.PageHeaderTitle>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </S.PageHeaderWrapper>
  );
};

export default PageHeader;
