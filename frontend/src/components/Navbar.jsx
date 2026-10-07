import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">📍</span>
          Campus<span>Nav</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <a href="/" onClick={closeMenu}>
            Home
          </a>

          <a href="/search" onClick={closeMenu}>
            Search
          </a>

          <a href="/#buildings" onClick={closeMenu}>
            Buildings
          </a>

          <a href="/#services" onClick={closeMenu}>
            Services
          </a>

          <a href="/#map" onClick={closeMenu}>
            Campus Map
          </a>

          <a
            href="/login"
            className="login-btn"
            onClick={closeMenu}
          >
            Login
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;