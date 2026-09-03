import { doctors, hospital } from "@/lib/content";

export default function Doctors() {
  const doctor = doctors[0];
  return <section id="doctors" className="bg-canvasWarm py-24 lg:py-32">
    <div className="mx-auto grid max-w-content gap-10 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:gap-20 lg:px-10">
      <div className="relative min-h-[360px] overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] bg-[linear-gradient(145deg,#d9e5e7_0%,#f7f5f0_52%,#c47a5a_180%)] p-8 sm:min-h-[480px]">
        <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full border border-primary/15" /><div className="absolute bottom-10 left-8 h-20 w-20 rounded-full bg-warm/20" />
        <p className="relative font-display text-6xl italic text-primary/15 sm:text-8xl">Dr</p>
        <p className="absolute bottom-8 left-8 right-8 font-body text-xs leading-relaxed text-primary/60">Portrait area reserved for Dr. Nikita Pawar&rsquo;s verified photograph.</p>
      </div>
      <div className="pb-2"><p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-warm">Meet your doctor</p><h2 className="mt-5 font-display text-[2.8rem] leading-none text-primary sm:text-[4.4rem]">{doctor.name}</h2><p className="mt-5 font-body text-base font-medium text-warm">{doctor.qualification}</p><p className="mt-2 font-display text-2xl text-primary">{doctor.role}</p><p className="mr mt-1 text-[15px] text-ink/60">{doctor.roleMr}</p><div className="mt-10 border-l border-warm pl-5"><p className="font-body text-[16px] leading-relaxed text-ink/75">For questions about available services, get in touch directly with the hospital team.</p></div><a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-pill border border-primary/25 px-6 py-3 font-body text-[15px] text-primary transition-colors hover:bg-primary hover:text-cream">WhatsApp</a></div>
    </div>
  </section>;
}
