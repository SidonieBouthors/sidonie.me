"use client";
import NavBar from "@components/NavBar";
import NavMenu from "@components/NavMenu";

export default function Navigation({
  isOpen,
  toggleMenu,
  darkTheme,
  switchTheme
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  darkTheme: boolean;
  switchTheme: () => void;
}) {
  return (
    <>
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu} darkTheme={darkTheme} switchTheme={switchTheme}/>
      <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} darkTheme={darkTheme} switchTheme={switchTheme}/>
    </>
  );
}
