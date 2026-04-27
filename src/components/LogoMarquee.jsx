import React from 'react';

const logos = [
  'Helix', 'Northwind', 'Kallio', 'Vantage', 'Polaris',
  'Atrium', 'Lumen', 'Forma', 'Kinetic', 'Obsidian'
];

export default function LogoMarquee() {
  const list = [...logos, ...logos];
  return (
    <section className="marquee" aria-label="Trusted by">
      <div className="container marquee__head">
        <span className="marquee__label">Trusted by teams shipping the future</span>
      </div>
      <div className="marquee__track-wrap">
        <div className="marquee__track">
          {list.map((name, i) => (
            <div className="marquee__item" key={i}>
              <span className="marquee__dot" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .marquee { padding: 60px 0 40px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: rgba(255,255,255,0.015); }
        .marquee__head { text-align: center; margin-bottom: 24px; }
        .marquee__label { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--text-dim); }
        .marquee__track-wrap { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent); }
        .marquee__track { display: inline-flex; gap: 64px; padding: 8px 32px; animation: marquee 38s linear infinite; white-space: nowrap; }
        .marquee__item { display: inline-flex; align-items: center; gap: 12px; font-family: var(--font-display); font-weight: 500; font-size: 22px; color: rgba(255,255,255,0.55); letter-spacing: -0.01em; }
        .marquee__dot { width: 6px; height: 6px; background: var(--accent); border-radius: 50%; box-shadow: 0 0 10px var(--accent); }
      `}</style>
    </section>
  );
}
