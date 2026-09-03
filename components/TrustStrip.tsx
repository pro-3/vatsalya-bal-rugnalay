import { trustStrip } from "@/lib/content";

export default function TrustStrip() {
  return (
    <section className="relative z-20 -mt-px border-y border-primary/10 bg-cream">
      <div className="mx-auto grid max-w-content grid-cols-2 px-5 sm:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {trustStrip.map((item, i) => (
          <div key={item.en} className="group flex flex-col items-center gap-2 border-b border-primary/10 px-3 py-7 text-center last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
            <span className="font-display text-lg text-primary/35">0{i + 1}</span>
            <span className="font-body text-[14px] font-medium text-primary">{item.en}</span>
            <span className="mr text-[12px] text-ink/55">{item.mr}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
