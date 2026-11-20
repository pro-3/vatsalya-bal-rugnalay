"use client";

import { useCallback, useState } from "react";
import ImageLightbox from "./ImageLightbox";
import { heroImages } from "@/lib/images";

export default function HeroPhoto() {
  const [activeImage, setActiveImage] = useState(heroImages.desktop);
  const [isOpen, setIsOpen] = useState(false);
  const closeLightbox = useCallback(() => setIsOpen(false), []);

  const openCurrentHero = () => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    setActiveImage(isMobile ? heroImages.mobile : heroImages.desktop);
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={openCurrentHero}
        aria-label="Open full-size Vatsalya hero photograph"
        title="Open full-size photo"
        className="absolute inset-0 z-0 block cursor-zoom-in overflow-hidden text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
      >
        <picture className="absolute inset-0 block h-full w-full">
          <source media="(max-width: 639px)" srcSet={heroImages.mobile.src} />
          <img
            src={heroImages.desktop.src}
            alt={heroImages.desktop.alt}
            className="h-full w-full object-cover object-center sm:object-[58%_center] lg:object-center"
          />
        </picture>
        <span className="pointer-events-none absolute bottom-5 right-5 rounded-full border border-white/40 bg-primary/45 px-3 py-1.5 font-body text-[11px] text-white opacity-70 backdrop-blur-sm transition-opacity hover:opacity-100">
          View photo ↗
        </span>
      </button>
      {isOpen && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
