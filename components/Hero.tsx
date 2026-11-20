import { hospital } from "@/lib/content";
import HeroPhoto from "./HeroPhoto";

export default function Hero() {
  return <section id="home" className="relative isolate flex min-h-[100svh] overflow-hidden bg-primary sm:min-h-[760px] lg:min-h-[calc(100vh-1px)]">
    <HeroPhoto />
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(12,33,49,.86)_0%,rgba(12,33,49,.7)_28%,rgba(12,33,49,.22)_50%,transparent_75%),linear-gradient(0deg,rgba(12,33,49,.38),transparent_44%)] sm:bg-[linear-gradient(90deg,rgba(12,33,49,.8)_0%,rgba(12,33,49,.57)_31%,rgba(12,33,49,.18)_52%,transparent_72%),linear-gradient(0deg,rgba(12,33,49,.22),transparent_42%)]" />
    <div className="relative z-10 mx-auto flex w-full max-w-content items-end px-5 pb-14 pt-32 sm:items-center sm:pb-20 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="max-w-[235px] animate-riseIn sm:max-w-xl">
        <div className="flex items-center gap-3"><span className="h-px w-8 shrink-0 bg-warm" /><p className="mr-display text-[13px] leading-relaxed text-warm sm:text-lg">{hospital.taglineMr}</p></div>
        <h1 className="mt-5 font-display text-[2.35rem] leading-[1.04] tracking-tightish text-cream sm:max-w-2xl sm:text-[4.25rem] sm:leading-[1.02] lg:text-[5.15rem]">Caring for little lives,<br />every day.</h1>
        <p className="mt-5 max-w-md font-body text-[14px] leading-relaxed text-cream/90 sm:mt-6 sm:text-[17px]">Thoughtful pediatric care for children and families in Karanja, with comfort and clear guidance at every step.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"><a href={hospital.phoneHref} className="rounded-pill bg-cream px-5 py-3 font-body text-[14px] text-primary shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:py-3.5 sm:text-[15px]">Call Now</a><a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-pill bg-warm px-5 py-3 font-body text-[14px] text-cream shadow-soft transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3.5 sm:text-[15px]">WhatsApp</a></div>
        <div className="mt-8 flex items-center gap-3 text-cream/90 sm:mt-11"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s-7.5-4.7-10-9.4C.6 8.1 2.3 4 6.3 4c2 0 3.7 1.1 4.7 2.7C12 5.1 13.7 4 15.7 4c4 0 5.7 4.1 4.3 7.6C19.5 16.3 12 21 12 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg><span className="font-body text-[13px] leading-snug sm:text-sm">Karanja Lad, Washim, Maharashtra</span></div>
      </div>
    </div>
  </section>;
}
