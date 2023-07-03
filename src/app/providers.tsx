"use client";

import { ThemeProvider } from "next-themes";

/**
 * @see https://github.com/pacocoursey/next-themes#with-app
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  );
}
