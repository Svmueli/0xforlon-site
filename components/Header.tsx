import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/#top" className="brand">
        guest<span className="dim">@</span>0xforlon<span className="dim">:~$</span>
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <Link href="/#writeups">
          <span className="dim">--</span>writeups
        </Link>
        <Link href="/#projects">
          <span className="dim">--</span>projects
        </Link>
        <Link href="/#about">
          <span className="dim">--</span>about
        </Link>
        <Link href="/#contact" className="nav-cta">
          <span className="dim">--</span>contact
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
