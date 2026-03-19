import { useState } from "react";
import { GithubIcon, LinkedinIcon, EmailIcon } from "./Icons";

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      showToast("Please fill all fields!");
      return;
    }
    const mailto = `mailto:harshachaluvadi21@gmail.com?subject=Message from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.open(mailto);
    showToast("Opening email client! ✉️");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <div className="container fi">
        <p className="sec-label">Let's Talk</p>
        <div className="contact-grid">
          <div>
            <h2 className="contact-heading">
              Let's Build<br />Something <span>Great</span>
            </h2>
            <p className="contact-sub">
              I'm actively looking for SDE internship and full-time opportunities. Whether you have a
              role, a project, or just want to connect — my inbox is always open.
            </p>
            <a href="mailto:harshachaluvadi21@gmail.com" className="contact-row">
              <div className="ci-icon">✉️</div>
              <div>
                <div className="ci-lbl">Email</div>
                <div className="ci-val">harshachaluvadi21@gmail.com</div>
              </div>
            </a>
            <a href="tel:+919666785449" className="contact-row">
              <div className="ci-icon">📱</div>
              <div>
                <div className="ci-lbl">Phone</div>
                <div className="ci-val">+91 96667 85449</div>
              </div>
            </a>
            <div className="contact-row" style={{ cursor: "default" }}>
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-lbl">Location</div>
                <div className="ci-val">Hyderabad, India</div>
              </div>
            </div>
            <div className="socials">
              <a href="https://linkedin.com/in/saiharshachaluvadi" className="soc-btn" target="_blank" rel="noreferrer">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/harshachaluvadi21" className="soc-btn" target="_blank" rel="noreferrer">
                <GithubIcon />
              </a>
              <a href="mailto:harshachaluvadi21@gmail.com" className="soc-btn">
                <EmailIcon />
              </a>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input className="form-input" type="text" name="name" placeholder="Jane Doe" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" name="email" placeholder="jane@company.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" name="message" placeholder="Hi Harsha, I'd love to connect about..." value={form.message} onChange={handleChange} />
            </div>
            <button className="form-btn" onClick={handleSubmit}>✉️ Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}
