"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label={`${profile.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">AT</span>
          <span className="brand-name">Abenezer Teshome</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`navigation${open ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map(([label, section]) => (
            <Link
              key={section}
              href={pathname === "/" ? `#${section}` : `/#${section}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link className="nav-cv" href="/cv" onClick={() => setOpen(false)}>
            <ArrowDownToLine size={15} strokeWidth={2} />
            CV
          </Link>
        </nav>
      </div>
    </header>
  );
}
