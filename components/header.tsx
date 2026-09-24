"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [["Work", "#work"], ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export function Header({ inner = false }: { inner?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const href = (hash: string) => inner ? `/${hash}` : hash;
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Nishant Sharma home"><span>NS</span><b>Nishant Sharma</b></Link>
        <div className="desktop-nav">{links.map(([label, hash]) => <Link key={label} href={href(hash)}>{label}</Link>)}</div>
        <div className="nav-actions"><ThemeToggle /><Link className="button button-small" href={href("#contact")}>Let&apos;s talk <span>↗</span></Link><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div>
      </nav>
      {open && <div className="mobile-menu">{links.map(([label, hash], i) => <Link onClick={() => setOpen(false)} key={label} href={href(hash)}><span>0{i + 1}</span>{label}</Link>)}<Link className="mobile-cta" href={href("#contact")}>Start a conversation ↗</Link></div>}
    </header>
  );
}
