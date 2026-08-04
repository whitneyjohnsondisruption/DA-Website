const LOGOS = [
  "Harvard Business Publishing",
  "Mondelez",
  "Corient",
  "AWS",
  "Kraft Heinz",
  "BeautyBio",
  "BBQGuys",
  "World Bank",
];

export default function ClientLogos() {
  return (
    <section className="border-b border-ink/10 bg-cream py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-bold tracking-widest text-warm-grey uppercase">
          Trusted by teams at
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-sm font-bold tracking-wide text-ink/60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
