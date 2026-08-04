const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Books", href: "/books" },
  { label: "Steady", href: "/steady" },
  { label: "Podcast", href: "/#offerings" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <a
          href="/"
          className="flex items-center gap-2.5 font-serif text-2xl font-semibold tracking-tight whitespace-nowrap text-ink"
        >
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <circle
              cx="13"
              cy="13"
              r="11.5"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="1.4"
            />
            <circle
              cx="13"
              cy="13"
              r="6.5"
              fill="none"
              stroke="var(--color-coral)"
              strokeWidth="1.4"
            />
          </svg>
          Disruption Advisors
        </a>
        <nav className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 lg:flex lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs font-bold tracking-widest text-ink uppercase hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/work-with-us"
            className="rounded-full border border-ink/15 px-6 py-3 text-sm font-bold whitespace-nowrap text-ink transition hover:border-teal hover:text-teal"
          >
            Start a Conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
