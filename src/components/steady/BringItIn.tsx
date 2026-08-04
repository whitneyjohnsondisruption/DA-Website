export default function BringItIn() {
  return (
    <section className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-coral uppercase">
          Bring It In
        </span>
        <h2 className="mt-3 text-2xl font-bold text-balance text-cream sm:text-4xl">
          Turn the idea into how your organization works.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-md bg-teal p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white">Bring a keynote</h3>
            <p className="mt-2 text-sm text-white/85">
              Book Whitney to speak on the human side of disruption &mdash;
              and the stability that makes transformation stick.
            </p>
            <a
              href="/work-with-us#speaking"
              className="mt-5 inline-flex rounded-full border border-white/50 px-5 py-2.5 text-sm font-bold text-white"
            >
              Speaking inquiry
            </a>
          </div>
          <div className="rounded-md bg-cream/10 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-cream">
              Build both powers into your organization
            </h3>
            <p className="mt-2 text-sm text-cream/70">
              Work with Disruption Advisors to make disruption and stability
              corresponding powers on your team &mdash; not competing ones.
            </p>
            <a
              href="/work-with-us"
              className="mt-5 inline-flex rounded-full border border-cream/40 px-5 py-2.5 text-sm font-bold text-cream"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
