"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import type { ImageSlot } from "@/lib/images";
import ImageLightbox from "./ImageLightbox";

export default function PhotoFrame({
  slot,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const [src, setSrc] = useState(slot.src);
  const [usingFallback, setUsingFallback] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeLightbox = useCallback(() => setIsOpen(false), []);

  const handleImageError = () => {
    if (slot.fallbackSrc && !usingFallback) {
      setUsingFallback(true);
      setSrc(slot.fallbackSrc);
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/25 via-canvasWarm to-warm/20 text-center ${className}`}
      >
        <span className="px-6 font-body text-sm text-primary/70">
          Photo to be added: {slot.localFile}
        </span>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open full-size photo: ${slot.alt}`}
        title="Open full-size photo"
        className="group/photo absolute inset-0 z-10 block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
      >
        <Image
          src={src}
          alt={slot.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${className}`}
          onError={handleImageError}
        />
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-primary/75 px-3 py-1.5 font-body text-[11px] font-medium text-white opacity-75 shadow-sm transition-opacity sm:opacity-0 group-hover/photo:opacity-100 group-focus-visible/photo:opacity-100">
          View photo ↗
        </span>
      </button>
      {isOpen && <ImageLightbox src={src} alt={slot.alt} onClose={closeLightbox} />}
    </>
  );
}
