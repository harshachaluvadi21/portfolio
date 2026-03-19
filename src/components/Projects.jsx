import { PROJECTS_DATA, WIDE_PROJECT } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container fi">
        <p className="sec-label">What I've Built</p>
        <h2 className="sec-title">Featured Projects</h2>
        <div className="sec-line" />
        <div className="proj-grid">
          {PROJECTS_DATA.map((p) => (
            <div className="proj-card" key={p.num}>
              <div className="proj-num">{p.num}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <div>
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-sub">{p.sub}</div>
                </div>
                {p.badge && <span className="proj-badge">{p.badge}</span>}
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-impact-lbl">Key Impact</div>
              <ul className="proj-impacts">
                {p.impacts.map((i) => <li key={i}>{i}</li>)}
              </ul>
              <div className="proj-footer">
                <div className="tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="proj-links">
                  <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                  {p.live && <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">Live Demo ↗</a>}
                </div>
              </div>
            </div>
          ))}

          <div className="proj-card wide">
            <div className="proj-num">{WIDE_PROJECT.num}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
              <div>
                <div className="proj-title">{WIDE_PROJECT.title}</div>
                <div className="proj-sub">{WIDE_PROJECT.sub}</div>
              </div>
              <span className="proj-badge">{WIDE_PROJECT.badge}</span>
            </div>
            <div className="proj-wide-inner">
              <div>
                <p className="proj-desc">{WIDE_PROJECT.desc}</p>
                <div className="proj-links" style={{ marginTop: 10 }}>
                  <a href={WIDE_PROJECT.github} className="proj-link" target="_blank" rel="noreferrer">Frontend ↗</a>
                  {WIDE_PROJECT.githubBackend && (
                    <a href={WIDE_PROJECT.githubBackend} className="proj-link" target="_blank" rel="noreferrer">Backend ↗</a>
                  )}
                  {WIDE_PROJECT.live && (
                    <a href={WIDE_PROJECT.live} className="proj-link" target="_blank" rel="noreferrer">Live Demo ↗</a>
                  )}
                </div>
              </div>
              <div>
                <div className="proj-impact-lbl">Key Impact</div>
                <ul className="proj-impacts">
                  {WIDE_PROJECT.impacts.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <div className="tags" style={{ marginTop: 12 }}>
                  {WIDE_PROJECT.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
