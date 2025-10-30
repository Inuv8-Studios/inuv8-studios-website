"use client";

import React from "react";
import { HeroHeader } from "@/components/hero8-header";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden relative">
        <section>
          {/* gradient overlay that fades to black or white at the bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 1%, rgba(0,0,0,.9) 60%, rgba(0,0,0,1) 100%)",
            }}
          />
        </section>
      </main>
    </>
  );
}
