import { useState } from "react";
import "./styles.css";
import { useFadeIn } from "./hooks";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ msg: "", show: false });

  useFadeIn();

  const showToast = (msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
  };

  return (
    <>
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Achievements />
      <div className="section-divider" />
      <Contact showToast={showToast} />
      <Footer />
      <div className={`toast${toast.show ? " show" : ""}`}>{toast.msg}</div>
    </>
  );
}

export default App;
