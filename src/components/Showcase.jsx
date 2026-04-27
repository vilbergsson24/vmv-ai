import React from 'react';

// Curated Unsplash images that read as "AI / digital / design studio"
const projects = [
  {
    client: 'Helix Logistics',
    title: 'Autonomous dispatch agent for a 1,400-driver fleet',
    tags: ['AI Automation', 'Operations'],
    metric: '38% faster routing',
    img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1400&q=80',
    accent: 'violet',
  },
  {
    client: 'Northwind Health',
    title: 'AI triage assistant deployed across 24 clinics',
    tags: ['Healthcare AI', 'Product'],
    metric: '6.4× faster intake',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    accent: 'cyan',
  },
  {
    client: 'Kallio Capital',
    title: 'Investor-grade research dashboard, fully redesigned',
    tags: ['Digitalization', 'Design'],
    metric: '92 → 14 hours / report',
    img: 'https://images.unsplash.com/photo-1551288049-1c9b16e1d4c8?auto=format&fit=crop&w=1400&q=80',
    accent: 'magenta',
  },
  {
    client: 'Polaris Studios',
    title: 'Brand system + AI-assisted content engine',
    tags: ['Brand', 'AI Content'],
    metric: '11× publishing volume',
    img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=80',
    accent: 'gold',
  },
];

export default function Showcase() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow"><span className="dot" />Selected work</span>
          <h2>Outcomes, <span className="gradient-text">not deliverables.</span></h2>
          <p>A small sample of recent engagements. Every case study is a measured business outcome, not a screenshot of a UI.</p>
        </div>

        <div className="show">
          {projects.map((p, i) => (
            <a className={`show__card reveal show__card--${p.accent}`} key={p.client} style={{ transitionDelay: `${i * 80}ms` }} href="#">
              <div className="show__media">
                <img src={p.img} alt={p.client} loading="lazy" />
                <div className="show__overlay" />
                <div className="show__metric">{p.metric}</div>
              </div>
              <div className="show__body">
                <div className="show__tags">
                  {p.tags.map((t) => <span key={t} className="show__tag">{t}</span>)}
                </div>
                <div className="show__client">{p.client}</div>
                <h3 className="show__title">{p.title}</h3>
                <span className="show__cta">
                  Read case study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H8M17 7v9"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .show {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 800px) { .show { grid-template-columns: 1fr; } }

        .show__card {
          display: flex; flex-direction: column;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 250ms ease, border-color 200ms ease, box-shadow 250ms ease;
        }
        .show__card:hover {
          transform: translateY(-4px);
          border-color: var(--border-strong);
          box-shadow: 0 30px 70px -25px rgba(0,0,0,0.6);
        }
        .show__media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
        }
        .show__media img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms ease;
          filter: saturate(0.9);
        }
        .show__card:hover .show__media img { transform: scale(1.04); }
        .show__overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg, transparent 50%, rgba(6,6,17,0.85) 100%),
            linear-gradient(135deg, rgba(168,85,247,0.25), transparent 60%);
          mix-blend-mode: multiply;
        }
        .show__card--cyan .show__overlay   { background: linear-gradient(180deg, transparent 50%, rgba(6,6,17,0.85) 100%), linear-gradient(135deg, rgba(34,211,238,0.25), transparent 60%); }
        .show__card--magenta .show__overlay{ background: linear-gradient(180deg, transparent 50%, rgba(6,6,17,0.85) 100%), linear-gradient(135deg, rgba(236,72,153,0.25), transparent 60%); }
        .show__card--gold .show__overlay   { background: linear-gradient(180deg, transparent 50%, rgba(6,6,17,0.85) 100%), linear-gradient(135deg, rgba(245,208,97,0.25), transparent 60%); }

        .show__metric {
          position: absolute; top: 18px; left: 18px;
          padding: 8px 14px;
          background: rgba(10,10,20,0.6);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-strong);
          border-radius: 999px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }
        .show__body { padding: 24px 28px 28px; }
        .show__tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
        .show__tag {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--text-muted);
          padding: 4px 10px;
          border: 1px solid var(--border-strong);
          border-radius: 999px;
        }
        .show__client { font-size: 12px; color: var(--text-dim); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 6px; }
        .show__title { font-size: 22px; line-height: 1.25; font-weight: 500; margin-bottom: 18px; }
        .show__cta { display: inline-flex; align-items: center; gap: 8px; font-size: 14px; color: var(--accent); }
      `}</style>
    </section>
  );
}
