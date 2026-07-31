"use client";

import { useEffect, useRef } from "react";

const CORAL: [number, number, number] = [226, 121, 92];
const TEAL: [number, number, number] = [24, 153, 162];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mixColor(t: number) {
  const [r, g, b] = [0, 1, 2].map((i) =>
    Math.round(lerp(CORAL[i], TEAL[i], t))
  );
  return `rgb(${r},${g},${b})`;
}

type RingMotifProps = {
  size?: number;
  rings?: number;
  chaos?: number;
  className?: string;
};

export default function RingMotif({
  size = 120,
  rings = 6,
  chaos = 1,
  className,
}: RingMotifProps) {
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
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = size * 0.46;
    const state = { t: 0 };
    let raf = 0;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, size, size);
      for (let i = 0; i < rings; i++) {
        const t = i / (rings - 1);
        const r = maxR * (1 - t * 0.82);
        const amp = chaos * (1 - t) * (r * 0.06);
        const freq = 5 + i;
        ctx.beginPath();
        const steps = 90;
        for (let s = 0; s <= steps; s++) {
          const a = (s / steps) * Math.PI * 2;
          const wobble = amp * Math.sin(a * freq + state.t + i);
          const rr = r + wobble;
          const x = cx + Math.cos(a) * rr;
          const y = cy + Math.sin(a) * rr;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.lineWidth = lerp(2.2, 1.1, t);
        ctx.strokeStyle = mixColor(t);
        ctx.globalAlpha = lerp(0.55, 0.95, t);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    frame();

    if (!reduceMotion) {
      const loop = () => {
        state.t += 0.0035;
        frame();
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [size, rings, chaos]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={className}
      aria-hidden="true"
    />
  );
}
