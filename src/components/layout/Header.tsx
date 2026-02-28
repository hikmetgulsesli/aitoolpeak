import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="header-logo">
          AIToolPeak
        </a>

        <nav className={`header-nav ${mobileMenuOpen ? "header-nav-open" : ""}`}>
          <a href="/" className="header-nav-link">Home</a>
          <a href="/blog" className="header-nav-link">Blog</a>
          <a href="/categories" className="header-nav-link">Categories</a>
          <a href="/about" className="header-nav-link">About</a>
          <a href="/contact" className="header-nav-link">Contact</a>
        </nav>

        <button
          className="header-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="header-menu-bar"></span>
          <span className="header-menu-bar"></span>
          <span className="header-menu-bar"></span>
        </button>
      </div>
    </header>
  );
}
