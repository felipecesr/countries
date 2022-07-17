import React from "react";
import * as S from "./styled";
import { useDarkMode } from "./useDarkMode";
import { Moon as MoonSolid } from "styled-icons/fa-solid";
import { Moon as MoonRegular } from "styled-icons/fa-regular";

const ToggleTheme = () => {
  const [theme, themeToggler] = useDarkMode();
  return (
    <S.ButtonThemeWrapper
      onClick={themeToggler}
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? (
        <S.ButtonThemeIcon as={MoonRegular} />
      ) : (
        <S.ButtonThemeIcon as={MoonSolid} />
      )}
      Dark mode
    </S.ButtonThemeWrapper>
  );
};

export default ToggleTheme;
