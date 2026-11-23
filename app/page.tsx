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
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { hospitalSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Vatsalya Bal Rugnalay | Child Care in Karanja Lad",
  description: "Vatsalya Bal Rugnalay is a child-focused hospital in Karanja Lad, Washim. Contact the team for child care and skin-care consultation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={hospitalSchema()} />
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
