"use client";
import { useState } from "react";
import Image from "next/image";

type Member = {
  id: string;
  name: string;
  role: string;
  src: string;
  indexLabel: string;
  linkedin?: string;
};

const members: Member[] = [
  {
    id: "daniel",
    name: "Shontan Daniel",
    role: "Co-Founder - Creative Lead",
    src: "/team/Daniel_.png",
    indexLabel: "_01",
    linkedin: "https://www.linkedin.com/in/daniel-shontan-3b6b2b227/",
  },
  {
    id: "emmanuel",
    name: "Egwu Emmanuel",
    role: "Co-Founder - Engineering Lead",
    src: "/team/Manuel.png",
    indexLabel: "_02",
    linkedin: "https://www.linkedin.com/in/emmanuel-egwu-9a2b171a9/",
  },
  {
    id: "goodness",
    name: "Fadele Goodness",
    role: "Studio Producer",
    src: "/team/Goodness.png",
    indexLabel: "_03",
    linkedin: "https://www.linkedin.com/in/goodness-fadele-769a1a219/",
  },
  {
    id: "rebecca",
    name: "Olayinka Rebecca",
    role: "Creative Writer",
    src: "/team/Rebecca.png",
    indexLabel: "_04",
    linkedin: "https://www.linkedin.com/in/olayinka-rebecca/",
  },
  {
    id: "gbolahan",
    name: "Gbodiyan Gbolahan",
    role: "Concept Artist",
    src: "/team/Gbolahan.png",
    indexLabel: "_05",
    linkedin: "https://www.linkedin.com/in/gbolahan-gbodiyan/",
  },
  {
    id: "segun",
    name: "Olu-Abe Segun",
    role: "Gameplay Programmer",
    src: "/team/Segun.png",
    indexLabel: "_06",
    linkedin: "https://www.linkedin.com/in/segun-olu-abe-55133626a/",
  },
  {
    id: "joel",
    name: "Agbamu Joel",
    role: "Character Artist",
    src: "/team/Joel.png",
    indexLabel: "_07",
    linkedin: "https://www.linkedin.com/in/joel-agbamu-2052521b2/",
  },
  {
    id: "oyin",
    name: "Adegoke Oyinlola",
    role: "Environment Artist",
    src: "/team/Oyin.png",
    indexLabel: "_08",
    linkedin: "https://www.linkedin.com/in/oyinlolaadegoke1/",
  },
];

export default function TeamSection() {
  // index of the card that has been clicked (persisted). null = none
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // index of hovered card (temporary preview). null = none
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const isInteractiveActive = (i: number) =>
    activeIndex === i || (activeIndex === null && hoverIndex === i);

  const handleClick = (i: number) => {
    // toggle active on click
    setActiveIndex((prev) => (prev === i ? null : i));
    // clear hover when explicit click happens
    setHoverIndex(null);
  };

  const handleKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(i);
    }
  };

  return (
    <section className="py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mt-24 gap-4 sm:grid sm:grid-cols-2">
          <div className="sm:w-2/5">
            <h2 className="text-title text-3xl font-bold sm:text-4xl">
              Our Dream Team
            </h2>
          </div>
          <div className="mt-6 sm:mt-0">
            <p>
              An Indie studio crafting powerful stories through art, animation,
              and game development — driven by young creatives with over 15
              years of combined experience.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => {
              const active = isInteractiveActive(i);

              return (
                <div
                  key={m.id}
                  className="group overflow-hidden"
                  // pointer device hover preview only when nothing is active:
                  onMouseEnter={() => activeIndex === null && setHoverIndex(i)}
                  onMouseLeave={() => activeIndex === null && setHoverIndex(null)}
                >
                  {/* Use a button-like wrapper so clicks are accessible on mobile */}
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => handleClick(i)}
                    onKeyDown={(e) => handleKey(e, i)}
                    className="cursor-pointer"
                    aria-pressed={activeIndex === i}
                  >
                    <Image
                      className={
                        `w-full object-cover object-top rounded-md transition-all duration-500 ${
                          active ? "grayscale-0" : "grayscale"
                        } ${active ? "group-hover:rounded-xl" : ""} ${
                          active ? "h-[22.5rem] lg:h-[22.5rem]" : "h-96"
                        }`
                      }
                      src={m.src}
                      alt={m.name}
                      width={826}
                      height={1239}
                    />
                  </div>

                  <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                    <div className="flex justify-between">
                      <h3
                        className={`text-title text-base font-medium transition-all duration-500 ${
                          active ? "tracking-wider" : ""
                        }`}
                      >
                        {m.name}
                      </h3>
                      <span className="text-xs">{m.indexLabel}</span>
                    </div>

                    <div className="mt-1 flex items-center justify-between">
                      <span
                        className={`inline-block text-sm transition-transform duration-300 ${
                          active ? "translate-y-0" : "translate-y-6"
                        }`}
                      >
                        {m.role}
                      </span>

                      {m.linkedin ? (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block text-sm tracking-wide transition-all duration-500 ${
                            active
                              ? "translate-y-0 text-primary-600 dark:text-primary-400"
                              : "translate-y-8"
                          }`}
                        >
                          LinkedIn
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}