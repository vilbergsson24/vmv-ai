import React, { useEffect, useRef } from 'react';
import AnimatedBackground from './AnimatedBackground.jsx';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    // subtle parallax on mouse move
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      if (titleRef.current) {
        titleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero">
      <AnimatedBackground />

      <div className="container hero__inner">
        <span className="eyebrow reveal in"><span className="dot" />AI · Automation · Design Studio</span>

        <h1 ref={titleRef} className="hero__title reveal in">
          <span className="gradient-text">Intelligent systems</span><br />
          for ambitious teams.
        </h1>

        <p className="hero__sub reveal in">
          Nyra is an AI automation, digitalization and design agency. We turn manual workflows
          into autonomous products — pairing custom AI engineering with brand-grade design so the
          result feels effortless to use, and impossible to ignore.
        </p>

        <div className="hero__cta reveal in">
          <a href="#contact" className="btn btn-primary">
            Start a project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#work" className="btn btn-ghost">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Watch reel
          </a>
        </div>

        <div className="hero__meta reveal in">
          <div>
            <strong>40+</strong>
            <span>shipped automations</span>
          </div>
          <div className="div" />
          <div>
            <strong>12</strong>
            <span>countries served</span>
          </div>
          <div className="div" />
          <div>
            <strong>98%</strong>
            <span>retention rate</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="line" />
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          padding: 180px 0 120px;
          overflow: hidden;
          isolation: isolate;
        }
        .hero__inner {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 28px;
        }
        .hero__title {
          max-width: 16ch;
          will-change: transform;
          transition: transform 200ms ease-out;
        }
        .hero__sub {
          max-width: 640px;
          font-size: 18px;
          color: var(--text-muted);
        }
        .hero__cta { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; margin-top: 12px; }
        .hero__meta {
          display: flex; align-items: center; gap: 28px;
          margin-top: 56px;
          padding: 18px 28px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
          flex-wrap: wrap;
          justify-content: center;
        }
        .hero__meta div { display: flex; flex-direction: column; align-items: center; min-width: 90px; }
        .hero__meta strong { font-family: var(--font-display); font-size: 22px; font-weight: 500; color: var(--text); }
        .hero__meta span { font-size: 12px; color: var(--text-dim); margin-top: 2px; letter-spacing: 0.04em; }
        .hero__meta .div { width: 1px; height: 28px; background: var(--border-strong); min-width: 1px; }

        .hero__scroll {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          color: var(--text-dim); font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          z-index: 2;
        }
        .hero__scroll .line {
          width: 1px; height: 56px;
          background: linear-gradient(180deg, var(--text-dim), transparent);
          animation: scrollLine 2.4s ease-in-out infinite;
          transform-origin: top;
        }
        @keyframes scrollLine {
          0% { transform: scaleY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: scaleY(1); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
