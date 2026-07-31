import RingMotif from "./RingMotif";

const TIERS = [
  { label: "10–15+", body: "Signed copies" },
  { label: "25+", body: "Signed copies + a virtual book-club visit" },
  { label: "Larger buys", body: "Let’s talk about what’s possible" },
];

export default function SteadyFeature() {
  return (
    <section id="steady" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-sm bg-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <RingMotif size={280} rings={6} chaos={1} />
          </div>
          <div className="relative flex h-full flex-col justify-between p-5">
            <span className="text-[0.62rem] tracking-widest text-cream/70 uppercase">
              A new book &middot; April 6, 2027
            </span>
            <div>
              <h4 className="font-serif text-3xl text-white italic">
                Steady
              </h4>
              <span className="text-xs text-cream/70">Whitney Johnson</span>
            </div>
          </div>
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest text-chartreuse uppercase">
            A New Book &middot; April 6, 2027
          </span>
          <p className="mt-3 font-serif text-2xl text-balance text-cream italic sm:text-3xl">
            Steady: The Power of Stability in a Disrupted World
          </p>
          <p className="mt-1 text-sm text-cream/60">
            by Whitney Johnson, author of Smart Growth and Disrupt Yourself
          </p>
          <p className="mt-5 max-w-[56ch] text-cream/80">
            Buying for your team? Every copy gets both powers into more
            hands.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 rounded-md border border-cream/15 p-5 sm:grid-cols-3 sm:p-7">
            {TIERS.map((tier) => (
              <div key={tier.label}>
                <b className="block text-chartreuse">{tier.label}</b>
                <span className="text-sm text-cream/70">{tier.body}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="https://www.amazon.com/dp/1774586630"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dim"
            >
              Pre-order on Amazon
            </a>
            <a
              href="#capture"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              See all retailers
            </a>
          </div>
          <p className="mt-5 text-sm text-cream/50">
            Amazon is live today. Barnes &amp; Noble, Indigo, Bookshop.org,
            Books-A-Million and local stores are coming soon as links land.
          </p>
        </div>
      </div>
    </section>
  );
}
