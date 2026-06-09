import { scrollTo } from "../hooks";
import avatar3d from "../assets/harsha_3d_avatar.png";

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
          AI &amp;<br />
          <span className="hl">FULL-STACK</span><br />
          DEVELOPER
        </h1>
        <p className="hero-sub">
          UG CSE '27 @ Anurag University · President, Android Club · Building AI-powered apps with LangGraph, FastAPI &amp; Next.js
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
            <img
              src={avatar3d}
              alt="Sai Harsha Chaluvadi"
              className="hero-photo"
            />
          </div>
          {/* Floating Tech Icons */}
          <div className="tech-float t1">Multi-Agent AI</div>
          <div className="tech-float t2">LangGraph</div>
          <div className="tech-float t3">RAG Pipeline</div>
          <div className="tech-float t4">Next.js</div>
          <div className="tech-float t5">🥇 V Hack 2.0</div>
          <div className="tech-float t6">6+ Projects</div>
        </div>
      </div>

      <span className="scroll-hint" onClick={() => scrollTo("about")}>Scroll</span>
    </section>
  );
}
