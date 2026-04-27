import React from 'react';

export default function Footer() {
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
            <p>An AI automation, digitalization and design studio building intelligent systems for ambitious teams.</p>
          </div>

          <div className="footer__cols">
            <div>
              <div className="footer__h">Studio</div>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
              <a href="#work">Case studies</a>
              <a href="#testimonials">Clients</a>
            </div>
            <div>
              <div className="footer__h">Company</div>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <div className="footer__h">Connect</div>
              <a href="#">LinkedIn</a>
              <a href="#">X / Twitter</a>
              <a href="#">Dribbble</a>
              <a href="#">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Nyra Studio. All rights reserved.</span>
          <span className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
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
