"use client";

import { useEffect, useRef } from "react";

const RING_COUNT = 15;
const LOBES = 7; // matching the book cover's petal-like wobble count

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
    const rMax = Math.min(width, height) * 0.47;
    const rMin = rMax * 0.42; // hollow center, like the cover's title space
    const state = { phase: 0 };
    let raf = 0;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Vertical wash: coral at the top of the ring cluster, teal at the
      // bottom — the cover colors by position, not by which ring is inner
      // or outer.
      const gradient = ctx.createLinearGradient(
        cx,
        cy - rMax,
        cx,
        cy + rMax
      );
      gradient.addColorStop(0, "#e2795c");
      gradient.addColorStop(1, "#1899a2");

      for (let i = 0; i < RING_COUNT; i++) {
        const ringT = i / (RING_COUNT - 1);
        const baseR = rMin + ringT * (rMax - rMin);
        const amp = rMax * 0.045;
        const ringPhase = state.phase + ringT * 0.6;

        ctx.beginPath();
        const steps = 140;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const wobble =
            amp * Math.sin(theta * LOBES + ringPhase) +
            amp * 0.4 * Math.sin(theta * (LOBES + 3) - ringPhase * 1.3);
          const r = baseR + wobble;
          const x = cx + r * Math.cos(theta);
          const y = cy + r * Math.sin(theta);
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.4;
        ctx.globalAlpha = 0.9;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    frame();

    if (!reduceMotion) {
      const loop = () => {
        state.phase += 0.0018;
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
