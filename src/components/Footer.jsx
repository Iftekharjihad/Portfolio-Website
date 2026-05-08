import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <h1 className="footer-name">Iftekhar Islam Jihad</h1>

        <nav className="footer-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-socials">
          <a
            href="www.linkedin.com/in/iftekhar-islam-jihad"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://codeforces.com/profile/Jihad_923"
            target="_blank"
            rel="noreferrer"
            aria-label="codeforces"
          >
            C
          </a>

          <a
            href="https://leetcode.com/u/iftekharislam923/"
            target="_blank"
            rel="noreferrer"
            aria-label="leetcode"
          >
            L
          </a>

          <a
            href="https://github.com/Iftekharjihad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            Git
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved</p>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#cookies">Cookies</a>
            <span>|</span>
            <a href="#license">License</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;