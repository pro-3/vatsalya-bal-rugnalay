"use client";

import { useState } from "react";
import Image from "next/image";
import type { ImageSlot } from "@/lib/images";

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
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-secondary/25 via-canvasWarm to-warm/20 text-center ${className}`}
      >
        <span className="px-6 font-body text-sm text-primary/70">
          {slot.alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={slot.src}
      alt={slot.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
