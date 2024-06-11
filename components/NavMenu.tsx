import { useState } from "react";
import Link from "next/link";
import "@styles/navigation.scss";

export default function NavMenu({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className={`nav-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link href="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link href="/share" onClick={toggleMenu}>Share</Link>
        </li>
        <li>
          <Link href="/recipes" onClick={toggleMenu}>Recipes</Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleMenu}>About</Link>
        </li>
      </ul>
    </div>
  );
}
