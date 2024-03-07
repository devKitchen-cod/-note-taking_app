// 'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { useRef } from "react";
import { store, AppStore } from "../lib/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note-Taking App",
  description:
    "Create a Simple Note-Taking App using Next.js, React.js, Tailwind CSS, and AI API Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore |  null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
  }
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={storeRef.current}>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
