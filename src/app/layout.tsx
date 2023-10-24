import "@/styles/globals.css";

import * as React from "react";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import type { Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import ClientProviders from "./_components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL_BASE ?? "http://localhost:3000"),
  title: "Flashcard",
  description: "A simple NextJS app for studying flashcards",
  icons: [
    {
      rel: "icon",
      url: "/t3-light.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: "/t3-dark.svg",
      media: "(prefers-color-scheme: dark)",
    },
  ],

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Flashcard",
    description: "A flashcard app",
    url: process.env.URL_BASE ?? "http://localhost:3000",
    images: [
      {
        url: "/t3-light.svg",
        alt: "Flashcard Favicon",
      },
    ],
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} bg-slate-200 dark:bg-slate-950`}
      >
        <TRPCReactProvider headers={headers()}>
          <ClientProviders>{children}</ClientProviders>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default RootLayout;
