const TIERS = [
  {
    scale: "One person",
    title: "Coaching",
    body: "Growth work for one person at a time — grounded in the S Curve, built around where you actually are.",
    proof:
      "“Your coaching helped us all discover our own strengths. And more importantly, a mutual respect for each other. Thank you for being our guide, challenger, and inspiration.”",
    proofAttr: "Shirley W.",
  },
  {
    scale: "One leader",
    title: "Executive Coaching",
    body: "One-on-one work with senior leaders to grow their organization. Limited availability by design.",
    proof: "Limited availability — a small, deliberately-kept roster.",
    proofAttr: null,
  },
  {
    scale: "One team, in a room",
    title: "Facilitated Offsites",
    body: "Custom offsites that build individual and team growth together, in person.",
    proof:
      "“I cannot express my gratitude enough for what you did for us this week. Your kind approach, inspiration, discipline, openness, and challenges will help me, and the team, grow.”",
    proofAttr: "Rafael O.",
  },
  {
    scale: "One organization — up to 100,000",
    title: "Leadership Audits & Transformation Programs",
    body: "Leadership audits and transformation programs that build both powers into how a whole organization works, at any scale.",
    proof:
      "“Whitney's latest book, Smart Growth, provides a valuable framework for those on a personal S-Curve of learning — which is all of us! We had such a great conversation about the book, and Whitney's personal S-Curve jump.”",
    proofAttr: "Jeff Saviano, Ernst & Young",
  },
];

export default function EngagementScale() {
  return (
    <section className="bg-cool-grey py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-2 sm:mb-14">
          <span className="text-xs font-bold tracking-widest text-teal uppercase">
            How We Work Together
          </span>
          <h2 className="max-w-[26ch] text-2xl font-bold text-balance sm:text-4xl">
            One person, or a hundred thousand.
          </h2>
        </div>
        <div className="flex flex-col gap-px border border-ink/10 bg-ink/10">
          {TIERS.map((tier) => (
            <div
              key={tier.title}
              className="grid grid-cols-1 gap-4 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr]"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-teal uppercase">
                  {tier.scale}
                </span>
                <h3 className="mt-1 text-xl font-bold">{tier.title}</h3>
                <p className="mt-2 max-w-[46ch] text-sm text-warm-grey">
                  {tier.body}
                </p>
              </div>
              <div className="flex items-center border-t border-ink/10 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <div>
                  <p className="font-serif text-base text-ink italic">
                    {tier.proof}
                  </p>
                  {tier.proofAttr && (
                    <p className="mt-2 text-sm text-warm-grey">
                      &mdash; {tier.proofAttr}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
