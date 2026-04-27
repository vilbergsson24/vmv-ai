import React, { useEffect, useRef, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext.jsx';
import { LOCALE_LABEL, LOCALE_SHORT, SUPPORTED_LOCALES } from '../i18n/translations.js';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  return (
    <div className="lang" ref={ref}>
      <button
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        <span className="lang__code">{LOCALE_SHORT[locale]}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className="lang__menu" role="listbox">
          {SUPPORTED_LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                className={`lang__item ${l === locale ? 'is-active' : ''}`}
                onClick={() => { setLocale(l); setOpen(false); }}
              >
                <span className="lang__short">{LOCALE_SHORT[l]}</span>
                <span>{LOCALE_LABEL[l]}</span>
                {l === locale && (
                  <svg className="lang__check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        .lang { position: relative; }
        .lang__btn {
          display: inline-flex; align-items: center; gap: 8px;
          height: 38px; padding: 0 12px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--border-strong);
          color: var(--text);
          font-size: 13px;
          font-weight: 500;
          backdrop-filter: blur(8px);
          transition: background 150ms ease, border-color 150ms ease;
        }
        .lang__btn:hover { background: var(--surface-strong); border-color: rgba(255,255,255,0.28); }
        .lang__code { letter-spacing: 0.06em; }

        .lang__menu {
          position: absolute; right: 0; top: calc(100% + 8px);
          min-width: 168px;
          padding: 6px;
          margin: 0;
          list-style: none;
          background: rgba(15, 16, 36, 0.92);
          backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.6);
          z-index: 60;
          animation: langIn 160ms ease-out;
        }
        @keyframes langIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }

        .lang__item {
          width: 100%;
          display: flex; align-items: center; gap: 10px;
          padding: 10px 12px;
          background: transparent;
          border: none;
          color: var(--text-muted);
          font: inherit;
          font-size: 14px;
          border-radius: 10px;
          text-align: left;
          transition: background 120ms ease, color 120ms ease;
        }
        .lang__item:hover { background: rgba(255,255,255,0.06); color: var(--text); }
        .lang__item.is-active { color: var(--text); background: rgba(168,85,247,0.10); }
        .lang__short {
          display: inline-grid; place-items: center;
          width: 28px; height: 22px;
          font-size: 10px; font-weight: 600; letter-spacing: 0.08em;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border-strong);
          border-radius: 6px;
          color: var(--text);
        }
        .lang__check { margin-left: auto; color: var(--accent); }
      `}</style>
    </div>
  );
}
