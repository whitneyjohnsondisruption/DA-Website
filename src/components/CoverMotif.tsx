"use client";

import { useEffect, useRef } from "react";

const RING_COUNT = 14;

// Four non-harmonic sine terms with independent amplitude/phase — an
// irregular, lumpy closed curve (like the cover's hand-traced contour)
// rather than a mathematically even flower/mandala. Fixed once per mount
// so every ring is an offset copy of the same asymmetric blob.
function makeShape() {
  const terms = [
    { freq: 1, amp: 1, phase: Math.random() * Math.PI * 2 },
    { freq: 3, amp: 0.55, phase: Math.random() * Math.PI * 2 },
    { freq: 5, amp: 0.3, phase: Math.random() * Math.PI * 2 },
    { freq: 2, amp: 0.4, phase: Math.random() * Math.PI * 2 },
  ];
  return (theta: number, drift: number) =>
    terms.reduce(
      (sum, t) => sum + t.amp * Math.sin(theta * t.freq + t.phase + drift),
      0
    );
}

type CoverMotifProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function CoverMotif({
  width = 320,
  height = 320,
  className,
}: CoverMotifProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    const rMax = Math.min(width, height) * 0.48;
    const rMin = rMax * 0.48; // wider hollow center, matching the cover
    const shape = makeShape();
    const state = { drift: 0 };
    let raf = 0;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Vertical wash: coral at the top of the ring cluster, teal at the
      // bottom — the cover colors by position, not by which ring is inner
      // or outer.
      const gradient = ctx.createLinearGradient(cx, cy - rMax, cx, cy + rMax);
      gradient.addColorStop(0, "#e2795c");
      gradient.addColorStop(1, "#1899a2");

      for (let i = 0; i < RING_COUNT; i++) {
        const ringT = i / (RING_COUNT - 1);
        const baseR = rMin + ringT * (rMax - rMin);
        const amp = rMax * 0.05;

        ctx.beginPath();
        const steps = 160;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const r = baseR + amp * shape(theta, state.drift);
          const x = cx + r * Math.cos(theta);
          const y = cy + r * Math.sin(theta);
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.3;
        ctx.globalAlpha = 0.9;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    frame();

    if (!reduceMotion) {
      const loop = () => {
        state.drift += 0.0012;
        frame();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width, height }}
      className={className}
      aria-hidden="true"
    />
  );
}
