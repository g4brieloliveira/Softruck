import { CourseProvider } from "./Course";
import { IconProvider } from "./Icon";
import { ThemeProvider } from "./Theme";

export default function Contexts({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CourseProvider>
        <IconProvider>{children}</IconProvider>
      </CourseProvider>
    </ThemeProvider>
  );
}
