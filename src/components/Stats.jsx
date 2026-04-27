import React from 'react';

const stats = [
  { v: '$42M', l: 'measured client savings', s: 'across 28 active engagements' },
  { v: '14 days', l: 'average to first AI prototype', s: 'from kickoff to working demo' },
  { v: '3.8×', l: 'average team productivity gain', s: 'measured 90 days post-launch' },
  { v: '0', l: 'ghosted projects', s: 'since the studio was founded' },
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div className="stats__card reveal" key={s.l} style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="stats__value gradient-text">{s.v}</div>
              <div className="stats__label">{s.l}</div>
              <div className="stats__sub">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .stats { padding: 80px 0; }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        @media (max-width: 900px) { .stats__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .stats__grid { grid-template-columns: 1fr; } }
        .stats__card {
          padding: 36px 32px;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.005));
        }
        .stats__value { font-family: var(--font-display); font-size: clamp(40px, 5vw, 64px); font-weight: 400; line-height: 1; letter-spacing: -0.02em; }
        .stats__label { margin-top: 12px; font-size: 14px; color: var(--text); }
        .stats__sub   { margin-top: 4px; font-size: 12px; color: var(--text-dim); }
      `}</style>
    </section>
  );
}
