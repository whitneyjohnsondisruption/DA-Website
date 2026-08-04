export default function DiscussIt() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-teal uppercase">
          Discuss It
        </span>
        <h2 className="mt-3 text-2xl font-bold text-balance sm:text-4xl">
          The best conversations don&rsquo;t stop at the margins.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2">
          <div className="bg-white p-6 sm:p-8">
            <span className="inline-block rounded-full bg-cool-grey px-3 py-1 text-xs font-bold text-ink uppercase">
              Coming for launch
            </span>
            <h3 className="mt-4 text-lg font-bold">
              Team &amp; book-club discussion guide
            </h3>
            <p className="mt-2 text-sm text-warm-grey">
              A facilitator-ready guide for your team, book club, or
              classroom. Join the launch list and we&rsquo;ll send it the
              moment it&rsquo;s ready.
            </p>
            <form className="mt-5 flex flex-wrap gap-2.5">
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="min-w-[180px] flex-1 rounded-full border border-ink/15 px-4 py-2.5 text-sm"
              />
              <button
                type="submit"
                className="rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-white"
              >
                Send me the guide
              </button>
            </form>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold">Companion podcast</h3>
            <p className="mt-2 text-sm text-warm-grey">
              While the Steady episodes are in production, start with the
              Disrupt Yourself podcast &mdash; the relaunched show arrives
              this fall.
            </p>
            <a
              href="/#offerings"
              className="mt-5 inline-flex rounded-full border border-ink/15 px-5 py-2.5 text-sm font-bold text-ink"
            >
              Listen now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
