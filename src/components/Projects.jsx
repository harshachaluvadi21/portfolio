import { PROJECTS_DATA } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container fi">
        <p className="sec-label">What I've Built</p>
        <h2 className="sec-title">Featured Projects</h2>
        <div className="sec-line" />
        <div className="proj-grid">
          {PROJECTS_DATA.map((p) => {
            if (p.isWide) {
              return (
                <div className="proj-card wide" key={p.num}>
                  <div className="proj-num">{p.num}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <div className="proj-title">{p.title}</div>
                      <div className="proj-sub">{p.sub}</div>
                    </div>
                    {p.badge && <span className="proj-badge">{p.badge}</span>}
                  </div>
                  <div className="proj-wide-inner">
                    <div>
                      <p className="proj-desc">{p.desc}</p>
                      <div className="proj-links" style={{ marginTop: 10 }}>
                        {p.githubBackend ? (
                          <>
                            <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">Frontend ↗</a>
                            <a href={p.githubBackend} className="proj-link" target="_blank" rel="noreferrer">Backend ↗</a>
                          </>
                        ) : (
                          <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                        )}
                        {p.live && <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">Live Demo ↗</a>}
                      </div>
                    </div>
                    <div>
                      <div className="proj-impact-lbl">Key Impact</div>
                      <ul className="proj-impacts">
                        {p.impacts.map((i) => <li key={i}>{i}</li>)}
                      </ul>
                      <div className="tags" style={{ marginTop: 12 }}>
                        {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
