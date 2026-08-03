import CoverMotif from "./CoverMotif";

export default function Hero() {
  return (
    <section id="top" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="text-xs font-bold tracking-widest text-teal uppercase">
            CEO, Disruption Advisors &middot; Thinkers50
          </span>
          <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-balance text-cream sm:text-5xl lg:text-6xl">
            Your people aren&rsquo;t resisting change.
            <br />
            They&rsquo;re{" "}
            <em className="font-serif text-coral font-normal italic">
              exhausted
            </em>{" "}
            by it.
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
              href="#steady"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              Pre-order Steady
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <CoverMotif width={360} height={360} />
        </div>
      </div>
    </section>
  );
}
