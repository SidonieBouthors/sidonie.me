import Link from "next/link";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export default function NavMenu({
  isOpen,
  toggleMenu,
  darkTheme,
  switchTheme,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  darkTheme: boolean;
  switchTheme: () => void;
}) {
  var ThemeSwitchIcon = darkTheme ? MoonIcon : SunIcon;
  return (
    <div className={`nav-menu ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/share" onClick={toggleMenu}>
            Share
          </Link>
        </li>
        <li>
          <Link href="/recipes" onClick={toggleMenu}>
            Recipes
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <button aria-label="Switch Theme" className="icon-toggle theme-toggle" onClick={switchTheme}>
            <ThemeSwitchIcon />
          </button>
        </li>
      </ul>
    </div>
  );
}
