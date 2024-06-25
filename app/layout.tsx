"use client";
import type { Metadata } from "next";
import "@styles/style.scss";
import "@modules/react-grid-layout/css/styles.css";
import "@modules/react-resizable/css/styles.css";

import Navigation from "@components/Navigation";
import { useState } from "react";
import favicon from "@public/favicon.ico";
import Footer from "@components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkTheme, setDarkTheme] = useState(false);
  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  }
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <html lang="en" className={`${darkTheme? "dark-theme" : "light-theme"}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href={favicon.src} />
      </head>
      <body className={`${menuOpen ? "no-scroll" : ""}`}>
        <Navigation isOpen={menuOpen} toggleMenu={toggleMenu} darkTheme={darkTheme} switchTheme={switchTheme}/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
