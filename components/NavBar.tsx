import Link from "next/link";
import logo from "@public/logo.svg";
import CloseIcon from "@components/icons/CloseIcon";
import MenuIcon from "@components/icons/MenuIcon";
import "@styles/navigation.scss";

export default function NavBar({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  var Icon = isOpen ? CloseIcon : MenuIcon;
  var alt = isOpen ? "Close" : "Menu";

  return (
    <header className="nav-bar">
      <div className="logo">
        <img src={logo.src}></img>
      </div>
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
        </ul>
      </nav>
      <button
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <Icon />
      </button>
    </header>
  );
}
