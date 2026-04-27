import React from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

const avatars = [
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
];

export default function Testimonials() {
  const { t } = useLocale();
  const quotes = t.testimonials.items.map((q, i) => ({ ...q, avatar: avatars[i] }));

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />{t.testimonials.eyebrow}</span>
          <h2>{t.testimonials.title} <span className="gradient-text">{t.testimonials.accent}</span></h2>
        </div>

        <div className="quotes">
          {quotes.map((q, i) => (
            <figure key={q.name} className="card quote reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <svg className="quote__mark" width="36" height="28" viewBox="0 0 36 28" fill="none" aria-hidden="true">
                <path d="M0 28V18C0 8.06 5.4 1.4 16 0v6.5C10.4 7.7 7.5 11.6 7.5 17H14V28H0zM22 28V18c0-9.94 5.4-16.6 16-18v6.5C32.4 7.7 29.5 11.6 29.5 17H36V28H22z" fill="url(#qg)"/>
                <defs>
                  <linearGradient id="qg" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#a855f7"/>
                    <stop offset="1" stopColor="#22d3ee"/>
                  </linearGradient>
                </defs>
              </svg>
              <blockquote>{q.q}</blockquote>
              <figcaption className="quote__cap">
                <img src={q.avatar} alt="" className="quote__avatar" />
                <div>
                  <div className="quote__name">{q.name}</div>
                  <div className="quote__role">{q.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .quotes { grid-template-columns: 1fr; } }

        .quote { display: flex; flex-direction: column; gap: 24px; }
        .quote__mark { opacity: 0.9; }
        .quote blockquote {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: 19px;
          line-height: 1.5;
          color: var(--text);
          margin: 0;
          letter-spacing: -0.01em;
        }
        .quote__cap { display: flex; align-items: center; gap: 12px; margin: 0; padding-top: 16px; border-top: 1px solid var(--border); }
        .quote__avatar { width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-strong); }
        .quote__name { font-weight: 500; font-size: 14px; }
        .quote__role { font-size: 12px; color: var(--text-dim); }
      `}</style>
    </section>
  );
}
