import Link from "next/link";
import HeroSection from "@/components/override/hero-section";
import Game from "@/components/override/game";
import CallToAction from "@/components/landing/call-to-action";
import FooterSection from "@/components/footer";
import { ImageDivider } from "@/components/image-line";

export default function Dreams() {
  return (
    <>
      <HeroSection />
      <ImageDivider src="/images/background-override.png" width={2000} height={30} />
      <Game />
      <section className="mx-auto max-w-5xl px-6 py-12 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Development & Collaboration</p>
        <Link href="/doc/override" className="mt-3 inline-block text-sm font-semibold text-cyan-200 hover:underline">Explore the Project OVERRIDE production documentation ↗</Link>
      </section>
      <CallToAction />
      <FooterSection />
    </>
  );
}
