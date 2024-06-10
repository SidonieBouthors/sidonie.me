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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/share">Share</Link>
        </li>
        <li>
          <Link href="/recipes">Recipes</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
