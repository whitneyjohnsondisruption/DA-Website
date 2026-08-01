"use client";

import { useEffect, useRef } from "react";

const CORAL: [number, number, number] = [226, 121, 92];
const TEAL: [number, number, number] = [24, 153, 162];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mixColor(t: number) {
  const clamped = Math.max(0, Math.min(1, t));
  const [r, g, b] = [0, 1, 2].map((i) =>
    Math.round(lerp(CORAL[i], TEAL[i], clamped))
  );
  return `rgb(${r},${g},${b})`;
}

type Point = { x: number; y: number; t: number };

function buildPath(w: number, h: number, phase: number): Point[] {
  const cx = w / 2;
  const topPad = h * 0.05;
  const squiggleEnd = h * 0.52;
  const radius = h * 0.19;
  const circleCenterY = squiggleEnd + radius;

  const points: Point[] = [];

  const squiggleSteps = 160;
  for (let i = 0; i <= squiggleSteps; i++) {
    const f = i / squiggleSteps;
    const y = topPad + f * (squiggleEnd - topPad);
    const ease = Math.pow(1 - f, 1.1); // amplitude tapers as it calms down
    const amp = w * 0.2 * ease;
    const freq = lerp(7.5, 1.6, Math.pow(f, 0.7)); // busy scribble calming to slow waves
    const wobble = Math.sin(f * 23 + phase * 3) * ease * w * 0.03; // small irregular jitter, chaotic only near the top
    const x = cx + amp * Math.sin(f * freq * Math.PI * 2 + phase) + wobble;
    points.push({ x, y, t: f * 0.58 });
  }

  const circleSteps = 110;
  for (let i = 0; i <= circleSteps; i++) {
    const g = i / circleSteps;
    const angle = -Math.PI / 2 + g * Math.PI * 2;
    const x = cx + radius * Math.cos(angle);
    const y = circleCenterY + radius * Math.sin(angle);
    points.push({ x, y, t: 0.58 + g * 0.42 });
  }

  return points;
}

type CoverMotifProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function CoverMotif({
  width = 320,
  height = 420,
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

    const state = { phase: 0 };
    let raf = 0;
    const bands = 22;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const points = buildPath(width, height, state.phase);
      const perBand = Math.ceil(points.length / bands);

      for (let b = 0; b < bands; b++) {
        const start = b * perBand;
        const end = Math.min(points.length - 1, start + perBand);
        if (start >= end) continue;
        const slice = points.slice(start, end + 1);
        const avgT = slice.reduce((sum, p) => sum + p.t, 0) / slice.length;

        ctx.beginPath();
        slice.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = mixColor(avgT);
        ctx.lineWidth = lerp(3, 1.4, avgT);
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lerp(0.75, 0.95, avgT);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    frame();

    if (!reduceMotion) {
      const loop = () => {
        state.phase += 0.0025;
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
