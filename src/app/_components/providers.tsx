"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { User } from "next-auth";

import LoginModalProvider from "./login/provider";

interface Props {
  user?: User;
}

const ClientProviders: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  user,
}) => {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      enableColorScheme
      forcedTheme={user ? undefined : "dark"}
    >
      <LoginModalProvider>{children}</LoginModalProvider>
    </NextThemesProvider>
  );
};

export default ClientProviders;
