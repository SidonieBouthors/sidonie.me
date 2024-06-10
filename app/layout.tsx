"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.scss";
import "@modules/react-grid-layout/css/styles.css";
import "@modules/react-resizable/css/styles.css";

import Navigation from "@components/Navigation";
import { useState } from "react";
import favicon from "@public/favicon.ico";
import Footer from "@components/Footer";

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

        <link rel="shortcut icon" href={favicon.src} />
      </head>
      <body className={`${inter.className} ${menuOpen ? "no-scroll" : ""}`}>
        <Navigation isOpen={menuOpen} toggleMenu={toggleMenu} />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
