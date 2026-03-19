import { SKILLS_DATA } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container fi">
        <p className="sec-label">What I Know</p>
        <h2 className="sec-title">Technical Skills</h2>
        <div className="sec-line" />
        <div className="skills-grid">
          {SKILLS_DATA.map(({ cat, tags }) => (
            <div className="skill-card" key={cat}>
              <div className="skill-cat">{cat}</div>
              <div className="tags">
                {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
