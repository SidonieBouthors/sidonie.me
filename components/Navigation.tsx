"use client";
import NavBar from "@components/NavBar";
import NavMenu from "@components/NavMenu";

export default function Navigation({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <>
      <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
      <NavMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
