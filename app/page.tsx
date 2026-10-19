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
      <FooterSection />
    </>
  );
}