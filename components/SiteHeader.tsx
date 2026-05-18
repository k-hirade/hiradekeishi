"use client";

import { useState } from "react";
import { navigationItems, profile } from "@/lib/portfolio";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            KH
          </span>
          <span>{profile.name}</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={isOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
