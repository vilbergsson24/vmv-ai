import React, { useEffect, useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#" className="nav__logo">
          <span className="nav__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <defs>
                <linearGradient id="navg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#a855f7" />
                  <stop offset="1" stopColor="#22d3ee" />
                </linearGradient>
              </defs>
              <path d="M8 23V9l8 9V9l8 14" fill="none" stroke="url(#navg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="nav__word">Nyra</span>
        </a>

        <nav className="nav__links" aria-label="Main">
          <a href="#services">{t.nav.services}</a>
          <a href="#process">{t.nav.process}</a>
          <a href="#work">{t.nav.work}</a>
          <a href="#testimonials">{t.nav.clients}</a>
        </nav>

        <div className="nav__cta">
          <LanguageSwitcher />
          <a href="#contact" className="btn btn-ghost nav__book">{t.nav.cta}</a>
        </div>
      </div>

      <style>{`
        .nav {
          position: fixed; inset: 0 0 auto 0; z-index: 50;
          padding: 18px 0;
          transition: backdrop-filter 200ms ease, background 200ms ease, padding 200ms ease, border-color 200ms ease;
          border-bottom: 1px solid transparent;
        }
        .nav--scrolled {
          padding: 10px 0;
          background: rgba(10, 10, 20, 0.65);
          backdrop-filter: blur(14px) saturate(140%);
          border-bottom-color: var(--border);
        }
        .nav__inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; }
        .nav__logo { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-display); font-weight: 600; font-size: 20px; letter-spacing: -0.01em; }
        .nav__mark {
          width: 36px; height: 36px; border-radius: 10px;
          display: grid; place-items: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02));
          border: 1px solid var(--border-strong);
        }
        .nav__links { display: flex; gap: 28px; }
        .nav__links a { font-size: 14px; color: var(--text-muted); transition: color 150ms ease; }
        .nav__links a:hover { color: var(--text); }
        .nav__cta { display: flex; align-items: center; gap: 10px; }
        @media (max-width: 768px) {
          .nav__links { display: none; }
          .nav__book { display: none; }
        }
      `}</style>
    </header>
  );
}
