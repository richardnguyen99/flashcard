import "@/styles/globals.css";

import * as React from "react";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import type { Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import ClientProviders from "./_components/providers";
import { getServerAuthSession } from "@/server/auth";
import Navbar from "./_components/navbar";

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

const RootLayout: React.FC<Props> = async ({ children }) => {
  const session = await getServerAuthSession();

  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} bg-slate-100 dark:bg-slate-950`}
      >
        <React.Suspense fallback={null}>
          <TRPCReactProvider headers={headers()}>
            <ClientProviders user={session?.user}>
              <Navbar />
              <main className="mt-20">{children}</main>
            </ClientProviders>
          </TRPCReactProvider>
        </React.Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
