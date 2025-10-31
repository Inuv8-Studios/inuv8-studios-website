import CallToAction from "@/components/landing/call-to-action";
import FooterSection from "@/components/footer";
import WhatsNewPage from "@/components/whats-new/whats-new";
import HeroSection from "@/components/whats-new/hero-section";

export default function WhatsNew() {
  return (
    <>
      <HeroSection />
      <WhatsNewPage />
      <CallToAction />
      <FooterSection />
    </>
  );
}
