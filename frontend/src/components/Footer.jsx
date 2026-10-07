function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        {/* Footer Brand */}
        <div className="footer-brand">
          <a href="/" className="logo footer-logo">
            <span className="logo-icon">📍</span>
            Campus<span>Nav</span>
          </a>

          <p>
            Making campus navigation simple, smart and
            accessible for everyone.
          </p>
        </div>

        {/* Footer Links */}
        <div className="footer-links">

          <a href="/">
            Home
          </a>

          <a href="/#buildings">
            Buildings
          </a>

          <a href="/#services">
            Services
          </a>

          <a href="/#map">
            Campus Map
          </a>

        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2026 CampusNav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;