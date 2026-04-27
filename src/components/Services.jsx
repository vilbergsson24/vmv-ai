import React from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

// Icons + accent colors are static (locale-independent), copy comes from translations.
const meta = [
  { accent: 'violet',  icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></svg>) },
  { accent: 'cyan',    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 10h18M8 14h2M12 14h4"/></svg>) },
  { accent: 'magenta', icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7-3-3-7 7-1 4 4-1z"/><path d="M14 5l3 3"/></svg>) },
  { accent: 'gold',    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>) },
  { accent: 'violet',  icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>) },
  { accent: 'cyan',    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 10 15 10"/></svg>) },
];

export default function Services() {
  const { t } = useLocale();
  const services = t.services.items.map((s, i) => ({ ...s, ...meta[i] }));

  return (
    <section id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />{t.services.eyebrow}</span>
          <h2><span className="gradient-text">{t.services.titleAccent}</span> {t.services.titleRest}</h2>
          <p>{t.services.sub}</p>
        </div>

        <div className="services">
          {services.map((s, i) => (
            <article key={s.title} className={`card service service--${s.accent} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={`service__icon service__icon--${s.accent}`}>{s.icon}</div>
              <h3 className="service__title">{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service__list">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 980px) { .services { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px) { .services { grid-template-columns: 1fr; } }

        .service { display: flex; flex-direction: column; gap: 14px; min-height: 280px; }
        .service__icon {
          width: 48px; height: 48px; border-radius: 12px;
          display: grid; place-items: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-strong);
          color: #fff;
        }
        .service__icon svg { width: 22px; height: 22px; }
        .service__icon--violet  { background: linear-gradient(135deg, rgba(168,85,247,0.25), rgba(168,85,247,0.05)); color: #d8b4fe; }
        .service__icon--cyan    { background: linear-gradient(135deg, rgba(34,211,238,0.25), rgba(34,211,238,0.05)); color: #67e8f9; }
        .service__icon--magenta { background: linear-gradient(135deg, rgba(236,72,153,0.25), rgba(236,72,153,0.05)); color: #f9a8d4; }
        .service__icon--gold    { background: linear-gradient(135deg, rgba(245,208,97,0.25), rgba(245,208,97,0.05)); color: #fde68a; }

        .service__title { font-size: 22px; font-weight: 500; }
        .service__list { list-style: none; padding: 0; margin: 6px 0 0; display: flex; flex-direction: column; gap: 8px; }
        .service__list li { display: flex; align-items: center; gap: 10px; color: var(--text); font-size: 14px; }
        .service__list svg { color: var(--accent); flex-shrink: 0; }
      `}</style>
    </section>
  );
}
