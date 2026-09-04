import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rafael Vieira | Backend Developer & Pesquisador",
  description:
    "Graduando em Sistemas de Informação (UFBA). Construindo arquiteturas backend escaláveis com NestJS e TypeScript, e pesquisando qualidade de software no Aries Lab (CNPq PIBIC).",
  keywords: [
    "Rafael Vieira",
    "Backend Developer",
    "Engenharia de Software",
    "NestJS",
    "TypeScript",
    "Prisma",
    "Docker",
    "UFBA",
    "Aries Lab",
    "Test Smells",
    "AriesLinter",
    "SBES 2025",
  ],
  authors: [{ name: "Rafael Vieira", url: "https://github.com/viRafael" }],
  creator: "Rafael Vieira",
  openGraph: {
    title: "Rafael Vieira | Backend Developer & Pesquisador",
    description:
      "Graduando em Sistemas de Informação (UFBA), construindo APIs robustas com NestJS/TypeScript e pesquisando qualidade de software.",
    url: "https://rafaelvieira.dev",
    siteName: "Rafael Vieira Portfolio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Vieira | Backend Developer & Pesquisador",
    description:
      "Graduando em Sistemas de Informação (UFBA), construindo APIs robustas e pesquisando qualidade de software.",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-background text-on-background antialiased selection:bg-primary selection:text-on-primary">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
