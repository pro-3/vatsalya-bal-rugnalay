import { facilityImages } from "@/lib/content";
import { images, type ImageSlot } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

const imageMap: Record<string, ImageSlot> = {
  exterior: images.facilityExterior,
  reception: images.facilityReception,
  "patient-room": images.facilityPatientRoom,
  nicu: images.facilityNicu,
  equipment: images.facilityEquipment,
  care: images.facilityCare,
};

const spans = [
  "sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "",
  "",
];

export default function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-content px-5 py-20 lg:px-10 lg:py-28">
      <div className="max-w-xl">
        <h2 className="font-display text-[2rem] leading-tight text-primary sm:text-[2.4rem]">
          Inside Vatsalya
        </h2>
        <p className="mr-display mt-2 text-lg text-warm">वात्सल्यच्या सुविधा</p>
        <p className="mt-4 font-body text-[15.5px] leading-relaxed text-ink/75">
          A look at the spaces where families spend their time with us —
          designed to feel calm rather than clinical.
        </p>
      </div>

      <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] sm:grid-cols-3 lg:gap-5">
        {facilityImages.map((item, i) => (
          <div
            key={item.key}
            className={`group relative overflow-hidden rounded-card ${spans[i] ?? ""}`}
          >
            <PhotoFrame
              slot={imageMap[item.key]}
              className="transition-transform duration-700 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-body text-[13px] text-cream">{item.label}</p>
              <p className="mr text-[12px] text-cream/80">{item.labelMr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
