import { doctors, hospital, skinServices } from "@/lib/content";
import { images } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

export default function SkinCare() {
  const doc = doctors[0];
  return (
    <section id="skin-care" className="bg-primary py-20 text-cream lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div>
          <p className="mr-display text-lg text-gold">वात्सल्य त्वचा केंद्र</p>
          <h2 className="mt-2 font-display text-[2rem] leading-tight sm:text-[2.4rem]">
            Vatsalya Skin Care Clinic
          </h2>
          <p className="mt-5 max-w-md font-body text-[15.5px] leading-relaxed text-cream/80">
            A dedicated clinical space for skin and hair concerns, led by
            {" "}
            {doc.name} ({doc.qualification}), {doc.role}.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
            {skinServices.map((s) => (
              <li key={s} className="flex items-center gap-2 font-body text-[14px] text-cream/85">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {s}
              </li>
            ))}
          </ul>

          <a
            href={hospital.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex rounded-pill bg-gold px-7 py-3.5 font-body text-[15px] text-primary shadow-soft transition-transform hover:-translate-y-0.5"
          >
            WhatsApp
          </a>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl shadow-soft">
          <PhotoFrame slot={images.skinCare} className="rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-2xl rounded-bl-2xl" />
        </div>
      </div>
    </section>
  );
}
