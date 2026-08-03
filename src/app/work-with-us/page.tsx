import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EngagementScale from "@/components/EngagementScale";
import SpeakingReel from "@/components/SpeakingReel";

export const metadata: Metadata = {
  title: "Work With Us | Disruption Advisors",
  description:
    "Coaching, executive coaching, facilitated offsites, and leadership transformation programs — for one person, or a hundred thousand.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-cream py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <span className="text-xs font-bold tracking-widest text-teal uppercase">
              Work With Us
            </span>
            <h1 className="mt-3 text-3xl font-bold text-balance sm:text-5xl">
              If you&rsquo;d like to keep the conversation going, we&rsquo;d
              love that.
            </h1>
            <p className="mt-6 max-w-[60ch] font-serif text-xl text-ink italic">
              &ldquo;My favorite conversations are the ones that don&rsquo;t
              stop at the margins. If you&rsquo;d like to keep yours going
              &mdash; for yourself, your team, or your organization &mdash;
              I (and my amazing team) would love that.&rdquo;
            </p>
            <p className="mt-4 text-sm text-warm-grey">
              &mdash; Whitney, from the P.S. of <i>Steady</i>
            </p>
          </div>
        </section>

        <EngagementScale />
        <SpeakingReel />

        <section id="contact" className="bg-cream py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              One person, or a hundred thousand &mdash; tell us where you are.
            </h2>
            <p className="mt-4 text-warm-grey">
              Drop us a note and we&rsquo;ll figure out the right fit
              together.
            </p>
            <a
              href="mailto:workwithus@thedisruptionadvisors.com"
              className="mt-7 inline-flex rounded-full bg-teal px-8 py-4 text-sm font-bold text-white transition hover:bg-teal-dim"
            >
              workwithus@thedisruptionadvisors.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
