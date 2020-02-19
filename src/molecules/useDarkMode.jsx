import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  // executing toggleTheme changes the theme to the opposite of it's current
  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      window.localStorage.setItem("theme", "light");
    }
  }, []);

  return [theme, toggleTheme];
};
