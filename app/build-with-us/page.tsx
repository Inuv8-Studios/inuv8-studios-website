import Link from "next/link";
import BuildWithUs from "@/components/build-with-us/build-with-us";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/build-with-us/hero-section";

export default function Dreams() {
  return (
    <>
      <HeroSection />
      <BuildWithUs />
      <section className="mx-auto max-w-4xl px-6 py-14 text-center">
        <h2 className="text-2xl font-semibold">Joining the development team?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">Explore our Unity engineering architecture, designer workflows, and source API references before your first sprint.</p>
        <Link href="/doc" className="mt-6 inline-flex rounded-md border border-cyan-400/50 px-6 py-3 text-sm font-semibold text-cyan-200 hover:bg-cyan-400/10">Open Developer Documentation ↗</Link>
      </section>
      <FooterSection />
    </>
  );
}
