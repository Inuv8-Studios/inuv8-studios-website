// components/PartnerSlider.tsx
"use client";

import React from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export type LogoItem = {
  src: string;
  alt?: string;
  height?: number; // visual height in px (kept as tailwind h- class fallback)
  className?: string; // optional additional classes
};

type PartnerSliderProps = {
  logos: LogoItem[];
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
};

export function PartnerSlider({
  logos,
  speed = 40,
  speedOnHover = 20,
  gap = 112,
  className = "",
}: PartnerSliderProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <InfiniteSlider speedOnHover={speedOnHover} speed={speed} gap={gap}>
        {logos.map((logo, idx) => (
          <div key={idx} className="flex items-center px-4">
            <Image
              src={logo.src}
              alt={logo.alt ?? `partner-${idx}`}
              className={`mx-auto h-${logo.height ?? 5} w-auto dark:invert ${
                logo.className ?? ""
              }`}
              height={logo.height ?? 20}
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-0 h-full w-20"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-0 h-full w-20"
        direction="right"
        blurIntensity={1}
      />

      {/* fade overlays (left/right) to mask edges — optional */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background/100 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background/100 to-transparent" />
    </div>
  );
}
