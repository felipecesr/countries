import { useState, useEffect, useCallback } from "react";

export const useDarkMode = (): [string, (event: React.MouseEvent) => void] => {
  const [theme, setTheme] = useState("");

  const getCSSCustomProp = (propKey: string) => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(
      propKey
    );

    if (response.length) {
      response = response.replace(/"/g, "").trim();
    }

    return response;
  };

  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = useCallback(() => {
    switch (theme) {
      case "light":
        setMode("dark");
        break;
      case "dark":
        setMode("light");
        break;
      default:
        getCSSCustomProp("--color-mode") === "light"
          ? setMode("dark")
          : setMode("light");
        break;
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");

    if (localTheme) {
      document.documentElement.setAttribute("data-theme", localTheme);
      setTheme(localTheme);
    }
  }, [theme, themeToggler]);

  return [theme, themeToggler];
};
