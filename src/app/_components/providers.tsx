"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const ClientProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
    >
      {children}
    </NextThemesProvider>
  );
};

export default ClientProviders;
