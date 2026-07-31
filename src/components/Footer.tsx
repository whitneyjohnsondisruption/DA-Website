const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Speaking", href: "#offerings" },
      { label: "Services", href: "#offerings" },
      { label: "Contact", href: "#capture" },
    ],
  },
  {
    heading: "Read",
    links: [
      { label: "Steady", href: "#steady" },
      { label: "Smart Growth", href: "#offerings" },
      { label: "Disrupt Yourself", href: "#offerings" },
    ],
  },
  {
    heading: "Listen & Read",
    links: [
      { label: "Podcast", href: "#offerings" },
      { label: "D is for Disruption newsletter", href: "#capture" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-7 text-cream/80 sm:pt-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <span className="font-serif text-xl text-cream">
            Disruption Advisors
          </span>
          <p className="mt-3 max-w-[28ch] text-sm text-cream/60">
            Helping leaders build both powers &mdash; the disruption that
            moves you forward, and the stability that makes it last.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <h5 className="mb-4 text-xs tracking-widest text-cream/50 uppercase">
              {col.heading}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-chartreuse"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-cream/15 px-5 pt-5 text-sm text-cream/50 sm:px-8">
        <span>&copy; 2026 Disruption Advisors.</span>
        <span>
          <a href="#" className="hover:text-chartreuse">
            Privacy
          </a>{" "}
          &middot;{" "}
          <a href="#" className="hover:text-chartreuse">
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}
