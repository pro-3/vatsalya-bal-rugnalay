import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Introduction from "@/components/Introduction";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Doctors from "@/components/Doctors";
import Facilities from "@/components/Facilities";
import SkinCare from "@/components/SkinCare";
import ParentResources from "@/components/ParentResources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <TrustStrip />
        <Introduction />
        <Services />
        <WhyChoose />
        <Doctors />
        <Facilities />
        <SkinCare />
        <ParentResources />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
