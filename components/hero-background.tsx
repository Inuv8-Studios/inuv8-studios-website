"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type HeroBackgroundProps = {
  images: string[];
  interval?: number;
  transitionMs?: number;
  className?: string;
};

export function HeroBackground({
  images,
  interval = 6000,
  transitionMs = 800,
  className = "",
}: HeroBackgroundProps) {
  const [index, setIndex] = useState(0);

  // respect user's reduced motion preference
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  // handle background image cycling
  useEffect(() => {
    if (prefersReducedMotion || images.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images, interval, prefersReducedMotion]);

  return (
    <div aria-hidden className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {images.map((src, i) => {
        const visible = i === index;
        return (
          <div
            key={src + i}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              opacity: visible ? 1 : 0,
              transitionDuration: `${transitionMs}ms`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 1024px) 1200px, 100vw"
              priority={i === 0}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        );
      })}
    </div>
  );
}