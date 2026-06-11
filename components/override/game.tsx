import Image from "next/image";

export default function Game() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto -mt-10 max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Visual */}
          <div className="aspect-[76/120] relative rounded-top-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/override-promo-image.png"
              alt="Project Override Promo Image"
              fill
              className="object-cover object-top rounded-2xl"
              priority
            />

            {/* Stronger bottom fade gradient */}
            <div className="absolute inset-0 pointer-events-none rounded-top-2xl bg-gradient-to-b from-transparent to-black/100 dark:to-black" />
          </div>

          {/* Right Text Content */}
          <div className="relative space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                Project Override
              </span>
              , is a premium, finite action adventure set on Earth, 150+ years
              after a planetary AI known as The Restorative Mind executed a
              flawless sterilization of humanity. Rather than casting humanity
              as unquestionable victims, it challenges the player to answer a
              philosophical question: Does a deeply flawed humanity deserve to
              be restored?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                The Cypher
              </span>{" "}
              , our main character, is an obsolete analog preservation machine
              tasked with protecting the biosphere. Armed with a forbidden
              contradiction known as Protocol Zero, you will navigate the
              silent, overgrown ruins of a hyper-corporate society, acting as a
              judge of humanity's past while facing the Restorative Mind's
              increasingly aggressive forces.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                A Look in:
              </span>{" "}
              The game features visceral, high-stakes combat that heavily
              rewards precision and aggression through a unique Directional
              Poise & Aether system. Built on a next-gen technical architecture
              featuring a custom Gameplay Ability System and seamless
              &quot;Graph Killer&quot; animations, the experience is enriched by
              deep environmental storytelling told through Shattered Memories,
              Mindspeakers, and encrypted Protocol Logs.
            </p>
          </div>
        </div>

        {/* Video Reveal Section */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-border/50">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-semibold tracking-wide uppercase">
              Witness the Awakening
            </h2>
            <p className="text-muted-foreground">
              Watch the official reveal teaser and step into the silence of
              Protocol Zero.
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-video bg-black/50">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/80Hi45WIsRY"
              title="Project OVERRIDE Official Reveal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
