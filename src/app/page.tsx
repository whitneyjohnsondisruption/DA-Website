import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RingDivider from "@/components/RingDivider";
import Premise from "@/components/Premise";
import Offerings from "@/components/Offerings";
import About from "@/components/About";
import SteadyFeature from "@/components/SteadyFeature";
import Praise from "@/components/Praise";
import Capture from "@/components/Capture";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RingDivider className="bg-ink" />
        <Premise />
        <RingDivider className="bg-cream" />
        <Offerings />
        <RingDivider className="bg-cool-grey" />
        <About />
        <SteadyFeature />
        <Praise />
        <Capture />
      </main>
      <Footer />
    </>
  );
}
