const QUESTIONS = [
  "Am I cared for?",
  "Does that care translate into consistent, reliable support?",
  "Does what I do matter to anyone?",
];

export default function SitWithIt() {
  return (
    <section className="bg-cool-grey py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-teal uppercase">
          Sit With It
        </span>
        <h2 className="mt-3 text-2xl font-bold text-balance sm:text-4xl">
          Three questions to carry into your week.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3">
          {QUESTIONS.map((q) => (
            <div
              key={q}
              className="flex min-h-[120px] items-center bg-white p-6 font-serif text-lg text-ink italic"
            >
              {q}
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[60ch] text-sm text-warm-grey italic">
          When the answer to all three is yes, people can do outstanding
          work &mdash; and when the moment is right, transformative work.
        </p>
      </div>
    </section>
  );
}
