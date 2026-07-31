export default function Capture() {
  return (
    <section
      id="capture"
      className="py-16 text-white sm:py-24"
      style={{
        background:
          "linear-gradient(115deg, var(--color-teal) 0%, var(--color-teal) 55%, #6fb43f 100%)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-7 px-5 sm:px-8">
        <div>
          <h2 className="max-w-[16ch] text-2xl font-bold text-balance sm:text-4xl">
            Be first to know when Steady launches.
          </h2>
          <p className="mt-2 max-w-[40ch] text-white/85">
            One note when the book is out &mdash; plus the discussion guide
            and companion videos as they arrive.
          </p>
        </div>
        <form className="flex flex-wrap gap-2.5">
          <input
            type="email"
            required
            placeholder="you@company.com"
            aria-label="Email address"
            className="min-w-[240px] rounded-full border border-white/60 bg-white/10 px-5 py-3.5 text-white placeholder-white/70 focus:outline-2 focus:outline-white"
          />
          <button
            type="submit"
            className="rounded-full border border-ink bg-ink px-7 py-3.5 text-sm font-bold text-white"
          >
            Keep Me Posted
          </button>
        </form>
      </div>
    </section>
  );
}
