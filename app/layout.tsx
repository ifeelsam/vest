import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vest",
  description: "a notes app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/public/dark.svg",
        href: "/public/dark.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/public/dark.svg",
        href: "/public/dark.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
