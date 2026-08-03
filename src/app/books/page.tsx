import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Books | Whitney Johnson",
  description:
    "Smart Growth, Disrupt Yourself, Build an A Team, Dare Dream Do, and the upcoming Steady — Whitney Johnson's books on growth, disruption, and stability.",
};

const BOOKS = [
  {
    title: "Steady",
    subtitle: "The Power of Stability in a Disrupted World",
    body: "A new book on the corresponding power disruption has always required. Coming April 6, 2027.",
    quote:
      "“Churn feels like progress. Stasis feels like calm. Both are counterfeits.”",
    quoteAttr: "From Chapter 2",
    cta: "See the book",
    href: "#steady-note",
    isSteady: true,
  },
  {
    title: "Smart Growth",
    subtitle: "How to Grow Your People to Grow Your Company",
    body: "A compact, complete guide to what growth looks like for you and your team.",
    quote:
      "“If I were a CEO, I'd want every one of my leaders to read this human, engaging, and realistic book about building high-performance, high-growth teams.”",
    quoteAttr: "Rita McGrath, Professor, Columbia Business School",
    cta: "Purchase now",
    href: "https://www.amazon.com/dp/1647821150?tag=whitneyjohnson-20",
  },
  {
    title: "Disrupt Yourself",
    subtitle: "Master Relentless Change and Speed Up Your Learning Curve",
    body: "How the frameworks of disruptive innovation apply to individuals — because companies don't disrupt, people do.",
    quote:
      "“Disrupt Yourself reads like a handbook for innovation: it shows the incredible value of recognizing what you are good at and finding unexpected ways to apply those strengths to the marketplace.”",
    quoteAttr: "Steve Wozniak, Co-Founder, Apple, Inc.",
    cta: "Purchase now",
    href: "https://www.amazon.com/dp/1633698785?tag=whitneyjohnson-20",
  },
  {
    title: "Build an A Team",
    subtitle: "Play to Their Strengths and Lead Them Up the Learning Curve",
    body: "How to apply the S Curve and Personal Disruption frameworks to build a high-performing team.",
    quote:
      "“Build an A Team is an important book for managers who want to help their team members learn, grow and realize their potential.”",
    quoteAttr: "Clayton M. Christensen, author of The Innovator's Dilemma",
    cta: "Purchase now",
    href: "https://www.amazon.com/dp/1633693643?tag=whitneyjohnson-20",
  },
  {
    title: "Dare, Dream, Do",
    subtitle: "Remarkable Things Happen When You Dare to Dream",
    body: "A three-step model for personal advancement and happiness.",
    quote:
      "“A book that is hopeful, honest, and beautifully written. Her wisdom combined with the amazing stories make dreaming accessible and practical without diminishing its power or magic.”",
    quoteAttr: "Brené Brown, Ph.D., author of Daring Greatly",
    cta: "Purchase now",
    href: "https://www.amazon.com/dp/1937134121?tag=whitneyjohnson-20",
  },
];

export default function BooksPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-ink py-16 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <span className="text-xs font-bold tracking-widest text-teal uppercase">
              Books
            </span>
            <h1 className="mt-3 text-3xl font-bold text-balance text-cream sm:text-5xl">
              Five books on growth, disruption, and staying steady.
            </h1>
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-24 lg:py-28">
          <div className="mx-auto flex max-w-4xl flex-col gap-px border border-ink/10 bg-ink/10 px-5 sm:px-8">
            {BOOKS.map((book) => (
              <div
                key={book.title}
                className="grid grid-cols-1 gap-6 bg-white p-6 sm:p-8 lg:grid-cols-[1fr_1.3fr]"
              >
                <div>
                  <h2 className="font-serif text-2xl text-ink italic">
                    {book.title}
                  </h2>
                  <p className="mt-1 text-sm text-warm-grey">
                    {book.subtitle}
                  </p>
                  <a
                    href={book.href}
                    className="mt-4 inline-flex text-sm font-bold text-teal"
                  >
                    {book.cta} &rarr;
                  </a>
                </div>
                <div className="border-t border-ink/10 pt-4 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <p className="text-sm text-warm-grey">{book.body}</p>
                  <p className="mt-4 font-serif text-base text-ink italic">
                    {book.quote}
                  </p>
                  <p className="mt-2 text-sm text-warm-grey">
                    &mdash; {book.quoteAttr}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            id="steady-note"
            className="mx-auto mt-6 max-w-4xl px-5 text-sm text-warm-grey sm:px-8"
          >
            Steady&rsquo;s full page lives at the homepage&rsquo;s Steady
            section for now &mdash; a dedicated <code>/steady</code> launch
            page is next in line.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
