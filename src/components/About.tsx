export default function About() {
  return (
    <section id="about" className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-sm bg-cool-grey lg:mx-0 lg:max-w-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(226,121,92,0.35), transparent 55%), radial-gradient(circle at 70% 80%, rgba(24,153,162,0.35), transparent 55%)",
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center font-serif text-5xl text-ink/30">
            WJ
          </span>
          <span className="absolute inset-x-3 bottom-3 rounded-sm bg-cream/85 px-2.5 py-1.5 text-[0.65rem] tracking-wide text-warm-grey uppercase">
            Headshot &mdash; final photo pending
          </span>
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest text-teal uppercase">
            About Whitney
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Hi, I&rsquo;m Whitney.
          </h2>
          <p className="mt-2 text-sm font-bold tracking-wide text-teal">
            CEO, Disruption Advisors &middot; Thinkers50
          </p>
          <p className="mt-5 max-w-[58ch] text-warm-grey">
            I come to organizations as a strategic advisor, keynote speaker,
            and author. I co-founded the Disruptive Innovation Fund with
            Clayton Christensen, and I&rsquo;ve been named among the
            world&rsquo;s top management thinkers by Thinkers50 since 2015.
          </p>
          <p className="mt-6 max-w-[56ch] font-serif text-lg text-ink italic">
            &ldquo;My ideas are down on the page now. But where they come
            alive is in conversation &mdash; the one that starts when you
            scribble in the margins and ask, what could this mean for me, and
            for the people who matter to me?&rdquo;
          </p>
          <a
            href="#capture"
            className="group mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-teal"
          >
            Read Whitney&rsquo;s full story
            <span className="transition group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
