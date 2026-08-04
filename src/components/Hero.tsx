export default function Hero() {
  return (
    <section id="top" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="text-xs font-bold tracking-widest text-teal uppercase">
            CEO, Disruption Advisors &middot; Thinkers50
          </span>
          <h1 className="mt-4 text-4xl leading-[1.1] font-bold text-balance text-cream sm:text-5xl lg:text-6xl">
            In a world that demands constant motion,{" "}
            <em className="font-serif text-coral font-normal italic">
              stillness
            </em>{" "}
            is a revolution.
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-cream/80">
            For the past few decades, the answer has seemed to be more
            disruption or more change. Transformation actually runs on two
            corresponding powers &mdash;
            the will to disrupt, and the strength to stay steady. Disruption
            Advisors helps leaders build both.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#offerings"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dim"
            >
              Work With Disruption Advisors
            </a>
            <a
              href="/steady"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              Pre-order Steady
            </a>
          </div>
        </div>
        <div className="hidden justify-center lg:flex" aria-hidden="true">
          <svg
            width="320"
            height="220"
            viewBox="0 0 320 220"
            fill="none"
            className="opacity-40"
          >
            <defs>
              <linearGradient
                id="hero-s-curve"
                x1="0"
                y1="220"
                x2="320"
                y2="0"
              >
                <stop offset="0" stopColor="#e2795c" />
                <stop offset="1" stopColor="#1899a2" />
              </linearGradient>
            </defs>
            <path
              d="M8 188C60 188 96 188 112 156C132 116 148 40 200 24C240 12 280 12 312 12"
              stroke="url(#hero-s-curve)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
