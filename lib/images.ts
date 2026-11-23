/**
 * Central photo map for the Vatsalya website.
 * Local originals are served through Next.js Image for responsive delivery.
 */
export type ImageSlot = {
  src: string;
  alt: string;
  localFile: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
};

export const heroImages = {
  desktop: {
    src: "/images/herobg.jpg",
    alt: "Vatsalya Bal Rugnalay website hero image",
    localFile: "herobg.jpg",
  },
  mobile: {
    src: "/images/herobg-mobile.jpg",
    alt: "Vatsalya Bal Rugnalay mobile hero image",
    localFile: "herobg-mobile.jpg",
  },
};

export const images: Record<string, ImageSlot> = {
  introduction: {
    src: "/images/introduction.jpg",
    alt: "Front entrance of Vatsalya Bal Rugnalay",
    localFile: "introduction.jpg",
    objectPosition: "center 50%",
  },
  doctorNilesh: {
    src: "/images/doctors/dr-nilesh-chavhan.jpg",
    alt: "Official portrait of Dr. Nilesh Chavhan",
    localFile: "doctors/dr-nilesh-chavhan.jpg",
    fit: "contain",
  },
  doctorNikita: {
    src: "/images/doctors/dr-nikita-chavhan.jpg",
    alt: "Official portrait of Dr. Nikita Chavhan (Pawar)",
    localFile: "doctors/dr-nikita-chavhan.jpg",
    fit: "contain",
  },
  skinCare: {
    src: "/images/skin-care.jpg",
    alt: "Vatsalya Skin Care Clinic signboard",
    localFile: "skin-care.jpg",
    fit: "contain",
  },
  parentResources: {
    src: "/images/parent-resources.jpg",
    alt: "Interior waiting and corridor area at Vatsalya Bal Rugnalay",
    localFile: "parent-resources.jpg",
  },
  facilityExterior: {
    src: "/images/facility-exterior.jpg",
    alt: "Exterior entrance area of Vatsalya Bal Rugnalay",
    localFile: "facility-exterior.jpg",
    objectPosition: "center 48%",
  },
  facilityApproach: {
    src: "/images/facility-approach.jpg",
    alt: "Street approach near Vatsalya Bal Rugnalay",
    localFile: "facility-approach.jpg",
  },
  facilityReception: {
    src: "/images/facility-reception.jpg",
    alt: "Reception and waiting area inside Vatsalya Bal Rugnalay",
    localFile: "facility-reception.jpg",
  },
  facilityCorridor: {
    src: "/images/facility-corridor.jpg",
    alt: "Interior corridor and doorway at Vatsalya Bal Rugnalay",
    localFile: "facility-corridor.jpg",
  },
  facilityPatientRoom: {
    src: "/images/facility-patient-room.jpg",
    alt: "Patient room at Vatsalya Bal Rugnalay",
    localFile: "facility-patient-room.jpg",
  },
  facilityWardRoom: {
    src: "/images/facility-ward-room.jpg",
    alt: "Ward room with patient beds at Vatsalya Bal Rugnalay",
    localFile: "facility-ward-room.jpg",
  },
  facilityCareRoom: {
    src: "/images/facility-care-room.jpg",
    alt: "Care room with beds and privacy curtains at Vatsalya Bal Rugnalay",
    localFile: "facility-care-room.jpg",
  },
  facilityExaminationRoom: {
    src: "/images/facility-examination-room.jpg",
    alt: "Examination room at Vatsalya Bal Rugnalay",
    localFile: "facility-examination-room.jpg",
  },
};
