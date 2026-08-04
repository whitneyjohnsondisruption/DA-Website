import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import RingDivider from "@/components/RingDivider";
import Premise from "@/components/Premise";
import Offerings from "@/components/Offerings";
import SCurveDiagram from "@/components/SCurveDiagram";
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
        <ClientLogos />
        <Premise />
        <RingDivider className="bg-cream" />
        <Offerings />
        <SCurveDiagram />
        <About />
        <SteadyFeature />
        <Praise />
        <Capture />
      </main>
      <Footer />
    </>
  );
}
