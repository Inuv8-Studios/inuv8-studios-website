import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen, Code2, Gamepad2, Layers3, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiEntries, collections, docsUpdated } from "./_lib/docs";

export const metadata: Metadata = {
  title: "Documentation | Inuv8 Studios",
  description: "The Inuv8 Studios development handbook for ArcToolkit and Project OVERRIDE.",
};

const spaces = [
  {
    href: "/doc/arctoolkits",
    title: "ArcToolkit",
    type: "UNITY FRAMEWORK",
    description: collections.arctoolkits.intro,
    image: "/images/dev-image.jpg",
    imageAlt: "Unity development workspace and game production tools",
    guides: collections.arctoolkits.pages.length,
    scripts: apiEntries.arctoolkits.length,
    icon: Layers3,
  },
  {
    href: "/doc/override",
    title: "Project OVERRIDE",
    type: "GAME DEVELOPMENT",
    description: collections.override.intro,
    image: "/images/background-override.png",
    imageAlt: "Project OVERRIDE official key artwork featuring the Cypher",
    guides: collections.override.pages.length,
    scripts: apiEntries.override.length,
    icon: Gamepad2,
  },
];

export default function DocumentationHub() {
  return (
    <main className="docs-app docs-hub" id="main-content">
      <section className="docs-hub-hero">
        <Image src="/images/dev-image.jpg" alt="Game development environment" fill priority sizes="100vw" className="docs-cover-img" />
        <div className="docs-hub-hero-shade" />
        <div className="docs-hub-hero-inner">
          <span className="docs-eyebrow"><BookOpen size={15} /> INUV8 STUDIOS / DOCUMENTATION</span>
          <h1>Documentation</h1>
          <p>Everything our team needs to understand, build, and expand the worlds and systems behind Inuv8 Studios.</p>
          <div className="docs-hero-actions">
            <Button asChild size="lg"><Link href="#collections">Browse documentation <ArrowRight size={16} /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/build-with-us">Build with us <ArrowRight size={16} /></Link></Button>
          </div>
        </div>
      </section>

      <div className="docs-hub-main">
        <section id="collections" className="docs-hub-collections">
          <div className="docs-hub-label-row"><div><span className="docs-small-kicker">ENGINEERING &amp; DESIGN</span><h2>Explore the knowledge base</h2></div><span className="docs-muted-inline">Source snapshot · {docsUpdated}</span></div>
          <div className="docs-hub-cards">
            {spaces.map(space => {
              const Icon = space.icon;
              return <Link key={space.href} className="docs-hub-card" href={space.href}>
                <div className="docs-hub-card-image"><Image src={space.image} alt={space.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" className="docs-cover-img" /><span className="docs-hub-card-image-shade" /><span className="docs-hub-card-type"><Icon size={15} /> {space.type}</span></div>
                <div className="docs-hub-card-body"><h3>{space.title}<ArrowRight size={19}/></h3><p>{space.description}</p><div className="docs-hub-card-details"><span><BookOpen size={14}/>{space.guides} guides</span><span><Code2 size={14}/>{space.scripts} scripts</span></div></div>
              </Link>;
            })}
          </div>
        </section>
        <section className="docs-hub-principles">
          <div><span className="docs-small-kicker">MADE FOR THE TEAM</span><h2>One studio. One shared way of building.</h2><p>Practical knowledge for contributors working across gameplay, design, content, and production.</p></div>
          <div className="docs-principle-grid"><div><Users size={21}/><strong>For designers</strong><p>Learn the workflows, content dependencies, and rules that shape the experience.</p></div><div><Code2 size={21}/><strong>For developers</strong><p>Follow component responsibilities, runtime systems, and source references.</p></div><div><Wrench size={21}/><strong>Built to evolve</strong><p>Guides and source indexes can be updated as new systems ship.</p></div></div>
        </section>
        <div className="docs-bottom-notice"><BookOpen size={20}/><p>These guides describe the available script snapshots. Scene, prefab, and Inspector wiring should be verified in Unity. Documentation is public unless route access is restricted.</p></div>
      </div>
    </main>
  );
}
