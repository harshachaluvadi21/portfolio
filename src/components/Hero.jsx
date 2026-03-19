import { scrollTo } from "../hooks";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow g1" />
      <div className="hero-bg-glow g2" />

      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to SDE Internship &amp; Full-time Roles
        </div>
        <p className="hero-greeting">
          Hi, I'm <strong>Sai Harsha Chaluvadi</strong> 👋
        </p>
        <h1 className="hero-title">
          COLLEGE STUDENT<br />
          <span className="hl">SOFTWARE</span><br />
          &amp; AI DEVELOPER
        </h1>
        <p className="hero-sub">
          UG CSE '27 @ Anurag University · President, Android Club · Flutter &amp; AI Engineer · 
          Passionate about building production apps that solve real-world problems.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects →
          </button>
          <a className="btn-outline" href="mailto:harshachaluvadi21@gmail.com">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-photo-scene">
          <svg className="hero-inkblot" viewBox="0 0 460 600" fill="none">
            <path d="M230,35 Q355,15 400,110 Q445,205 420,310 Q405,375 368,420 Q322,472 255,498 Q188,524 130,490 Q72,456 44,376 Q16,296 42,200 Q68,104 158,55 Q192,36 230,35Z" fill="#0e0e0e"/>
            <ellipse cx="230" cy="540" rx="120" ry="14" fill="#0d0d0d" opacity="0.6"/>
          </svg>
          <div className="hero-glow-base" />
          <div className="hero-photo-wrap">
            {/* Replace src below with your actual photo path: src/assets/photo.jpg */}
            <img
              src={photo}
              alt="Sai Harsha Chaluvadi"
              className="hero-photo"
            />
          </div>
          <div className="fbadge f1">
            <div className="fb-icon">🏆</div>
            <div>
              <div className="fb-val">1st Place</div>
              <div className="fb-label">V Hack 2.0 National</div>
            </div>
          </div>
          <div className="fbadge f2">
            <div>
              <div className="fb-accent">Flutter + AI</div>
              <div className="fb-label" style={{ marginTop: 3 }}>Core Stack · 3+ Projects</div>
            </div>
          </div>

          {/* Floating Tech Icons */}
          <div className="tech-float t1">React</div>
          <div className="tech-float t2">Python</div>
          <div className="tech-float t3">AI/ML</div>
          <div className="tech-float t4">Flutter</div>
        </div>
      </div>

      <span className="scroll-hint" onClick={() => scrollTo("about")}>Scroll</span>
    </section>
  );
}
