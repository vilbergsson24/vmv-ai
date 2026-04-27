import React from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

export default function CTA() {
  const { t } = useLocale();
  return (
    <section id="contact" className="cta">
      <div className="container">
        <div className="cta__card reveal">
          <div className="cta__bg" aria-hidden="true">
            <div className="cta__orb cta__orb--a" />
            <div className="cta__orb cta__orb--b" />
            <svg className="cta__grid" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaGrid" width="48" height="48" patternUnits="userSpaceOnUse">
                  <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          <div className="cta__inner">
            <span className="eyebrow"><span className="dot" />{t.cta.eyebrow}</span>
            <h2>{t.cta.title} <span className="gradient-text">{t.cta.accent}</span></h2>
            <p>{t.cta.sub}</p>

            <form className="cta__form" onSubmit={(e) => { e.preventDefault(); alert(t.cta.thanks); }}>
              <input type="email" required placeholder={t.cta.placeholder} aria-label="Email" />
              <button type="submit" className="btn btn-primary">
                {t.cta.submit}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
            <div className="cta__small">{t.cta.small}</div>
          </div>
        </div>
      </div>

      <style>{`
        .cta { padding: 60px 0 120px; }
        .cta__card {
          position: relative;
          border-radius: var(--radius-xl);
          padding: 80px 48px;
          overflow: hidden;
          border: 1px solid var(--border-strong);
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01));
          isolation: isolate;
        }
        .cta__bg { position: absolute; inset: 0; z-index: 0; }
        .cta__grid { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.6; mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%); }
        .cta__orb {
          position: absolute; border-radius: 50%;
          filter: blur(80px);
          mix-blend-mode: screen;
        }
        .cta__orb--a { width: 500px; height: 500px; background: radial-gradient(circle, #a855f7, transparent 60%); top: -200px; left: -100px; opacity: 0.55; animation: drift1 20s ease-in-out infinite alternate; }
        .cta__orb--b { width: 400px; height: 400px; background: radial-gradient(circle, #22d3ee, transparent 60%); bottom: -180px; right: -80px; opacity: 0.5; animation: drift2 24s ease-in-out infinite alternate; }
        .cta__inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 18px; }
        .cta__inner h2 { font-size: clamp(36px, 5vw, 60px); }
        .cta__inner p { font-size: 18px; max-width: 560px; }
        .cta__form { display: flex; gap: 10px; margin-top: 14px; width: 100%; max-width: 520px; }
        .cta__form input {
          flex: 1; height: 52px; padding: 0 18px; border-radius: 999px;
          background: rgba(0,0,0,0.4);
          border: 1px solid var(--border-strong);
          color: var(--text);
          font-size: 15px;
          font-family: inherit;
          outline: none;
          transition: border-color 200ms ease;
        }
        .cta__form input::placeholder { color: var(--text-dim); }
        .cta__form input:focus { border-color: var(--primary); box-shadow: 0 0 0 4px rgba(168,85,247,0.18); }
        .cta__small { font-size: 12px; color: var(--text-dim); margin-top: 6px; }

        @media (max-width: 600px) {
          .cta__card { padding: 60px 24px; }
          .cta__form { flex-direction: column; }
          .cta__form input { width: 100%; }
          .cta__form .btn { justify-content: center; width: 100%; }
        }

        @keyframes drift1 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(80px,40px) scale(1.1); } }
        @keyframes drift2 { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(-60px,30px) scale(1.15); } }
      `}</style>
    </section>
  );
}
