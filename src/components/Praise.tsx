export default function Praise() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="text-xs font-bold tracking-widest text-teal uppercase">
            Praise
          </span>
          <span className="text-[0.68rem] font-bold tracking-widest text-flag uppercase">
            Steady quotes are placeholder &mdash; do not publish
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <figure>
            <blockquote className="font-serif text-xl text-ink italic">
              &ldquo;Read this book now.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-warm-grey">
              [Placeholder] &mdash; Seth Godin
            </figcaption>
          </figure>
          <figure>
            <blockquote className="font-serif text-xl text-ink italic">
              &ldquo;This book is NextGen quiet.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-warm-grey">
              [Placeholder] &mdash; Susan Cain
            </figcaption>
          </figure>
        </div>
        <div className="mt-12 border-t border-ink/10 pt-10">
          <span className="text-xs font-bold tracking-widest text-warm-grey uppercase">
            On Smart Growth &mdash; real, published
          </span>
          <blockquote className="mt-4 max-w-[60ch] font-serif text-lg text-ink italic">
            &ldquo;This book is tremendous. I couldn&rsquo;t stop reading. An
            elegantly simple framework and a seriously smart book.&rdquo;
          </blockquote>
          <figcaption className="mt-3 text-sm text-warm-grey">
            &mdash; Stephen M.R. Covey
          </figcaption>
        </div>
      </div>
    </section>
  );
}
