import HeroSection from "@/components/dreams/hero-section";
import Game from "@/components/dreams/game";
import CallToAction from "@/components/landing/call-to-action";
import FooterSection from "@/components/footer";
import { ImageDivider } from "@/components/image-line";

export default function Dreams() {
  return (
    <>
      <HeroSection />
      <ImageDivider src="/images/background-3.jpg" width={2000} height={30} />
      <Game />
      <CallToAction />
      <FooterSection />
    </>
  );
}
