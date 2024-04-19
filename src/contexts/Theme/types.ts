export type ThemeContextProps = {
  colors: {
    background: string;
    tabBackground: string;
    tabIcon: string;
    text: string;
    primary: string;
    secondary: string;
    white: string;
    black: string;
    gray: string;
    lightGray: string;
  };
  spacing: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    xxxlarge: number;
  };
  toggleTheme: () => void;
};