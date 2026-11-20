import { doctors, hospital } from "@/lib/content";
import { images } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

export default function Doctors() {
  const doctor = doctors.pediatrician;

  return (
    <section id="doctors" className="bg-canvasWarm py-24 lg:py-32">
      <div className="mx-auto grid max-w-content gap-10 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20 lg:px-10">
        <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] bg-[linear-gradient(145deg,#d9e5e7_0%,#f7f5f0_52%,#c47a5a_180%)] sm:min-h-[480px]">
          <PhotoFrame
            slot={images.doctorNilesh}
            className="rounded-tr-[5rem] rounded-bl-[5rem]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="pb-2">
          <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-warm">Meet your child specialist</p>
          <h2 className="mt-5 font-display text-[2.8rem] leading-none text-primary sm:text-[4.4rem]">{doctor.name}</h2>
          <p className="mt-5 font-body text-base font-medium text-warm">{doctor.qualification}</p>
          <p className="mt-2 font-display text-2xl text-primary">{doctor.role}</p>
          <div className="mt-10 border-l border-warm pl-5">
            <p className="font-body text-[16px] leading-relaxed text-ink/75">For information about pediatric care and available services, contact the hospital team.</p>
          </div>
          <a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex rounded-pill border border-primary/25 px-6 py-3 font-body text-[15px] text-primary transition-colors hover:bg-primary hover:text-cream">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
