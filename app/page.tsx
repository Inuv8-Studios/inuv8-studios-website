import Link from "next/link";
import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-us";
import Building from "@/components/landing/building";
import CallToAction from "@/components/landing/call-to-action";
import FooterSection from "@/components/footer";
import { ImageDivider } from "@/components/image-line";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Building />
      <AboutSection />
      <ImageDivider src="/images/divider-1.png" width={2000} height={10} />
      <CallToAction />
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">Engineering & Design</span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight">Explore our documentation</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">Meet the systems behind our games. Guides and reference material for developers, designers and collaborators.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className="rounded-md border border-cyan-400/40 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10" href="/doc/arctoolkits">ArcToolkit Docs ↗</Link>
          <Link className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10" href="/doc/override">Project OVERRIDE Docs ↗</Link>
        </div>
      </section>
      <FooterSection />
    </>
  );
}