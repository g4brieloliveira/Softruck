export type ThemeContextProps = {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
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