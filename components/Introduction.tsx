import { images } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

export default function Introduction() {
  return (
    <section id="about" className="relative mx-auto max-w-content px-5 py-24 lg:px-10 lg:py-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-20">
        <div className="relative order-2 aspect-[5/4] overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl shadow-card lg:order-1">
          <PhotoFrame slot={images.introduction} className="rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-2xl rounded-bl-2xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 bg-primary px-6 py-5 text-cream sm:px-8"><p className="font-display text-xl">Care, with time to listen.</p></div>
        </div>
        <div className="order-1 lg:order-2">
          <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-warm">About Vatsalya</p>
          <h2 className="mt-4 font-display text-[2.25rem] leading-[1.05] text-primary sm:text-[3.25rem]">A calm place for your child&rsquo;s care.</h2>
          <p className="mr-display mt-3 text-lg text-warm">आपल्या मुलांच्या आरोग्यासाठी विश्वासू ठिकाण.</p>
          <p className="mt-7 max-w-lg font-body text-[16px] leading-relaxed text-ink/80">Vatsalya Bal Rugnalay offers pediatric care for children and families in Karanja. We aim to make each visit feel clear, considered and reassuring for parents and young patients.</p>
          <p className="mt-4 max-w-lg font-body text-[16px] leading-relaxed text-ink/80">Our approach is simple: listen carefully, explain clearly, and support families with thoughtful care.</p>
        </div>
      </div>
    </section>
  );
}
