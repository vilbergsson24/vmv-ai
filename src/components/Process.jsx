import React from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Process() {
  const { t } = useLocale();
  const steps = t.process.steps.map((s, i) => ({ ...s, n: String(i + 1).padStart(2, '0') }));

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />{t.process.eyebrow}</span>
          <h2>
            {t.process.titleA} <span className="gradient-text">{t.process.accentA}</span> {t.process.titleB}
          </h2>
          <p>{t.process.sub}</p>
        </div>

        <div className="steps">
          {steps.map((s, i) => (
            <div key={s.n} className="step reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="step__num">
                <span>{s.n}</span>
                <div className="step__ring" />
              </div>
              <div className="step__body">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process { background:
          radial-gradient(ellipse at 80% 0%, rgba(34,211,238,0.08), transparent 50%),
          radial-gradient(ellipse at 0% 100%, rgba(168,85,247,0.08), transparent 50%);
        }
        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          position: relative;
        }
        .steps::before {
          content: ""; position: absolute; left: 0; right: 0; top: 28px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
        }
        @media (max-width: 900px) {
          .steps { grid-template-columns: repeat(2, 1fr); }
          .steps::before { display: none; }
        }
        @media (max-width: 540px) { .steps { grid-template-columns: 1fr; } }

        .step { padding: 0 8px; }
        .step__num {
          width: 56px; height: 56px; border-radius: 50%;
          display: grid; place-items: center;
          background: var(--bg);
          border: 1px solid var(--border-strong);
          font-family: var(--font-display);
          font-weight: 500;
          color: var(--text);
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .step__num span { position: relative; z-index: 1; }
        .step__ring {
          position: absolute; inset: -4px; border-radius: 50%;
          background: conic-gradient(from 0deg, #a855f7, #22d3ee, #ec4899, #a855f7);
          z-index: 0;
          opacity: 0.3;
          filter: blur(6px);
          animation: spin 8s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .step h3 { font-size: 24px; font-weight: 500; margin-bottom: 8px; }
        .step p { font-size: 14px; line-height: 1.6; }
      `}</style>
    </section>
  );
}
