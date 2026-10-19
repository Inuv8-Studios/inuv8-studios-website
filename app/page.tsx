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
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-7 rounded-2xl border bg-card/40 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Engineering &amp; Design</span>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">Explore our documentation</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">Meet the systems behind our games. Guides and source references for developers, designers, and collaborators.</p>
          </div>
          <Link href="/doc" className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">Explore docs ↗</Link>
        </div>
      </section>
      <FooterSection />
    </>
  );
}