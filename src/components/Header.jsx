import { profile } from '../data';

function Header() {
  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">
          {profile.name.split(' ')[0]}<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href={`emailLink:${profile.email}`}>
          Hire Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
