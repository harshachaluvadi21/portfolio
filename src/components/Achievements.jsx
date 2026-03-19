import { ACHIEVEMENTS_DATA } from "../data";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container fi">
        <p className="sec-label">Recognition</p>
        <h2 className="sec-title">Achievements &amp; Certifications</h2>
        <div className="sec-line" />
        <div className="ach-grid">
          {ACHIEVEMENTS_DATA.map((a) => (
            <div className={`ach-card${a.highlight ? " highlight" : ""}`} key={a.title}>
              <div className="ach-icon">{a.icon}</div>
              <div>
                <div className="ach-title">{a.title}</div>
                <div className="ach-det">{a.det}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
