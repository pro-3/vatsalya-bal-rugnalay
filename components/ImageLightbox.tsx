"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ImageLightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071521]/95 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Full-size image: ${alt}`}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-3xl leading-none text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        ×
      </button>
      <div
        className="flex max-h-[94vh] w-full max-w-7xl flex-col items-center justify-center gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-[82vh] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            unoptimized
            priority
            className="object-contain"
          />
        </div>
        <p className="max-w-3xl px-4 text-center font-body text-sm text-white/80">{alt}</p>
      </div>
    </div>,
    document.body,
  );
}
