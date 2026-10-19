import type { ReactNode } from "react";
import { HeroHeader } from "@/components/hero8-header";
import FooterSection from "@/components/footer";
import "./docs.css";

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroHeader />
      <div className="docs-site">{children}</div>
      <FooterSection />
    </>
  );
}
