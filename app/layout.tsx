import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bosco vivant — Le Tourbillon",
  description: "Prototype interactif de Bosco, vieux marin météo de Jullouville.",
  other: {
    "codex-preview": "development",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/assets/bosco/master.webp",
    shortcut: "/assets/bosco/master.webp",
    apple: "/assets/bosco/master.webp",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Bosco",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#101720",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
