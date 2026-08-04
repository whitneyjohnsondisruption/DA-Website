import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Premise from "@/components/Premise";
import Praise from "@/components/Praise";
import About from "@/components/About";
import Capture from "@/components/Capture";
import SteadyHero from "@/components/steady/SteadyHero";
import ReadIt from "@/components/steady/ReadIt";
import SitWithIt from "@/components/steady/SitWithIt";
import DiscussIt from "@/components/steady/DiscussIt";
import BringItIn from "@/components/steady/BringItIn";

export const metadata: Metadata = {
  title: "Steady | Whitney Johnson",
  description:
    "Steady: The Power of Stability in a Disrupted World, by Whitney Johnson. Pre-order now — coming April 6, 2027.",
};

export default function SteadyPage() {
  return (
    <>
      <Header />
      <main>
        <SteadyHero />
        <Premise />
        <ReadIt />
        <SitWithIt />
        <DiscussIt />
        <BringItIn />
        <Praise />
        <About />
        <Capture />
      </main>
      <Footer />
    </>
  );
}
