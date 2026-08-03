const LOGOS = [
  "AWS",
  "Kraft Heinz",
  "BeautyBio",
  "BBQGuys",
  "CSU",
  "YPO",
  "WOBI",
  "World Bank",
];

export default function SpeakingReel() {
  return (
    <section id="speaking" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <span className="text-xs font-bold tracking-widest text-coral uppercase">
          Bring Whitney to Speak
        </span>
        <h2 className="mt-3 max-w-[22ch] text-2xl font-bold text-balance text-cream sm:text-4xl">
          Inspire growth and change on your stage.
        </h2>
        <div className="mt-10 aspect-video w-full overflow-hidden rounded-md border border-cream/15">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Mbg3ZvWnkAQ"
            title="Whitney Johnson Keynote Speaker Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-6 max-w-[60ch] font-serif text-lg text-cream italic">
          &ldquo;The audience absolutely loved you. They loved your
          genuineness &mdash; which shined through every word. An absolute
          homerun.&rdquo;
        </p>
        <p className="mt-2 text-sm text-cream/60">
          &mdash; Martin Lindstrom, NY Times bestselling author
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-8 text-sm tracking-wide text-cream/50 uppercase">
          <span className="text-xs text-cream/40">Delivered keynotes for</span>
          {LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <a
            href="mailto:workwithus@thedisruptionadvisors.com?subject=Speaking%20Inquiry"
            className="rounded-full bg-teal px-7 py-3.5 text-sm font-bold text-white transition hover:bg-teal-dim"
          >
            Speaking Inquiry
          </a>
          <a
            href="https://thedisruptionadvisors.com/wp-content/uploads/DA-Press-Kit-v3-COMPRESSED.pdf"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-bold text-cream transition hover:bg-cream/10"
          >
            Download Speaker Kit
          </a>
        </div>
      </div>
    </section>
  );
}
