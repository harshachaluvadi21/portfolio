import { useState, useEffect, useRef } from "react";
import photo from "./assets/photo.jpg";
import premiumAvatar from "./assets/premium_dev_avatar_v3.png";

/* ─── CSS-in-JS variables ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0a0a; --bg2: #141414; --bg3: #1c1c1c;
    --text: #f0f0f0; --muted: #888; --border: #252525;
    --accent: #e8c547; --accentL: rgba(232,197,71,0.12);
  }

  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: var(--bg); color: var(--text); overflow-x: hidden; }
  ::selection { background: var(--accent); color: #000; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    padding: 22px 64px; display: flex; align-items: center;
    justify-content: space-between; transition: all .35s;
  }
  .nav.scrolled {
    background: rgba(10,10,10,.96); backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border); padding: 14px 64px;
  }
  .nav-logo { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--text); text-decoration: none; letter-spacing: -.01em; cursor: pointer; }
  .nav-logo span { color: var(--accent); }
  .nav-links { display: flex; gap: 32px; }
  .nav-links a { font-size: .82rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color .2s; letter-spacing: .02em; cursor: pointer; }
  .nav-links a:hover { color: var(--text); }
  .nav-actions { display: flex; align-items: center; gap: 12px; }
  .nav-icon { width: 36px; height: 36px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); text-decoration: none; transition: all .2s; }
  .nav-icon:hover { border-color: var(--accent); color: var(--accent); }
  .nav-hire { background: var(--accent); color: #000; padding: 8px 20px; border-radius: 7px; font-size: .8rem; font-weight: 700; text-decoration: none; transition: all .2s; cursor: pointer; border: none; }
  .nav-hire:hover { filter: brightness(1.12); box-shadow: 0 6px 20px rgba(232,197,71,.3); }
  .nav-hamburger { display: none; background: none; border: none; color: var(--text); font-size: 1.4rem; cursor: pointer; }

  /* MOBILE MENU */
  .mobile-menu { position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 300; background: rgba(10,10,10,.98); backdrop-filter: blur(20px); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px; transform: translateX(100%); transition: transform .35s; }
  .mobile-menu.open { transform: none; }
  .mobile-menu a { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 700; color: var(--muted); text-decoration: none; transition: color .2s; cursor: pointer; }
  .mobile-menu a:hover { color: var(--accent); }
  .mobile-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: var(--muted); font-size: 1.8rem; cursor: pointer; }

  /* HERO */
  .hero { min-height: 100vh; display: flex; align-items: center; padding: 110px 64px 60px; position: relative; overflow: hidden; gap: 0; }
  .hero-bg-glow { position: absolute; border-radius: 50%; pointer-events: none; }
  .hero-bg-glow.g1 { width: 700px; height: 700px; top: -200px; right: -150px; background: radial-gradient(ellipse,rgba(232,197,71,.04) 0%,transparent 65%); }
  .hero-bg-glow.g2 { width: 500px; height: 500px; bottom: -100px; left: 5%; background: radial-gradient(ellipse,rgba(232,197,71,.03) 0%,transparent 65%); }
  .hero-left { flex: 1; position: relative; z-index: 2; max-width: 560px; }
  .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--accentL); border: 1px solid rgba(232,197,71,.25); padding: 6px 16px; border-radius: 50px; font-family: 'JetBrains Mono',monospace; font-size: .62rem; color: var(--accent); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 28px; }
  .badge-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; animation: blink 2s infinite; }
  @keyframes blink { 0%,100%{opacity:1}50%{opacity:.4} }
  .hero-greeting { font-size: 1rem; color: var(--muted); margin-bottom: 12px; font-weight: 400; }
  .hero-greeting strong { color: var(--text); font-weight: 600; }
  .hero-title { font-family: 'Syne',sans-serif; font-size: clamp(2.8rem,5.5vw,5rem); font-weight: 800; line-height: 1.02; letter-spacing: -.02em; color: var(--text); margin-bottom: 22px; }
  .hero-title .hl { color: var(--accent); }
  .hero-sub { font-size: .92rem; line-height: 1.8; color: var(--muted); max-width: 430px; margin-bottom: 36px; }
  .hero-cta { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
  .btn-primary { background: var(--accent); color: #000; padding: 13px 28px; border-radius: 8px; font-weight: 700; font-size: .88rem; text-decoration: none; transition: all .2s; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; border: none; font-family: 'DM Sans',sans-serif; }
  .btn-primary:hover { filter: brightness(1.1); box-shadow: 0 10px 30px rgba(232,197,71,.25); transform: translateY(-1px); }
  .btn-outline { color: var(--text); font-size: .88rem; font-weight: 600; text-decoration: none; border-bottom: 1.5px solid rgba(240,240,240,.3); padding-bottom: 2px; transition: all .2s; }
  .btn-outline:hover { color: var(--accent); border-color: var(--accent); }
  .hero-right { flex: 0 0 500px; height: 620px; position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; }
  .hero-photo-scene { position: relative; width: 460px; height: 600px; display: flex; align-items: flex-end; justify-content: center; }
  .hero-inkblot { position: absolute; inset: 0; pointer-events: none; opacity: .6; }
  .hero-photo-wrap { position: relative; z-index: 2; width: 420px; height: 580px; }
  @keyframes floatY { 0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)} }
  .hero-photo { width: 100%; height: 100%; object-fit: cover; object-position: center top; filter: drop-shadow(0 40px 80px rgba(0,0,0,.8)); border-radius: 20px; }
  .hero-glow-base { position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 300px; height: 60px; background: radial-gradient(ellipse,rgba(232,197,71,.2) 0%,transparent 70%); border-radius: 50%; animation: glowPulse 3s ease-in-out infinite; }
  @keyframes glowPulse { 0%,100%{opacity:.6;transform:translateX(-50%) scaleX(1)}50%{opacity:1;transform:translateX(-50%) scaleX(1.15)} }
  .fbadge { position: absolute; z-index: 3; background: rgba(14,14,14,.92); border: 1px solid var(--border); border-radius: 14px; padding: 11px 16px; backdrop-filter: blur(16px); display: flex; align-items: center; gap: 10px; white-space: nowrap; }
  .fbadge.f1 { bottom: 100px; left: -20px; animation: fb1 3.8s ease-in-out infinite; }
  .fbadge.f2 { top: 120px; right: -20px; animation: fb2 4.2s ease-in-out infinite .6s; }
  @keyframes fb1 { 0%,100%{transform:translateY(0) rotate(-1.5deg)}50%{transform:translateY(-10px) rotate(1.5deg)} }
  @keyframes fb2 { 0%,100%{transform:translateY(0) rotate(1.5deg)}50%{transform:translateY(-12px) rotate(-2deg)} }
  .fb-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--accentL); display: flex; align-items: center; justify-content: center; font-size: .85rem; flex-shrink: 0; }
  .fb-val { font-family: 'Syne',sans-serif; font-size: .9rem; font-weight: 700; color: var(--text); line-height: 1.2; }
  .fb-label { font-size: .6rem; color: var(--muted); }
  .fb-accent { font-family: 'Syne',sans-serif; font-size: .95rem; font-weight: 800; color: var(--accent); }

  /* FLOATING TECH */
  .tech-float {
    position: absolute; z-index: 4;
    padding: 6px 12px; border-radius: 10px;
    background: rgba(14,14,14,0.7); backdrop-filter: blur(8px);
    border: 1px solid rgba(232, 197, 71, 0.2);
    color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.65rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  .tech-float.t1 { top: 60px; left: -30px; animation: floatT 4.5s infinite ease-in-out; }
  .tech-float.t2 { top: 220px; right: -40px; animation: floatT 5.5s infinite ease-in-out 0.8s; }
  .tech-float.t3 { bottom: 180px; left: -60px; animation: floatT 6s infinite ease-in-out 1.2s; }
  .tech-float.t4 { bottom: 50px; right: -20px; animation: floatT 5s infinite ease-in-out 0.4s; }

  @keyframes floatT { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-12px) rotate(5deg)} }

  .scroll-hint { position: absolute; bottom: 36px; left: 64px; display: flex; align-items: center; gap: 10px; font-family: 'JetBrains Mono',monospace; font-size: .6rem; color: var(--muted); letter-spacing: .18em; text-transform: uppercase; text-decoration: none; cursor: pointer; }
  .scroll-hint::before { content: ''; width: 38px; height: 1px; background: var(--muted); }

  /* SHARED */
  .section-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--border), transparent); }

  /* SECTIONS */
  section { padding: 96px 0; position: relative; z-index: 1; }
  .container { max-width: 1100px; margin: 0 auto; padding: 0 64px; }
  .sec-label { font-family: 'JetBrains Mono',monospace; font-size: .62rem; letter-spacing: .22em; text-transform: uppercase; color: var(--accent); margin-bottom: 10px; }
  .sec-title { font-family: 'Syne',sans-serif; font-size: 2.3rem; font-weight: 800; color: var(--text); margin-bottom: 14px; line-height: 1.15; }
  .sec-line { width: 42px; height: 2.5px; background: var(--accent); border-radius: 2px; margin-bottom: 44px; }

  /* ABOUT V3 PREMIUM */
  .about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center; }
  .about-visual.v3 { position: relative; display: flex; align-items: center; justify-content: center; padding: 40px; }
  .avatar-scene { position: relative; width: 100%; max-width: 440px; height: 440px; display: flex; align-items: center; justify-content: center; }

  .avatar-halo {
    position: absolute; width: 120%; height: 120%;
    background: radial-gradient(circle, rgba(232, 197, 71, 0.15) 0%, transparent 70%);
    border-radius: 50%; filter: blur(40px);
    animation: haloPulse 6s infinite ease-in-out;
  }
  @keyframes haloPulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.1);opacity:0.8} }

  .avatar-wrapper.v3 {
    position: relative; width: 100%; height: 100%;
    border-radius: 40px; overflow: hidden;
    box-shadow: 0 40px 100px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    z-index: 2; transform: translateZ(0); transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .avatar-wrapper.v3:hover { transform: translateY(-10px) scale(1.02); }

  .about-avatar.v3 { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.08) brightness(1.02); }
  .avatar-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.4), transparent 40%); pointer-events: none; }

  .floating-bubble {
    position: absolute; z-index: 3;
    padding: 8px 16px; border-radius: 12px;
    background: rgba(20,20,20,0.85); backdrop-filter: blur(10px);
    border: 1px solid rgba(232, 197, 71, 0.3);
    color: var(--accent); font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; font-weight: 600;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
  .floating-bubble.b1 { top: 10%; right: -5%; animation: floatBubble 5s infinite ease-in-out; }
  .floating-bubble.b2 { bottom: 20%; left: -10%; animation: floatBubble 6s infinite ease-in-out 0.5s; }
  .floating-bubble.b3 { top: 40%; left: -15%; animation: floatBubble 7s infinite ease-in-out 1s; }

  @keyframes floatBubble { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-15px) rotate(3deg)} }

  .orb { position: absolute; border-radius: 50%; filter: blur(25px); opacity: 0.3; z-index: 1; }
  .orb.o1 { width: 150px; height: 150px; background: var(--accent); top: -20px; left: -20px; animation: orbMove 12s infinite linear; }
  .orb.o2 { width: 100px; height: 100px; background: #64ffda; bottom: 20px; right: 0; opacity: 0.1; animation: orbMove 15s infinite linear reverse; }
  @keyframes orbMove { 0%{transform:translate(0,0)} 25%{transform:translate(30px, 20px)} 50%{transform:translate(0, 40px)} 75%{transform:translate(-30px, 20px)} 100%{transform:translate(0,0)} }

  .about-text p { font-size: 1.1rem; line-height: 1.9; color: var(--muted); margin-bottom: 28px; }
  .about-text p strong { color: var(--text); font-weight: 600; letter-spacing: -0.01em; }

  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; }
  .stat-card {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 24px; border-radius: 20px;
    backdrop-filter: blur(8px);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .stat-card:hover { border-color: var(--accent); transform: translateY(-8px) scale(1.02); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
  .stat-card:hover::after { opacity: 1; }
  .stat-val { font-family: 'Syne', sans-serif; font-size: 2.4rem; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 8px; }
  .stat-lbl { font-size: 0.8rem; color: var(--muted); font-weight: 500; text-transform: uppercase; letter-spacing: 0.05em; }

  /* SKILLS */
  .skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .skill-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 14px; padding: 22px; transition: all .3s; }
  .skill-card:hover { border-color: var(--accent); transform: translateY(-3px); box-shadow: 0 16px 48px rgba(232,197,71,.07); }
  .skill-cat { font-family: 'JetBrains Mono',monospace; font-size: .6rem; letter-spacing: .14em; text-transform: uppercase; color: var(--accent); margin-bottom: 16px; }
  .tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .tag { background: rgba(255,255,255,.04); border: 1px solid var(--border); color: var(--muted); font-family: 'JetBrains Mono',monospace; font-size: .63rem; padding: 5px 11px; border-radius: 6px; transition: all .2s; }
  .tag:hover { border-color: var(--accent); color: var(--accent); }

  /* PROJECTS */
  .proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .proj-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 18px; padding: 30px; transition: all .3s; position: relative; overflow: hidden; }
  .proj-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg,transparent,var(--border),transparent); transition: all .3s; }
  .proj-card:hover { border-color: rgba(232,197,71,.35); transform: translateY(-4px); box-shadow: 0 24px 56px rgba(0,0,0,.45); }
  .proj-card:hover::before { background: linear-gradient(90deg,transparent,var(--accent),transparent); }
  .proj-card.wide { grid-column: span 2; }
  .proj-num { font-family: 'JetBrains Mono',monospace; font-size: .62rem; color: var(--accent); margin-bottom: 14px; letter-spacing: .1em; }
  .proj-title { font-family: 'Syne',sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--text); margin-bottom: 4px; }
  .proj-sub { font-size: .75rem; color: var(--accent); margin-bottom: 14px; }
  .proj-desc { font-size: .8rem; line-height: 1.75; color: var(--muted); margin-bottom: 18px; }
  .proj-impact-lbl { font-family: 'JetBrains Mono',monospace; font-size: .58rem; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); margin-bottom: 9px; }
  .proj-impacts { list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px; }
  .proj-impacts li { display: flex; align-items: flex-start; gap: 8px; font-size: .77rem; color: var(--muted); line-height: 1.5; }
  .proj-impacts li::before { content: '→'; color: var(--accent); flex-shrink: 0; font-family: 'JetBrains Mono',monospace; font-size: .68rem; margin-top: 1px; }
  .proj-footer { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
  .proj-links { display: flex; gap: 8px; }
  .proj-link { display: inline-flex; align-items: center; gap: 5px; font-size: .73rem; color: var(--muted); text-decoration: none; border: 1px solid var(--border); border-radius: 7px; padding: 6px 13px; transition: all .2s; }
  .proj-link:hover { border-color: var(--accent); color: var(--accent); }
  .proj-badge { font-family: 'JetBrains Mono',monospace; font-size: .58rem; text-transform: uppercase; letter-spacing: .08em; background: var(--accentL); border: 1px solid rgba(232,197,71,.2); color: var(--accent); padding: 4px 10px; border-radius: 50px; }
  .proj-wide-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start; }

  /* EXPERIENCE */
  .exp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
  .exp-col-title { font-family: 'Syne',sans-serif; font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 22px; display: flex; align-items: center; gap: 10px; }
  .exp-col-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }
  .timeline { position: relative; padding-left: 26px; }
  .timeline::before { content: ''; position: absolute; left: 0; top: 10px; bottom: 0; width: 1px; background: linear-gradient(to bottom,var(--accent),transparent); }
  .tl-item { position: relative; margin-bottom: 22px; }
  .tl-dot { position: absolute; left: -30px; top: 10px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent); border: 2px solid var(--bg); box-shadow: 0 0 10px rgba(232,197,71,.5); }
  .tl-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px; transition: all .3s; }
  .tl-card:hover { border-color: rgba(232,197,71,.3); }
  .tl-type { display: inline-flex; align-items: center; gap: 5px; font-family: 'JetBrains Mono',monospace; font-size: .56rem; text-transform: uppercase; letter-spacing: .1em; padding: 3px 9px; border-radius: 50px; background: var(--accentL); color: var(--accent); margin-bottom: 8px; }
  .tl-role { font-family: 'Syne',sans-serif; font-size: .9rem; font-weight: 700; color: var(--text); }
  .tl-org { font-size: .75rem; color: var(--accent); margin-bottom: 5px; }
  .tl-period { font-family: 'JetBrains Mono',monospace; font-size: .6rem; color: var(--muted); margin-bottom: 8px; }
  .tl-bullets { list-style: none; display: flex; flex-direction: column; gap: 5px; }
  .tl-bullets li { font-size: .75rem; color: var(--muted); line-height: 1.55; display: flex; gap: 7px; }
  .tl-bullets li::before { content: '—'; color: var(--accent); flex-shrink: 0; font-size: .65rem; }
  .edu-card { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-bottom: 12px; transition: all .3s; }
  .edu-card:hover { border-color: rgba(232,197,71,.3); }
  .edu-deg { font-family: 'Syne',sans-serif; font-size: .9rem; font-weight: 700; color: var(--text); }
  .edu-school { font-size: .78rem; color: var(--accent); margin-bottom: 7px; }
  .edu-meta { display: flex; justify-content: space-between; font-family: 'JetBrains Mono',monospace; font-size: .62rem; color: var(--muted); }
  .coursework { background: var(--bg3); border: 1px solid var(--border); border-radius: 12px; padding: 18px; margin-top: 12px; }
  .cw-label { font-family: 'JetBrains Mono',monospace; font-size: .58rem; text-transform: uppercase; letter-spacing: .14em; color: var(--accent); margin-bottom: 12px; }

  /* ACHIEVEMENTS */
  .ach-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
  .ach-card { background: var(--bg2); border: 1px solid var(--border); border-radius: 14px; padding: 20px; display: flex; align-items: flex-start; gap: 14px; transition: all .3s; }
  .ach-card:hover { border-color: rgba(232,197,71,.3); transform: translateY(-2px); }
  .ach-card.highlight { border-color: rgba(232,197,71,.35); background: rgba(232,197,71,.04); }
  .ach-icon { width: 38px; height: 38px; border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: .9rem; background: var(--accentL); }
  .ach-card.highlight .ach-icon { background: var(--accent); }
  .ach-title { font-size: .82rem; font-weight: 600; color: var(--text); line-height: 1.4; margin-bottom: 4px; }
  .ach-det { font-family: 'JetBrains Mono',monospace; font-size: .6rem; color: var(--muted); }

  /* CONTACT */
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .contact-heading { font-family: 'Syne',sans-serif; font-size: 2.8rem; font-weight: 800; color: var(--text); line-height: 1.1; margin-bottom: 18px; }
  .contact-heading span { color: var(--accent); }
  .contact-sub { font-size: .88rem; line-height: 1.85; color: var(--muted); margin-bottom: 32px; }
  .contact-row { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; text-decoration: none; cursor: pointer; }
  .ci-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--bg3); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: .85rem; flex-shrink: 0; transition: all .2s; }
  .contact-row:hover .ci-icon { border-color: var(--accent); background: var(--accentL); }
  .ci-lbl { font-family: 'JetBrains Mono',monospace; font-size: .58rem; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); margin-bottom: 3px; }
  .ci-val { font-size: .84rem; font-weight: 500; color: var(--text); }
  .socials { display: flex; gap: 10px; margin-top: 24px; }
  .soc-btn { width: 42px; height: 42px; border-radius: 10px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); text-decoration: none; transition: all .2s; cursor: pointer; background: none; }
  .soc-btn:hover { border-color: var(--accent); color: var(--accent); transform: scale(1.08); }
  .form-wrap { background: var(--bg2); border: 1px solid var(--border); border-radius: 18px; padding: 32px; }
  .form-group { margin-bottom: 16px; }
  .form-label { font-family: 'JetBrains Mono',monospace; font-size: .58rem; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); margin-bottom: 7px; display: block; }
  .form-input { width: 100%; padding: 12px 15px; border-radius: 9px; border: 1px solid var(--border); background: var(--bg3); color: var(--text); font-family: 'DM Sans',sans-serif; font-size: .84rem; outline: none; transition: border .2s; }
  .form-input:focus { border-color: var(--accent); }
  .form-input::placeholder { color: rgba(136,136,136,.4); }
  textarea.form-input { resize: none; height: 110px; }
  .form-btn { width: 100%; background: var(--accent); color: #000; border: none; padding: 13px; border-radius: 9px; font-family: 'DM Sans',sans-serif; font-size: .88rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all .2s; margin-top: 6px; }
  .form-btn:hover { filter: brightness(1.1); box-shadow: 0 10px 30px rgba(232,197,71,.3); }

  /* FOOTER */
  footer { border-top: 1px solid var(--border); padding: 30px 0; background: var(--bg); }
  .footer-inner { max-width: 1100px; margin: 0 auto; padding: 0 64px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px; }
  .footer-logo { font-family: 'Syne',sans-serif; font-weight: 800; font-size: .95rem; color: var(--text); }
  .footer-logo span { color: var(--accent); }
  .footer-meta { font-family: 'JetBrains Mono',monospace; font-size: .6rem; color: var(--muted); }
  .footer-links { display: flex; gap: 18px; }
  .footer-links a { color: var(--muted); text-decoration: none; font-family: 'JetBrains Mono',monospace; font-size: .62rem; transition: color .2s; }
  .footer-links a:hover { color: var(--accent); }

  /* TOAST */
  .toast { position: fixed; bottom: 32px; left: 50%; transform: translateX(-50%) translateY(80px); background: var(--accent); color: #000; padding: 12px 24px; border-radius: 50px; font-size: .82rem; font-weight: 700; z-index: 999; transition: transform .35s; pointer-events: none; }
  .toast.show { transform: translateX(-50%) translateY(0); }

  /* FADE IN */
  .fi { opacity: 0; transform: translateY(28px); transition: opacity .75s ease, transform .75s ease; }
  .fi.vis { opacity: 1; transform: none; }

  /* RESPONSIVE */
  @media (max-width: 960px) {
    .nav, .nav.scrolled { padding: 16px 24px; }
    .nav-links, .nav-actions { display: none; }
    .nav-hamburger { display: block; }
    .hero { padding: 96px 24px 60px; flex-direction: column-reverse; gap: 28px; text-align: center; }
    .hero-right { flex: none; width: 100%; height: auto; }
    .hero-photo-scene { width: 100%; max-width: 320px; height: 420px; margin: 0 auto; }
    .hero-photo-wrap { width: 280px; height: 380px; }
    .fbadge.f1 { left: -6px; bottom: 60px; }
    .fbadge.f2 { right: -6px; top: 60px; }
    .hero-cta { justify-content: center; }
    .scroll-hint { display: none; }
    .container { padding: 0 24px; }
    .about-grid, .exp-grid, .contact-grid { grid-template-columns: 1fr; }
    .skills-grid { grid-template-columns: 1fr 1fr; }
    .proj-grid { grid-template-columns: 1fr; }
    .proj-card.wide { grid-column: span 1; }
    .proj-wide-inner { grid-template-columns: 1fr; }
    .ach-grid { grid-template-columns: 1fr 1fr; }
    .sec-title { font-size: 1.85rem; }
    .contact-heading { font-size: 2.2rem; }
    .footer-inner { padding: 0 24px; }
  }
  @media (max-width: 600px) {
    .skills-grid, .ach-grid { grid-template-columns: 1fr; }
    .hero-title { font-size: 2.4rem; }
  }
`;

/* ─── SVG Icons ─── */
const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
  </svg>
);

/* ─── DATA ─── */
const PHOTO_URL = photo;
const PREMIUM_AVATAR_URL = premiumAvatar;

const SKILLS_DATA = [
  { cat: "Languages", tags: ["Python", "Java", "Dart", "JavaScript", "C", "SQL"] },
  { cat: "Frameworks", tags: ["Flutter", "React", "Spring Boot", "Streamlit", "TensorFlow", "OpenCV"] },
  { cat: "Databases & Tools", tags: ["MySQL", "PostgreSQL", "SQLite", "Git", "GitHub", "ServiceNow"] },
  { cat: "Core CS", tags: ["DSA", "OOP", "DBMS", "OS", "Networks", "ML / AI"] },
  { cat: "Dev & Design", tags: ["HTML", "CSS", "Figma", "Android Studio", "REST APIs", "JWT"] },
  { cat: "Deploy & Cloud", tags: ["Vercel", "Render", "GitHub Actions"] },
];

const PROJECTS_DATA = [
  {
    num: "01 / Featured", title: "Smart Drive", sub: "AI Drowsiness Detection App",
    desc: "Flutter & ML Kit app for real-time driver drowsiness detection with AI voice assistant and automated GPS emergency alerts.",
    impacts: ["100% hands-free interface via STT/TTS", "Low-latency AI assistant with Groq Llama 3.3", "Automated GPS SMS alerts on fatigue events"],
    tags: ["Flutter", "ML Kit", "Groq AI", "Dart"],
    github: "https://github.com/harshachaluvadi21/smart_drive",
  },
  {
    num: "02 / Featured", title: "Face Recognition Attendance", sub: "AI Smart Attendance System",
    desc: "Computer vision attendance system using KNN classification with a real-time Streamlit dashboard and automated record management.",
    impacts: ["95% face recognition accuracy", "50% reduction in manual attendance time", "25% fewer false positives with optimized KNN"],
    tags: ["Python", "OpenCV", "KNN", "Streamlit"],
    github: "https://github.com/harshachaluvadi21/smart_attendance1",
  },
];

const WIDE_PROJECT = {
  num: "03 / Live Project", title: "Rent Loop", sub: "Scalable P2P Rental Platform",
  desc: "A scalable peer-to-peer rental marketplace built with Spring Boot + React, featuring JWT auth, role-based access control, and QR-based transaction verification.",
  impacts: ["Scalable RESTful APIs with PostgreSQL", "QR-based booking lifecycle verification", "JWT + role-based access control", "Deployed on Vercel + Render"],
  tags: ["Spring Boot", "React", "PostgreSQL", "JWT"],
  badge: "🌐 Live", 
  github: "https://github.com/harshachaluvadi21/rentloop_frontend",
  githubBackend: "https://github.com/harshachaluvadi21/rentloop_backend",
  live: "https://rentloop-frontend.vercel.app/",
};

const EXPERIENCE_DATA = [
  {
    type: "💻 Internship", role: "Virtual Intern", org: "ServiceNow · SmartBridge / AICTE",
    period: "Oct 2025 – Nov 2025",
    bullets: ["Reduced manual ticketing by 35% via service catalog config", "Identified 3 bottlenecks → improved resolution speed by 28%", "Built custom JS business rules with 100% customization"],
  },
  {
    type: "💻 Internship", role: "Web Development Intern", org: "Prodigy InfoTech · Remote",
    period: "Feb 2025 – Mar 2025",
    bullets: ["Frontend development with HTML, CSS, JavaScript", "Responsive design and UI/UX principles"],
  },
  {
    type: "👑 Leadership", role: "President, Android Club", org: "Anurag University — Android AU",
    period: "Jul 2025 – Present",
    bullets: ["Spearheaded 4+ events, 100+ students engaged", "Mentored 20+ beginners → 40% proficiency improvement", "Grew community participation by 30%"],
  },
];

const ACHIEVEMENTS_DATA = [
  { icon: "🏆", title: "1st Prize — V Hack 2.0 National Hackathon", det: "Smart Helmet: AI accident detection · 2026", highlight: true },
  { icon: "🎖", title: "ServiceNow Virtual Internship & Micro Certification", det: "SmartBridge / AICTE" },
  { icon: "🐍", title: "Complete Python Bootcamp: Zero to Hero", det: "Udemy" },
  { icon: "🗄", title: "SQL (Basic) Certification", det: "HackerRank" },
  { icon: "🌿", title: "Git & GitHub Certification", det: "CodeChef" },
  { icon: "🔷", title: "OOPs Concepts in Python", det: "CodeChef" },
];

/* ─── HOOKS ─── */
function useScrollSpy() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "achievements", "contact"];
    const handler = () => {
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) { setActive(sections[i]); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return active;
}

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll(".fi");
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold: 0.1, rootMargin: "0px 0px -64px 0px" }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  });
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

/* ─── COMPONENTS ─── */
function Nav({ menuOpen, setMenuOpen }) {
  const scrolled = useScrolled();
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const links = ["about", "skills", "projects", "experience", "achievements", "contact"];
  return (
    <>
      <nav id="nav" className={`nav${scrolled ? " scrolled" : ""}`}>
        <span className="nav-logo" onClick={() => scrollTo("hero")}><span>S</span>ai Harsha</span>
        <div className="nav-links">
          {links.map(l => <a key={l} onClick={() => scrollTo(l)}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>)}
        </div>
        <div className="nav-actions">
          <a className="nav-icon" href="https://github.com/saiharshachaluvadi" target="_blank" rel="noreferrer" title="GitHub"><GithubIcon /></a>
          <a className="nav-icon" href="https://linkedin.com/in/saiharshachaluvadi" target="_blank" rel="noreferrer" title="LinkedIn"><LinkedinIcon /></a>
          <a className="nav-hire" onClick={() => scrollTo("contact")}>Hire Me</a>
        </div>
        <button className="nav-hamburger" onClick={() => setMenuOpen(true)}>☰</button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {links.map(l => <a key={l} onClick={() => scrollTo(l)}>{l.charAt(0).toUpperCase() + l.slice(1)}</a>)}
        <a className="nav-hire" style={{ marginTop: 12 }} onClick={() => scrollTo("contact")}>Hire Me</a>
      </div>
    </>
  );
}

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-glow g1" />
      <div className="hero-bg-glow g2" />
      <div className="hero-right">
        <div className="hero-photo-scene">
          <svg className="hero-inkblot" viewBox="0 0 460 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M230,35 Q355,15 400,110 Q445,205 420,310 Q405,375 368,420 Q322,472 255,498 Q188,524 130,490 Q72,456 44,376 Q16,296 42,200 Q68,104 158,55 Q192,36 230,35Z" fill="#0e0e0e"/>
            <ellipse cx="230" cy="540" rx="120" ry="14" fill="#0d0d0d" opacity="0.6"/>
          </svg>
          <div className="hero-glow-base" />
          <div className="hero-photo-wrap">
            <img src={PHOTO_URL} alt="Sai Harsha Chaluvadi" className="hero-photo" />
          </div>
          <div className="fbadge f1">
            <div className="fb-icon">🏆</div>
            <div><div className="fb-val">1st Place</div><div className="fb-label">V Hack 2.0 National</div></div>
          </div>
          <div className="fbadge f2">
            <div><div className="fb-accent">Flutter + AI</div><div className="fb-label" style={{ marginTop: 3 }}>Core Stack · 3+ Projects</div></div>
          </div>
          {/* Floating Tech */}
          <div className="tech-float t1">React</div>
          <div className="tech-float t2">Python</div>
          <div className="tech-float t3">AI/ML</div>
          <div className="tech-float t4">Flutter</div>
        </div>
      </div>
      <div className="hero-left">
        <div className="hero-badge"><span className="badge-dot" />Open to SDE Internship &amp; Full-time Roles</div>
        <p className="hero-greeting">Hi, I'm <strong>Sai Harsha Chaluvadi</strong> 👋</p>
        <h1 className="hero-title">SOFTWARE<br /><span className="hl">DEVELOPER</span><br />&amp; AI ENGINEER</h1>
        <p className="hero-sub">CS Student at Anurag University · Flutter &amp; AI Engineer · Android Club President · Building production apps that matter.</p>
        <div className="hero-cta">
          <a className="btn-primary" onClick={() => scrollTo("projects")}>View Projects →</a>
          <a className="btn-outline" href="mailto:harshachaluvadi21@gmail.com">Get in Touch</a>
        </div>
      </div>
      <a className="scroll-hint" onClick={() => scrollTo("about")}>Scroll</a>
    </section>
  );
}

function About() {
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
                <img src={PREMIUM_AVATAR_URL} alt="Premium Developer Avatar" className="about-avatar v3" />
                <div className="avatar-overlay"></div>
              </div>
              <div className="floating-bubble b1">React</div>
              <div className="floating-bubble b2">AI</div>
              <div className="floating-bubble b3">Flutter</div>
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
                I work at the intersection of <strong>mobile development, AI/ML, and full-stack engineering</strong> — shipping production-ready products that solve real problems.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-val">81.3%</div>
                <div className="stat-lbl">Academic CGPA</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">3+</div>
                <div className="stat-lbl">Production Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">100+</div>
                <div className="stat-lbl">Students Mentored</div>
              </div>
              <div className="stat-card">
                <div className="stat-val">1st</div>
                <div className="stat-lbl">Hackathon Winner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
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
              <div className="tags">{tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
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
                <div><div className="proj-title">{p.title}</div><div className="proj-sub">{p.sub}</div></div>
                {p.badge && <span className="proj-badge">{p.badge}</span>}
              </div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-impact-lbl">Key Impact</div>
              <ul className="proj-impacts">{p.impacts.map(i => <li key={i}>{i}</li>)}</ul>
              <div className="proj-footer">
                <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                <div className="proj-links">
                  <a href={p.github} className="proj-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                  {p.live && <a href={p.live} className="proj-link" target="_blank" rel="noreferrer">Live Demo ↗</a>}
                </div>
              </div>
            </div>
          ))}

          {/* Wide card */}
          <div className="proj-card wide">
            <div className="proj-num">{WIDE_PROJECT.num}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4, flexWrap: "wrap", gap: 8 }}>
              <div><div className="proj-title">{WIDE_PROJECT.title}</div><div className="proj-sub">{WIDE_PROJECT.sub}</div></div>
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
                <ul className="proj-impacts">{WIDE_PROJECT.impacts.map(i => <li key={i}>{i}</li>)}</ul>
                <div className="tags" style={{ marginTop: 12 }}>{WIDE_PROJECT.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
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
                    <ul className="tl-bullets">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul>
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
                {["DSA","ML","AI","DBMS","OS","Networks","Data Science","Software Engg"].map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
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
              <div><div className="ach-title">{a.title}</div><div className="ach-det">{a.det}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) { showToast("Please fill all fields!"); return; }
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
            <h2 className="contact-heading">Let's Build<br />Something <span>Great</span></h2>
            <p className="contact-sub">I'm actively looking for SDE internship and full-time opportunities. Whether you have a role, a project, or just want to connect — my inbox is always open.</p>
            <a href="mailto:harshachaluvadi21@gmail.com" className="contact-row">
              <div className="ci-icon">✉️</div>
              <div><div className="ci-lbl">Email</div><div className="ci-val">harshachaluvadi21@gmail.com</div></div>
            </a>
            <a href="tel:+919666785449" className="contact-row">
              <div className="ci-icon">📱</div>
              <div><div className="ci-lbl">Phone</div><div className="ci-val">+91 96667 85449</div></div>
            </a>
            <div className="contact-row" style={{ cursor: "default" }}>
              <div className="ci-icon">📍</div>
              <div><div className="ci-lbl">Location</div><div className="ci-val">Hyderabad, India</div></div>
            </div>
            <div className="socials">
              <a href="https://linkedin.com/in/saiharshachaluvadi" className="soc-btn" target="_blank" rel="noreferrer"><LinkedinIcon /></a>
              <a href="https://github.com/harshachaluvadi21" className="soc-btn" target="_blank" rel="noreferrer"><GithubIcon /></a>
              <a href="mailto:harshachaluvadi21@gmail.com" className="soc-btn"><EmailIcon /></a>
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

function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo"><span>S</span>ai Harsha Chaluvadi</div>
          <div className="footer-meta" style={{ marginTop: 5 }}>Software Developer · Hyderabad, India</div>
        </div>
        <div className="footer-links">
          <a href="https://github.com/saiharshachaluvadi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/saiharshachaluvadi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:harshachaluvadi21@gmail.com">Email</a>
        </div>
        <div className="footer-meta">Built with ♥ · © 2026</div>
      </div>
    </footer>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ msg: "", show: false });

  useFadeIn();

  const showToast = (msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 3000);
  };

  return (
    <>
      <style>{CSS}</style>
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
