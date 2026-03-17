import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InboxHero — Clean your Gmail inbox faster",
  description:
    "InboxHero is a Chrome extension that helps you review, organize, and clean unwanted emails directly inside Gmail with a simple and safe workflow.",
  keywords: [
    "Gmail cleanup",
    "inbox management",
    "Chrome extension",
    "email organizer",
    "inbox zero",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased selection:bg-blue-100`}>
        {children}
      </body>
    </html>
  );
}
