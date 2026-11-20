/**
 * Single source of truth for every photograph used on the website.
 *
 * Real/local photos are always tried first. For non-doctor photos, a temporary
 * Unsplash fallback keeps the layout populated until the hospital photos are
 * added. Doctor portraits deliberately have no stock fallback.
 */
export type ImageSlot = {
  src: string;
  alt: string;
  localFile: string;
  fallbackSrc?: string;
};

export const heroImages = {
  desktop: {
    src: "/images/herobg.jpg",
    alt: "Vatsalya Bal Rugnalay hero photograph",
    localFile: "herobg.jpg",
  },
  mobile: {
    src: "/images/herobg-mobile.jpg",
    alt: "Vatsalya Bal Rugnalay mobile hero photograph",
    localFile: "herobg-mobile.jpg",
  },
};

export const images: Record<string, ImageSlot> = {
  introduction: {
    src: "/images/introduction.jpg",
    alt: "A pediatric consultation or welcoming child-care moment at Vatsalya",
    localFile: "introduction.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=1200&q=80&auto=format&fit=crop",
  },
  doctorNilesh: {
    src: "/images/doctors/dr-nilesh-chavhan.jpg",
    alt: "Official portrait of Dr. Nilesh Chavhan",
    localFile: "doctors/dr-nilesh-chavhan.jpg",
  },
  doctorNikita: {
    src: "/images/doctors/dr-nikita-chavhan.jpg",
    alt: "Official portrait of Dr. Nikita Chavhan (Pawar)",
    localFile: "doctors/dr-nikita-chavhan.jpg",
  },
  skinCare: {
    src: "/images/skin-care.jpg",
    alt: "Skin-care consultation or treatment room at the clinic",
    localFile: "skin-care.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80&auto=format&fit=crop",
  },
  parentResources: {
    src: "/images/parent-resources.jpg",
    alt: "A parent reading with a young child",
    localFile: "parent-resources.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1200&q=80&auto=format&fit=crop",
  },
  contact: {
    src: "/images/contact.jpg",
    alt: "The reception or entrance area at Vatsalya Bal Rugnalay",
    localFile: "contact.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",
  },
  facilityExterior: {
    src: "/images/facility-exterior.jpg",
    alt: "Exterior of Vatsalya Bal Rugnalay",
    localFile: "facility-exterior.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1587351021759-3e566b3db4f8?w=1000&q=80&auto=format&fit=crop",
  },
  facilityReception: {
    src: "/images/facility-reception.jpg",
    alt: "Reception area at Vatsalya Bal Rugnalay",
    localFile: "facility-reception.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1000&q=80&auto=format&fit=crop",
  },
  facilityPatientRoom: {
    src: "/images/facility-patient-room.jpg",
    alt: "Patient room at Vatsalya Bal Rugnalay",
    localFile: "facility-patient-room.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1631048500403-fb8ab8db4a04?w=1000&q=80&auto=format&fit=crop",
  },
  facilityNicu: {
    src: "/images/facility-nicu.jpg",
    alt: "NICU at Vatsalya Bal Rugnalay",
    localFile: "facility-nicu.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&q=80&auto=format&fit=crop",
  },
  facilityEquipment: {
    src: "/images/facility-equipment.jpg",
    alt: "Medical equipment at Vatsalya Bal Rugnalay",
    localFile: "facility-equipment.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?w=1000&q=80&auto=format&fit=crop",
  },
  facilityCare: {
    src: "/images/facility-care.jpg",
    alt: "Child-care area at Vatsalya Bal Rugnalay",
    localFile: "facility-care.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=1000&q=80&auto=format&fit=crop",
  },
};
