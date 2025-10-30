"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { HeroBackground } from "@/components/hero-background";
import { PartnerSlider } from "./partner-slider";

export default function HeroSection() {
  const bgImages = ["/images/background-3.png", "/images/background-2.png"];

  const partnerLogos = [
    {
      src: "/platforms/unity.png",
      height: 10,
      alt: "Unity",
    },
    {
      src: "/platforms/unreal.png",
      height: 9,
      alt: "Unreal Engine",
    },
    {
      src: "/platforms/googleplay.png",
      height: 10,
      alt: "Google Play",
    },
    {
      src: "/platforms/applestore.png",
      height: 10,
      alt: "Apple Store",
    },
    // {
    //   src: "/platforms/arvr.png",
    //   height: 5,
    //   alt: "AR/VR",
    // },
  ];

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden relative">
        {/* background crossfade component */}
        <HeroBackground images={bgImages} interval={7000} transitionMs={900} />

        <section>
          {/* gradient overlay that fades to black or white at the bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 1%, rgba(0,0,0,.9) 60%, rgba(0,0,0,1) 100%)",
            }}
          />
          <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Inuv8 Studios
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  We are an Indie Game studio looking to tell stories through
                  Art, Animations and Game Development.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="/team">
                      <span className="text-nowrap">Build with Us</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base"
                  >
                    <Link href="/dreams">
                      <span className="text-nowrap">Check Out Dreams</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partner slider section now uses PartnerSlider component */}
        <section className="bg-background pt-40 md:pb-20">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">We're Build For</p>
              </div>

              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <PartnerSlider
                  logos={partnerLogos}
                  speed={40}
                  speedOnHover={20}
                  gap={112}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
