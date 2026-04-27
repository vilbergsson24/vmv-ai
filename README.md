# Nyra — AI Agency Website

A premium, fully-animated marketing site for an AI automation, digitalization and design studio. Built with **React 18 + Vite**.

## Run it

```bash
cd ai-agency-site
npm install
npm run dev
```

Then open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  App.jsx                 # Page composition + scroll-reveal observer
  main.jsx                # React entry
  styles/global.css       # Design tokens, typography, utilities
  components/
    Navbar.jsx            # Sticky nav with backdrop blur on scroll
    Hero.jsx               # Hero copy + parallax title
    AnimatedBackground.jsx # Canvas particle network + animated SVG grid + blurred orbs
    LogoMarquee.jsx        # Auto-scrolling client logos
    Services.jsx           # 6-card services grid
    Process.jsx            # 4-step process with conic-gradient rings
    Showcase.jsx           # Case-study cards with mockup imagery (Unsplash)
    Stats.jsx              # KPI band
    Testimonials.jsx       # 3-up quotes with avatars
    CTA.jsx                # Email-capture w/ animated background
    Footer.jsx             # Full footer
```

## Design tokens

All colors, type, radii and shadows live as CSS variables in `src/styles/global.css`. Swap the brand name "Nyra" globally and adjust `--primary`, `--accent`, etc. to rebrand in minutes.

## Notes on the hero animation

`AnimatedBackground.jsx` is intentionally dependency-free. It composes three layers:

1. **SVG grid** with a radial mask for the technical "engineered" feel.
2. **CSS-animated blurred orbs** (violet / cyan / magenta) drifting at different speeds — the "expensive" glow.
3. **Canvas particle network** — DPR-aware, viewport-density-scaled, repels from cursor, pauses when tab is hidden.

Performance: ~60fps on M-series Macs, ~50fps on mid-range laptops. Particle count auto-scales between 40 and 110 based on viewport area.
