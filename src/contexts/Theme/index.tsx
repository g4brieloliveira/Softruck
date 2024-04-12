import React, { createContext, useState } from "react";
import { theme } from "../../utils";
import { ThemeContextProps } from "./types";

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState(theme.colors.dark);
  const spacing = theme.spacing;

  const toggleTheme = () => {
    setColors(
      colors === theme.colors.dark ? theme.colors.light : theme.colors.dark
    );
  };

  return (
    <ThemeContext.Provider value={{ colors, spacing, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
