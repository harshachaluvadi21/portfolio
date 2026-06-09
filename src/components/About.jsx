import photo from "../assets/harsha_3d_avatar.png";

export default function About() {
  return (
    <section id="about">
      <div className="container fi">
        <p className="sec-label">Introduction</p>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-line" />
        <div className="about-grid">
          <div className="about-visual v3">
            <div className="avatar-scene">
              <div className="avatar-halo"></div>
              <div className="avatar-wrapper v3">
                <img src={photo} alt="Sai Harsha Chaluvadi" className="about-avatar v3" />
                <div className="avatar-overlay"></div>
              </div>
              <div className="floating-bubble b1">LangGraph</div>
              <div className="floating-bubble b2">GenAI</div>
              <div className="floating-bubble b3">FastAPI</div>
              <div className="orb o1"></div>
              <div className="orb o2"></div>
            </div>
          </div>
          <div>
            <div className="about-text">
              <p>
                UG Student at <strong>Anurag University</strong> with a passion for building impactful applications. As <strong>President of the Android Club</strong>, I lead workshops, mentor 20+ students, and build a community of developers.
              </p>
              <p>
                I work at the intersection of <strong>multi-agent AI, LangGraph, and full-stack engineering</strong> — shipping production-ready products that solve real problems.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-val">81.3%</span>
                <span className="stat-lbl">Academic CGPA</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">6+</span>
                <span className="stat-lbl">Production Projects</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">100+</span>
                <span className="stat-lbl">Students Mentored</span>
              </div>
              <div className="stat-card">
                <span className="stat-val">1st</span>
                <span className="stat-lbl">Hackathon Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
