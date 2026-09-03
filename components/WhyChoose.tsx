import { whyChoose } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section className="bg-primary py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-content px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div><p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">Why Vatsalya</p><h2 className="mt-5 max-w-2xl font-display text-[2.5rem] leading-[1.03] sm:text-[4rem]">For little patients.<br />For worried parents.<br />For every stage of growing up.</h2></div>
          <p className="max-w-md font-body text-[16px] leading-relaxed text-cream/72">A thoughtful local setting for pediatric care, where families can ask questions and feel heard.</p>
        </div>
        <div className="mt-14 grid gap-x-10 border-t border-cream/20 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((point, index) => <div key={point} className="flex items-start gap-4 border-b border-cream/20 py-7"><span className="font-display text-xl text-gold">0{index + 1}</span><p className="font-body text-[15.5px] leading-snug text-cream/90">{point}</p></div>)}
        </div>
      </div>
    </section>
  );
}
