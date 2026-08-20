import Image from "next/image";

export default function Game() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto -mt-10 max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* =========================================================
            LATEST UPDATE
        ========================================================== */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground">
              Latest Development Update
            </p>

            <h2 className="text-3xl font-semibold tracking-wide sm:text-4xl">
              Project OVERRIDE Is Taking Shape
            </h2>

            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              We&apos;ve been busy behind the scenes building and
              refining the foundations of the game.
            </p>
          </div>

          {/* Update Video */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/DWF3CVMxWcY"
              title="Project OVERRIDE - Development Update"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          {/* Update Summary */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border bg-card/50 p-6">
              <h3 className="font-semibold text-lg">Combat</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Early combat systems are taking shape, with a focus on
                precision, aggression, timing, and the unique Directional Poise
                &amp; Aether system.
              </p>
            </div>

            <div className="rounded-2xl border bg-card/50 p-6">
              <h3 className="font-semibold text-lg">Systems</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Core gameplay systems, abilities, interactions, and the
                underlying technology continue to evolve as we build the
                foundation of OVERRIDE.
              </p>
            </div>

            <div className="rounded-2xl border bg-card/50 p-6">
              <h3 className="font-semibold text-lg">Early Development</h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Explore early concept gameplay, environmental design, and some
                of the ideas currently shaping the world of Project OVERRIDE.
              </p>
            </div>
          </div>

          {/* Steam Wishlist CTA */}
          <div className="flex flex-col items-center justify-center gap-4 pt-2">
            <p className="text-center text-sm text-muted-foreground">
              Follow the development and be there when OVERRIDE is ready.
            </p>

            <a
              href="https://store.steampowered.com/app/5022440/Project_OVERRIDE/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-105"
              aria-label="Wishlist Project OVERRIDE on Steam"
            >
              <Image
                src="/images/wishlist_steam.png"
                alt="Wishlist Project OVERRIDE on Steam"
                width={300}
                height={90}
                className="h-auto w-[240px] sm:w-[300px]"
                priority
              />
            </a>
          </div>
        </div>

        {/* =========================================================
            GAME OVERVIEW
        ========================================================== */}
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
              judge of humanity&apos;s past while facing the Restorative
              Mind&apos;s increasingly aggressive forces.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                A Look in:
              </span>{" "}
              The game features visceral, high-stakes combat that heavily
              rewards precision and aggression through a unique Directional
              Poise &amp; Aether system. Built on a next-gen technical
              architecture featuring a custom Gameplay Ability System and
              seamless &quot;Graph Killer&quot; animations, the experience is
              enriched by deep environmental storytelling told through Shattered
              Memories, Mindspeakers, and encrypted Protocol Logs.
            </p>
          </div>
        </div>

        {/* =========================================================
            ORIGINAL REVEAL
        ========================================================== */}
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
