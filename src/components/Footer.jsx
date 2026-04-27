import React from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Footer() {
  const { t } = useLocale();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#22d3ee"/>
                  </linearGradient>
                </defs>
                <path d="M8 23V9l8 9V9l8 14" fill="none" stroke="url(#fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Nyra</span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>

          <div className="footer__cols">
            <div>
              <div className="footer__h">{t.footer.cols.studio.h}</div>
              <a href="#services">{t.footer.cols.studio.services}</a>
              <a href="#process">{t.footer.cols.studio.process}</a>
              <a href="#work">{t.footer.cols.studio.work}</a>
              <a href="#testimonials">{t.footer.cols.studio.clients}</a>
            </div>
            <div>
              <div className="footer__h">{t.footer.cols.company.h}</div>
              <a href="#">{t.footer.cols.company.about}</a>
              <a href="#">{t.footer.cols.company.careers}</a>
              <a href="#">{t.footer.cols.company.press}</a>
              <a href="#">{t.footer.cols.company.contact}</a>
            </div>
            <div>
              <div className="footer__h">{t.footer.cols.connect.h}</div>
              <a href="#">LinkedIn</a>
              <a href="#">X / Twitter</a>
              <a href="#">Dribbble</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Nyra Studio. {t.footer.rights}</span>
          <span className="footer__legal">
            <a href="#">{t.footer.legal.privacy}</a>
            <a href="#">{t.footer.legal.terms}</a>
            <a href="#">{t.footer.legal.cookies}</a>
          </span>
        </div>
      </div>

      <style>{`
        .footer { padding: 80px 0 40px; border-top: 1px solid var(--border); background: var(--bg-deep); }
        .footer__top { display: grid; grid-template-columns: 1.4fr 2fr; gap: 64px; padding-bottom: 56px; border-bottom: 1px solid var(--border); }
        @media (max-width: 800px) { .footer__top { grid-template-columns: 1fr; gap: 40px; } }

        .footer__logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-display); font-size: 22px; font-weight: 600; margin-bottom: 16px; }
        .footer__brand p { max-width: 380px; font-size: 14px; }

        .footer__cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .footer__h { font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 14px; }
        .footer__cols a { display: block; padding: 6px 0; font-size: 14px; color: var(--text-muted); transition: color 150ms ease; }
        .footer__cols a:hover { color: var(--text); }

        .footer__bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 24px;
          font-size: 12px; color: var(--text-dim);
        }
        .footer__legal { display: flex; gap: 18px; }
        .footer__legal a:hover { color: var(--text); }
        @media (max-width: 600px) {
          .footer__bottom { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </footer>
  );
}
