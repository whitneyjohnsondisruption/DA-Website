const RETAILERS = [
  { name: "Amazon", href: "https://www.amazon.com/dp/1774586630", live: true },
  { name: "Barnes & Noble", live: false },
  { name: "Indigo", live: false },
  { name: "Bookshop.org", live: false },
  { name: "Books-A-Million", live: false },
  { name: "Your Local Store", live: false },
];

const TIERS = [
  { label: "10–15+", body: "Signed copies" },
  { label: "25+", body: "Signed copies + a virtual book-club visit" },
  { label: "Larger buys", body: "Let’s talk about what’s possible" },
];

export default function ReadIt() {
  return (
    <section id="read" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-teal uppercase">
          Read It
        </span>
        <h2 className="mt-3 text-2xl font-bold text-balance sm:text-4xl">
          Pre-order now, however you like to buy.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {RETAILERS.map((r) =>
            r.live ? (
              <a
                key={r.name}
                href={r.href}
                className="bg-white p-5 text-center text-sm font-bold text-teal"
              >
                {r.name}
                <span className="block text-xs font-normal text-warm-grey">
                  Live
                </span>
              </a>
            ) : (
              <div
                key={r.name}
                className="bg-white p-5 text-center text-sm font-bold text-warm-grey/70"
              >
                {r.name}
                <span className="block text-xs font-normal text-warm-grey/50">
                  Coming soon
                </span>
              </div>
            )
          )}
        </div>

        <p className="mt-6 text-sm text-warm-grey">
          Prefer to buy local? A few of Whitney&rsquo;s favorites:{" "}
          <b>Leaf and Lore</b> (Buena Vista, VA), <b>Downtown Books</b>{" "}
          (Lexington, VA), and <b>Author&rsquo;s Note</b> (Medina, NY).
        </p>

        <div className="mt-10 rounded-md bg-cool-grey p-6 sm:p-8">
          <p className="text-sm font-bold text-ink uppercase">
            Buying for your team?
          </p>
          <p className="mt-1 text-sm text-warm-grey">
            Bulk orders come with extras &mdash; and every copy gets both
            powers into more hands.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TIERS.map((tier) => (
              <div key={tier.label}>
                <b className="block text-teal">{tier.label}</b>
                <span className="text-sm text-warm-grey">{tier.body}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-warm-grey">
            Order in bulk through <b>Porchlight</b>, <b>BookPal</b>, or{" "}
            <b>Books-A-Million</b> &mdash;{" "}
            <a href="#contact" className="font-bold text-teal">
              or talk to us
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
