"use client";
import { useState } from "react";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkTheme, setDarkTheme] = useState(false);
  const switchTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <html lang="en" className={`${darkTheme ? "dark-theme" : "light-theme"}`}>
      { /* Note: head is added automatically with specified metadata */ }
      <body className={`${menuOpen ? "no-scroll" : ""}`}>
        <Navigation
          isOpen={menuOpen}
          toggleMenu={toggleMenu}
          darkTheme={darkTheme}
          switchTheme={switchTheme}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
