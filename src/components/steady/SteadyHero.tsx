import Image from "next/image";

export default function SteadyHero() {
  return (
    <section className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="text-xs font-bold tracking-widest text-coral uppercase">
            A New Book &middot; April 6, 2027
          </span>
          <h1 className="mt-4 text-4xl leading-[1.08] font-bold text-balance text-cream sm:text-5xl lg:text-6xl">
            Your people aren&rsquo;t resisting change. They&rsquo;re{" "}
            <em className="font-serif text-coral font-normal italic">
              exhausted
            </em>{" "}
            by it.
          </h1>
          <p className="mt-5 font-serif text-xl text-cream/90 italic">
            Steady: The Power of Stability in a Disrupted World
          </p>
          <p className="mt-1 text-sm text-cream/60">
            by Whitney Johnson, author of Smart Growth and Disrupt Yourself
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="https://www.amazon.com/dp/1774586630"
              className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dim"
            >
              Pre-order the Book
            </a>
            <a
              href="#read"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
            >
              See All Retailers
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[280px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
          <Image
            src="/steady-cover.jpg"
            alt="Steady: The Power of Stability in a Disrupted World, by Whitney Johnson"
            width={900}
            height={1200}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
