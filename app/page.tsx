import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-us";
import Building from "@/components/building";
import CallToAction from "@/components/call-to-action";
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