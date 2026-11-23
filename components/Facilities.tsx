import { facilityImages } from "@/lib/content";
import { images, type ImageSlot } from "@/lib/images";
import PhotoFrame from "./PhotoFrame";

const imageMap: Record<string, ImageSlot> = {
  exterior: images.facilityExterior,
  approach: images.facilityApproach,
  reception: images.facilityReception,
  corridor: images.facilityCorridor,
  "patient-room": images.facilityPatientRoom,
  "ward-room": images.facilityWardRoom,
  "care-room": images.facilityCareRoom,
  "examination-room": images.facilityExaminationRoom,
};

export default function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-content px-5 py-20 lg:px-10 lg:py-28">
      <div className="max-w-xl">
        <h2 className="font-display text-[2rem] leading-tight text-primary sm:text-[2.4rem]">
          Inside Vatsalya
        </h2>
        <p className="mr-display mt-2 text-lg text-warm">वात्सल्यच्या सुविधा</p>
        <p className="mt-4 font-body text-[15.5px] leading-relaxed text-ink/75">
          A look at the hospital spaces and facilities. These photographs show
          the actual premises shared by the hospital.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {facilityImages.map((item) => (
          <div key={item.key} className="group relative aspect-[3/4] overflow-hidden rounded-card bg-canvasWarm shadow-card">
            <PhotoFrame
              slot={imageMap[item.key]}
              className="transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent px-3 pb-3 pt-12 opacity-100 transition-opacity duration-300 sm:px-4 sm:pb-4">
              <p className="font-body text-[12px] font-medium text-cream sm:text-[13px]">{item.label}</p>
              <p className="mr text-[11px] text-cream/85 sm:text-[12px]">{item.labelMr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
