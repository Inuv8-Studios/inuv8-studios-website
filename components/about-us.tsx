import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl leading-tight">
          About Us
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Text Content */}
          <div className="relative space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              Founded in{" "}
              <span className="font-semibold text-accent-foreground">
                mid-2022
              </span>
              ,{" "}
              <span className="font-semibold text-accent-foreground">
                Inuv8 Studios{" "}
              </span>
              was born from a shared vision — to build worlds that blend art,
              emotion, and imagination into unforgettable experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              What started as a small circle of dreamers has grown into a
              creative collective with over{" "}
              <span className="font-semibold text-accent-foreground">
                15+ years of combined experience
              </span>{" "}
              in production, animation, digital art, and game development.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our key talent comes from across entertainment and production
              studios — artists, developers, designers, and writers united by
              one goal: crafting immersive stories that connect and inspire.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-accent-foreground">
                Midnight Dreams
              </span>{" "}
              will be our first commercial project — a milestone that represents
              everything we’ve learned and loved across collaborations with
              multiple clients and external studios.
            </p>

            <blockquote className="mt-8 border-l-4 pl-4 italic text-muted-foreground">
              <p>
                “The team continues to grow, as more artists, developers, and
                creatives join us — expanding not just a project, but a shared
                dream.”
              </p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium not-italic">
                  The Midnight Dreams Team
                </cite>
              </div>
            </blockquote>
          </div>

          {/* Right Visual (You’ll Add Your Own Images Here) */}
          <div className="relative mb-2 sm:mb-0">
            <div className="aspect-[76/80] relative rounded-top-2xl overflow-hidden">
              <Image
                src="/images/background-2.png"
                alt="Teams Promo Image"
                fill
                className="object-cover object-top justify-center"
                priority
              />

              {/* Stronger bottom fade gradient */}
              <div className="absolute inset-0 pointer-events-none rounded-top-2xl bg-gradient-to-b from-transparent to-black/100 dark:to-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
