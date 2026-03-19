import { useScrolled, scrollTo } from "../hooks";
import { GithubIcon, LinkedinIcon } from "./Icons";

const LINKS = ["about", "skills", "projects", "experience", "achievements", "contact"];

export default function Nav({ menuOpen, setMenuOpen }) {
  const scrolled = useScrolled();

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <span className="nav-logo" onClick={() => scrollTo("hero")}>
          <span>S</span>ai Harsha
        </span>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l} onClick={() => handleNav(l)}>
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="nav-icon" href="https://github.com/saiharshachaluvadi" target="_blank" rel="noreferrer" title="GitHub">
            <GithubIcon />
          </a>
          <a className="nav-icon" href="https://linkedin.com/in/saiharshachaluvadi" target="_blank" rel="noreferrer" title="LinkedIn">
            <LinkedinIcon />
          </a>
          <button className="nav-hire" onClick={() => handleNav("contact")}>Hire Me</button>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)}>☰</button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {LINKS.map((l) => (
          <a key={l} onClick={() => handleNav(l)}>
            {l.charAt(0).toUpperCase() + l.slice(1)}
          </a>
        ))}
        <button className="nav-hire" style={{ marginTop: 12 }} onClick={() => handleNav("contact")}>Hire Me</button>
      </div>
    </>
  );
}
