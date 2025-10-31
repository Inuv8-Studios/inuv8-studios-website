import Image from "next/image";

export default function Building() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl leading-tight">
          Currently building Dreams
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Visual */}
          <div className="aspect-[76/82] relative rounded-top-2xl overflow-hidden">
            <Image
              src="/images/promo-image.png"
              alt="Dreams Promo Image"
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
                AN ADVENTURE PUZZLE PLATFORMER
              </span>
              , set in a sad and gloomy world of broken dreams, horrid with
              nightmares that seek to destroy the very dreams that hold the
              Realms of the Spirits and that of reality (the waking world)
              together.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                “Midnight Dreams”
              </span>{" "}
              isn’t just to tell a story; it is created for you to be part of
              the story as you solve puzzles, fend off nightmarish enemies,
              discover secrets of the dreaming, and restore the Dreaming to what
              it once was.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
