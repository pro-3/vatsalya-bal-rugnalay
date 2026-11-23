import { doctors, hospital, skinServices } from "@/lib/content";
import Link from "next/link";
import { images } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

export default function SkinCare() {
  const doctor = doctors.skinCare;

  return (
    <section id="skin-care" className="bg-primary py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-content px-5 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <p className="mr-display text-lg text-gold">वात्सल्य त्वचा केंद्र</p>
            <h2 className="mt-2 font-display text-[2rem] leading-tight sm:text-[2.4rem]">Vatsalya Skin Care Clinic</h2>
            <p className="mt-5 max-w-xl font-body text-[15.5px] leading-relaxed text-cream/80">
              Skin and hair concerns can vary from person to person. Contact the clinic to discuss your concern and confirm which services are currently available.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
              {skinServices.map((service) => (
                <li key={service} className="flex items-center gap-2 font-body text-[14px] text-cream/85">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {service}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-cream/60">Please contact the clinic to confirm current treatment availability and suitability.</p>
            <a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-pill bg-gold px-7 py-3.5 font-body text-[15px] text-primary shadow-soft transition-transform hover:-translate-y-0.5">WhatsApp</a>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl bg-cream/10 shadow-soft">
            <PhotoFrame slot={images.skinCare} className="rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl" sizes="(min-width: 1024px) 42vw, 100vw" />
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 border-t border-cream/15 pt-12 sm:grid-cols-[180px_1fr] lg:mt-20 lg:gap-12">
          <div className="relative aspect-[3/4] w-full max-w-[180px] overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-cream/10">
            <PhotoFrame slot={images.doctorNikita} className="rounded-tl-[2.5rem] rounded-br-[2.5rem]" sizes="180px" />
          </div>
          <div>
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-gold">Skin care doctor</p>
            <h3 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-4xl">{doctor.name}</h3>
            <p className="mt-3 font-body text-sm font-medium text-gold">{doctor.qualification}</p>
            <p className="mt-1 font-display text-xl text-cream">{doctor.role}</p>
            <p className="mr mt-1 text-sm text-cream/70">{doctor.roleMr}</p>
            <Link href="/doctors/dr-nikita-chavhan" className="mt-5 inline-flex font-body text-sm font-medium text-gold hover:text-cream">View profile →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
