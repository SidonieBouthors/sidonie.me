import Link from "next/link";
import logo from "@public/logo.svg";
import CloseIcon from "@components/icons/CloseIcon";
import MenuIcon from "@components/icons/MenuIcon";
import { SunIcon } from "@components/icons/SunIcon";
import { MoonIcon } from "@components/icons/MoonIcon";

export default function NavBar({
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
  var MenuSwitchIcon = isOpen ? CloseIcon : MenuIcon;
  var alt = isOpen ? "Close" : "Menu";

  var ThemeSwitchIcon = darkTheme ? MoonIcon : SunIcon;

  return (
    <header className="nav-bar">
      <Link href="/" onClick={isOpen ? toggleMenu : () => {}}>
        <img src={logo.src} className="logo" alt="logo"/>
      </Link>
      <nav className="nav-bar-links">
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
          <li>
            <button aria-label="Switch Theme" className="icon-toggle theme-toggle" onClick={switchTheme}>
              <ThemeSwitchIcon />
            </button>
          </li>
        </ul>
      </nav>
      <button aria-label="Toggle Menu"
        className={`icon-toggle menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <MenuSwitchIcon />
      </button>
    </header>
  );
}
