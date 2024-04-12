import { ThemeProvider } from "./Theme";

export default function Contexts({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
