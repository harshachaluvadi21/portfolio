import { EXPERIENCE_DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container fi">
        <p className="sec-label">My Journey</p>
        <h2 className="sec-title">Experience &amp; Education</h2>
        <div className="sec-line" />
        <div className="exp-grid">
          <div>
            <div className="exp-col-title">Work Experience</div>
            <div className="timeline">
              {EXPERIENCE_DATA.map((e, i) => (
                <div className="tl-item" key={i} style={i === EXPERIENCE_DATA.length - 1 ? { marginBottom: 0 } : {}}>
                  <div className="tl-dot" />
                  <div className="tl-card">
                    <span className="tl-type">{e.type}</span>
                    <div className="tl-role">{e.role}</div>
                    <div className="tl-org">{e.org}</div>
                    <div className="tl-period">{e.period}</div>
                    <ul className="tl-bullets">
                      {e.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="exp-col-title">Education</div>
            <div className="edu-card">
              <div className="edu-deg">B.Tech — Computer Science &amp; Engineering</div>
              <div className="edu-school">Anurag University</div>
              <div className="edu-meta"><span>Aug 2023 – Jun 2027</span><span>CGPA: 81.3%</span></div>
            </div>
            <div className="edu-card">
              <div className="edu-deg">Intermediate (MPC)</div>
              <div className="edu-school">Narayana Junior College</div>
              <div className="edu-meta"><span>Jun 2021 – Apr 2023</span><span>Hyderabad</span></div>
            </div>
            <div className="coursework">
              <div className="cw-label">Relevant Coursework</div>
              <div className="tags">
                {["DSA","ML","AI","DBMS","OS","Networks","Data Science","Software Engg"].map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
