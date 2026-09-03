// Every image on the site is looked up from this file by key.
// To replace a placeholder with real Vatsalya photography:
//   1. Drop the real file into /public/images/ (see /public/images/README.md
//      for the exact filename each key expects)
//   2. Change that key's `src` below to the local path, e.g. "/images/hero.jpg"
//
// Placeholder `src` values currently point at Unsplash as temporary,
// royalty-free stock photography so the site is fully browsable today.
// This build environment has no outbound network access to verify each
// exact Unsplash asset still resolves — if any placeholder ever 404s,
// <PhotoFrame> (components/PhotoFrame.tsx) automatically falls back to a
// labelled placeholder card instead of a broken image, so the layout
// never breaks either way.

export type ImageSlot = {
  src: string;
  alt: string;
  localFile: string; // expected filename once real photography is added
};

export const images: Record<string, ImageSlot> = {
  hero: {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1400&q=80&auto=format&fit=crop",
    alt: "Doctor gently examining a young child while a parent looks on",
    localFile: "hero.jpg",
  },
  introduction: {
    src: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=1200&q=80&auto=format&fit=crop",
    alt: "Pediatrician sitting at a child's eye level during a consultation",
    localFile: "introduction.jpg",
  },
  doctorNikita: {
    src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=900&q=80&auto=format&fit=crop",
    alt: "Portrait of a woman doctor in a white coat",
    localFile: "doctor-nikita.jpg",
  },
  skinCare: {
    src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80&auto=format&fit=crop",
    alt: "Clinical skin consultation in a bright, calm treatment room",
    localFile: "skin-care.jpg",
  },
  parentResources: {
    src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1200&q=80&auto=format&fit=crop",
    alt: "Parent reading with a young child",
    localFile: "parent-resources.jpg",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",
    alt: "Clean, welcoming hospital reception area",
    localFile: "contact.jpg",
  },
  facilityExterior: {
    src: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f8?w=1000&q=80&auto=format&fit=crop",
    alt: "Hospital building exterior",
    localFile: "facility-exterior.jpg",
  },
  facilityReception: {
    src: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1000&q=80&auto=format&fit=crop",
    alt: "Hospital reception desk",
    localFile: "facility-reception.jpg",
  },
  facilityPatientRoom: {
    src: "https://images.unsplash.com/photo-1631048500403-fb8ab8db4a04?w=1000&q=80&auto=format&fit=crop",
    alt: "Bright, comfortable patient room",
    localFile: "facility-patient-room.jpg",
  },
  facilityNicu: {
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&q=80&auto=format&fit=crop",
    alt: "Newborn intensive care unit equipment",
    localFile: "facility-nicu.jpg",
  },
  facilityEquipment: {
    src: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1000&q=80&auto=format&fit=crop",
    alt: "Pediatric diagnostic equipment",
    localFile: "facility-equipment.jpg",
  },
  facilityCare: {
    src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1000&q=80&auto=format&fit=crop",
    alt: "Warm, welcoming child-care area",
    localFile: "facility-care.jpg",
  },
};
