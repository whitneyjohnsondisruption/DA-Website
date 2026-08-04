const STAGES = [
  { label: "Launch Point", x: 90, tickX: 90 },
  { label: "Sweet Spot", x: 300, tickX: 300 },
  { label: "Mastery", x: 500, tickX: 500 },
];

export default function SCurveDiagram() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-teal uppercase">
          How Growth Actually Works
        </span>
        <h2 className="mt-3 max-w-[22ch] text-2xl font-bold text-balance sm:text-4xl">
          The S Curve&trade;
        </h2>
        <p className="mt-4 max-w-[60ch] text-warm-grey">
          Whitney&rsquo;s trademarked framework for what growth looks and
          feels like &mdash; the same model behind every engagement,
          personal or organizational.
        </p>

        <div className="mt-10 overflow-x-auto">
          <svg
            width="600"
            height="320"
            viewBox="0 0 600 320"
            className="min-w-[540px]"
          >
            <defs>
              <linearGradient id="s-curve-line" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="#e2795c" />
                <stop offset="1" stopColor="#1899a2" />
              </linearGradient>
            </defs>

            {/* axes */}
            <line
              x1="50"
              y1="20"
              x2="50"
              y2="260"
              stroke="var(--color-ink)"
              strokeOpacity="0.25"
            />
            <line
              x1="50"
              y1="260"
              x2="560"
              y2="260"
              stroke="var(--color-ink)"
              strokeOpacity="0.25"
            />
            <text
              x="50"
              y="14"
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.05em"
              fill="var(--color-warm-grey)"
            >
              GROWTH
            </text>
            <text
              x="560"
              y="278"
              textAnchor="end"
              fontSize="11"
              fontWeight="700"
              letterSpacing="0.05em"
              fill="var(--color-warm-grey)"
            >
              TIME
            </text>

            {/* the curve */}
            <path
              d="M60 240 C 140 240 190 236 220 210 C 260 176 300 70 380 48 C 440 32 500 28 550 26"
              fill="none"
              stroke="url(#s-curve-line)"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* stage markers */}
            {STAGES.map((s) => (
              <g key={s.label}>
                <line
                  x1={s.tickX}
                  y1="260"
                  x2={s.tickX}
                  y2="285"
                  stroke="var(--color-ink)"
                  strokeOpacity="0.2"
                  strokeDasharray="3 3"
                />
                <text
                  x={s.tickX}
                  y="302"
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  letterSpacing="0.03em"
                  fill="var(--color-teal)"
                >
                  {s.label.toUpperCase()}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
