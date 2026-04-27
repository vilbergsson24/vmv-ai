import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground — premium animated hero canvas.
 * Layers:
 *   1. Static gradient mesh + animated CSS orbs (blurred blobs)
 *   2. SVG grid that drifts subtly
 *   3. Canvas particle network (nodes + connecting lines, react to cursor)
 *
 * Performance:
 *   - Canvas uses devicePixelRatio with cap = 2
 *   - Pauses when tab hidden
 *   - Particle count scales with viewport area
 */
export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let particles = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let running = true;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const initParticles = () => {
      const density = Math.max(40, Math.min(110, Math.floor((w * h) / 14000)));
      particles = new Array(density).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
        // assign a color tone — violet, cyan, magenta
        tone: Math.random() < 0.55 ? 'v' : Math.random() < 0.7 ? 'c' : 'm',
      }));
    };

    const colorFor = (tone, alpha) => {
      if (tone === 'v') return `rgba(168, 85, 247, ${alpha})`;
      if (tone === 'c') return `rgba(34, 211, 238, ${alpha})`;
      return `rgba(236, 72, 153, ${alpha})`;
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      // Soft glow background pass (additive)
      ctx.globalCompositeOperation = 'lighter';

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update + draw nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        // mouse repulsion
        const dx = p.x - mx;
        const dy = p.y - my;
        const dm2 = dx * dx + dy * dy;
        if (dm2 < 140 * 140) {
          const f = (140 - Math.sqrt(dm2)) / 140;
          p.x += (dx / Math.sqrt(dm2 + 0.01)) * f * 1.4;
          p.y += (dy / Math.sqrt(dm2 + 0.01)) * f * 1.4;
        }

        // glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        grad.addColorStop(0, colorFor(p.tone, 0.55));
        grad.addColorStop(1, colorFor(p.tone, 0));
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.fillStyle = colorFor(p.tone, 0.9);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lines (network)
      ctx.globalCompositeOperation = 'source-over';
      const linkDist = 130;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / linkDist) * 0.22;
            // tone blend
            const useCyan = a.tone === 'c' || b.tone === 'c';
            const useMag = a.tone === 'm' || b.tone === 'm';
            const stroke = useMag
              ? `rgba(236, 72, 153, ${alpha})`
              : useCyan
              ? `rgba(34, 211, 238, ${alpha})`
              : `rgba(168, 85, 247, ${alpha})`;
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouseRef.current.x = -9999; mouseRef.current.y = -9999; };
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(step);
      else cancelAnimationFrame(raf);
    };

    resize();
    raf = requestAnimationFrame(step);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      {/* SVG grid */}
      <svg className="bg__grid" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
          <radialGradient id="fade" cx="50%" cy="40%" r="60%">
            <stop offset="0" stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="gridMask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
      </svg>

      {/* Animated blurred orbs */}
      <div className="orb orb--violet" />
      <div className="orb orb--cyan" />
      <div className="orb orb--magenta" />

      {/* Canvas particle network */}
      <canvas ref={canvasRef} className="bg__canvas" />

      {/* Top vignette / fade for legibility */}
      <div className="bg__vignette" />

      <style>{`
        .bg { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .bg__grid { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.9; }
        .bg__canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
        .bg__vignette {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 50% 50%, transparent 0%, rgba(6,6,17,0.0) 40%, rgba(6,6,17,0.6) 80%, rgba(6,6,17,0.95) 100%),
            linear-gradient(180deg, transparent 60%, var(--bg-deep) 100%);
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.55;
          mix-blend-mode: screen;
          will-change: transform;
        }
        .orb--violet {
          width: 620px; height: 620px;
          background: radial-gradient(circle, #a855f7, transparent 60%);
          top: -160px; left: -120px;
          animation: drift1 18s ease-in-out infinite alternate;
        }
        .orb--cyan {
          width: 520px; height: 520px;
          background: radial-gradient(circle, #22d3ee, transparent 60%);
          top: 20%; right: -120px;
          animation: drift2 22s ease-in-out infinite alternate;
        }
        .orb--magenta {
          width: 480px; height: 480px;
          background: radial-gradient(circle, #ec4899, transparent 60%);
          bottom: -160px; left: 30%;
          animation: drift3 26s ease-in-out infinite alternate;
          opacity: 0.4;
        }
        @keyframes drift1 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(120px, 60px) scale(1.15); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(-100px, 80px) scale(1.1); }
        }
        @keyframes drift3 {
          0%   { transform: translate(0,0) scale(1); }
          100% { transform: translate(80px, -100px) scale(1.2); }
        }
      `}</style>
    </div>
  );
}
