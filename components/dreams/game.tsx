import Image from "next/image";

export default function Game() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto -mt-10 max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Visual */}
          <div className="aspect-[76/120] relative rounded-top-2xl overflow-hidden">
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
                The Game
              </span>
              , follows a Phantom Spirit, who is created from the cries of
              Sleepers who are unable to wake up from their slumber as the
              bridge between the Realms of Reality and of Spirits is broken.
              This Bridge is Dreams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                'Tunu
              </span>{" "}
              , our main Character, is to journey through Dreams restoring its
              broken pillars whilst fending off horrible Nightmares and solving
              Puzzles to get to the Keeper of Dreams and do what no Phantom has
              done. Restore the Midnight Dreams.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                A Look in:
              </span>{" "}
              The Game features an interesting mix of Character Development,
              Dialogue and a new way of platforming where players have access to
              all abilities but cannot use them until faced with the necessarily
              puzzles or game world situation where it is needed. Making for an
              interesting new way to look at puzzle platforming. Immersive Story
              Telling and Gameplay with intricate puzzles and hidden secrets.
              Stunning Art style and mesmerizing soundtrack. Dynamic world with
              a host of interesting Characters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
