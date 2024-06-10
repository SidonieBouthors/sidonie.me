"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.scss";

import Navigation from "@components/Navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} ${menuOpen ? "no-scroll" : ""}`}>
        <Navigation isOpen={menuOpen} toggleMenu={toggleMenu} />
        {children}
      </body>
    </html>
  );
}
