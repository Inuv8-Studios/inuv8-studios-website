import type { ReactNode } from "react";
import type { Metadata } from "next";
import { HeroHeader } from "@/components/hero8-header";
import FooterSection from "@/components/footer";
import "./docs.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false, noarchive: true },
};

export default function DocumentationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroHeader />
      <div className="docs-site">{children}</div>
      <FooterSection />
    </>
  );
}
