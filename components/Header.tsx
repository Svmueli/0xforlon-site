import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav-links">
          <Link href="/">Index</Link>
          <Link href="/#writeups">Writeups</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}