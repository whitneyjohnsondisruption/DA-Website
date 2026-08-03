const CARDS = [
  {
    eyebrow: "Speaking",
    title: "Bring a keynote",
    body: "Book Whitney to speak on the human side of disruption — and the stability that makes transformation stick.",
    cta: "Speaking inquiry",
    href: "#capture",
  },
  {
    eyebrow: "Services",
    title: "Build both powers in",
    body: "Work with Disruption Advisors to make disruption and stability corresponding powers on your team — not competing ones.",
    cta: "Start a conversation",
    href: "#capture",
  },
  {
    eyebrow: "Book · April 2027",
    title: "Steady",
    body: "Pre-order Whitney’s new book on the power of stability in a disrupted world.",
    cta: "See the book",
    href: "#steady",
  },
  {
    eyebrow: "Podcast",
    title: "Disrupt Yourself",
    body: "Conversations with Brené Brown, James Clear, Alan Mulally, Simon Sinek, and more. Relaunching fall 2026.",
    cta: "Listen now",
    href: "#capture",
  },
];

export default function Offerings() {
  return (
    <section id="offerings" className="bg-cool-grey py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-2 sm:mb-14">
          <span className="flex items-center gap-2 text-xs font-bold tracking-widest text-teal uppercase">
            <svg
              width="28"
              height="16"
              viewBox="0 0 60 30"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 24C4 24 18 24 22 16C26 8 38 4 56 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            How We Help
          </span>
          <h2 className="max-w-[20ch] text-2xl font-bold text-balance sm:text-4xl">
            Two powers, built into how your organization works.
          </h2>
          <p className="max-w-[60ch] text-sm text-warm-grey">
            Every engagement is grounded in the S Curve &mdash; Whitney&rsquo;s
            framework for what growth actually looks like.
          </p>
        </div>
        <div className="flex flex-wrap gap-px border border-ink/10 bg-ink/10">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[220px] flex-1 basis-[240px] flex-col gap-3.5 bg-white p-6 sm:p-8"
            >
              <span className="text-xs font-bold tracking-widest text-teal uppercase">
                {card.eyebrow}
              </span>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="flex-1 text-sm text-warm-grey">{card.body}</p>
              {card.cta && card.href && (
                <a
                  href={card.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-teal"
                >
                  {card.cta}
                  <span className="transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
