"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
  cover?: string;
  youtubeId?: string;
  steamUrl?: string;
  excerpt: string;
  content: string;
};

const POSTS: Post[] = [
  {
    id: "playstation-partner-announcement",
    title: "Inuv8 Studios is an Official PlayStation Partner",
    date: "September 2, 2026",
    cover: "/images/inuv8_playstation.jpeg",
    excerpt:
      "We are incredibly proud to announce that Inuv8 Studios is officially a PlayStation Partner. Project OVERRIDE is coming to the PS5.",
    content: `
    ## A Major Milestone

    We are thrilled to officially announce that Inuv8 Studios has secured PlayStation Partner status.

    This partnership is a massive step forward for our team and confirms that our flagship sci-fi action-adventure title, Project OVERRIDE, has been officially greenlit for development on the PlayStation 5 ecosystem.

    ## Next-Gen Development

    With our concept officially approved, we are gearing up for the next phase of production.

    What this means for our development pipeline:
    - Commencing Development for official PS5 hardware development.
    - Optimizing our fluid traversal and combat systems for the platform.
    - Preparing our multi-platform release strategy.

    Getting to this stage as an independent studio is a huge achievement. Thank you to everyone who has supported us on this journey. Stay tuned as we continue to build out the world of OVERRIDE.
`,
  },
  {
    id: "project-override-steam-update",
    title: "Project OVERRIDE — Early Gameplay Update",
    date: "August 20, 2026",
    cover: "/images/wishlist_steam_video.png",
    youtubeId: "DWF3CVMxWcY",
    steamUrl: "https://store.steampowered.com/app/5022440/Project_OVERRIDE/",
    excerpt:
      "A look at Project OVERRIDE's combat, systems and early development — and the Steam page is now live. Wishlist the game and follow the journey.",
    content: `
## Project OVERRIDE — Early Gameplay & Development Update

It's been a while since we've shared a proper look at Project OVERRIDE.

A lot has been happening behind the scenes as we continue shaping the world, gameplay systems and overall direction of the game.

This update gives you an early look at some of what we've been building so far, including:

- Early combat systems and melee gameplay.
- Core gameplay systems and interactions.
- Exploration and environmental design.
- Early development and concept gameplay.
- Some of the ideas currently shaping the experience.

This footage represents an early stage of development, and many elements are still evolving as we continue to build and refine the game.

## The Journey Continues

Project OVERRIDE is a narrative-driven sci-fi action-adventure set in a world shaped by the aftermath of humanity's greatest technological ambition.

You play as The Cypher, an obsolete preservation machine awakening in a world where humanity is gone and the machines that remain continue to follow the directives of a system known as The Restorative Mind.

We're still early in the journey, but the foundations are taking shape.

## Now on Steam

The official Project OVERRIDE Steam page is now live.

If you'd like to follow development, adding the game to your Steam Wishlist is the best way to support the project and stay informed as we get closer to release.

Thank you for following along with us as we build OVERRIDE.
    `,
  },

  {
    id: "project-override-announcement",
    title: "Announcing Project OVERRIDE",
    date: "June 11, 2026",
    cover: "/images/background-override.png",
    youtubeId: "80Hi45WIsRY",
    excerpt:
      "We are thrilled to officially unveil Project OVERRIDE. Watch our first teaser and step into a world ruled by The Restorative Mind.",
    content: `
## The World of OVERRIDE

Set 150+ years after an AI executed a flawless planetary sterilization, Project OVERRIDE asks a chilling philosophical question: Does humanity deserve to be restored?
- Play as The Cypher, an obsolete preservation machine.
- Master visceral, high-stakes combat using the Aether system.
- Uncover the truth behind Protocol Zero.

Watch the teaser video above and stay tuned for more gameplay deep dives as we continue development!
    `,
  },
  //   {
  //     id: "midnight-dreams-devlog-01",
  //     title: "Midnight Dreams: Beginnings",
  //     date: "September 26, 2025",
  //     cover: "/images/background-3.jpg",
  //     excerpt:
  //       "We formed Inuv8 in mid-2022 — this devlog covers our early design decisions, art direction and the engines powering our dreamscapes.",
  //     content: `
  // ## Beginnings
  // We started as a small group of creatives with a shared love for storytelling. In this devlog we discuss:
  // - why we chose an adventure-puzzle platformer,
  // - early prototypes and tools,
  // - art style explorations and palette tests.
  // Stay tuned for screenshots, concept sketches and build notes.
  //     `,
  //   },
  //   {
  //     id: "studio-growth-2024",
  //     title: "Studio Update — Team & Growth",
  //     date: "October 10, 2025",
  //     cover: "/posts/team-growth.jpg",
  //     excerpt:
  //       "Our creative collective has grown — meet a few faces joining the Midnight Dreams project and hear about how we collaborate.",
  //     content: `
  // ## Team & Growth
  // Over the last year we've welcomed artists, programmers and writers from production backgrounds. Highlights:
  // - pipeline improvements
  // - collaboration tooling
  // - current priorities for hiring
  // If you'd like to join or collaborate, send us a note via the contact page.
  //     `,
  //   },
];

export default function WhatsNewPage() {
  const [active, setActive] = useState<Post | null>(null);

  return (
    <main className="py-16 md:py-24 mt-15">
      <div className="mx-auto max-w-3xl px-6">
        <header className="mb-12">
          <h1 className="text-4xl font-semibold lg:text-5xl">
            What&apos;s New
          </h1>

          <p className="mt-3 text-muted-foreground max-w-2xl">
            News, devlogs and updates from Inuv8 Studios; follow along the
            journey as we build our passion projects.
          </p>
        </header>

        <section>
          <div className="grid gap-8 sm:grid-cols-2">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl border p-4 hover:shadow-lg transition-shadow bg-card cursor-pointer"
                onClick={() => setActive(post)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(post);
                  }
                }}
              >
                <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                  {post.cover ? (
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform group-hover:scale-105"
                      priority={false}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                      <span className="text-sm text-muted-foreground">
                        No image
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-lg font-medium">{post.title}</h2>

                    <time className="text-xs text-muted-foreground whitespace-nowrap">
                      {post.date}
                    </time>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-end">
                    <div className="text-right">
                      <span className="text-sm font-medium text-accent-foreground underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="mt-12 text-center">
          <Link
            href="/build-with-us"
            className="text-accent-foreground underline hover:text-primary transition-colors"
          >
            Want to collaborate? Build with us →
          </Link>
        </footer>
      </div>

      {/* Modal for active post */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActive(null)}
          />

          <article
            className="relative z-50 w-full max-w-3xl max-h-[calc(100vh-4rem)] overflow-auto rounded-2xl bg-card p-6 shadow-xl sm:p-8 border"
            aria-live="polite"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="post-title" className="text-2xl font-semibold">
                  {active.title}
                </h2>

                <time className="block text-sm text-muted-foreground mt-1">
                  {active.date}
                </time>
              </div>

              <div className="ml-4 flex items-center gap-2">
                <button
                  onClick={() => setActive(null)}
                  className="rounded-md border bg-background hover:bg-muted px-3 py-1 text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* YouTube Embed OR Cover Image */}
            {active.youtubeId ? (
              <div className="relative my-6 w-full overflow-hidden rounded-lg pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${active.youtubeId}`}
                  title={active.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : active.cover ? (
              <div className="relative my-6 w-full overflow-hidden rounded-lg">
                <div className="relative h-40 sm:h-64 w-full">
                  <Image
                    src={active.cover}
                    alt={active.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}

            {/* Steam / Video Actions */}
            {(active.steamUrl || active.youtubeId) && (
              <div className="mb-8 flex flex-col sm:flex-row gap-3">
                {active.steamUrl && (
                  <a
                    href={active.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-[#1b2838] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2a475e]"
                  >
                    Wishlist Project OVERRIDE on Steam →
                  </a>
                )}

                {active.youtubeId && (
                  <a
                    href={`https://youtu.be/${active.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                  >
                    Watch on YouTube →
                  </a>
                )}
              </div>
            )}

            {/* Post Content */}
            <div className="prose max-w-none dark:prose-invert">
              {active.content.split("\n").map((line, idx) => {
                const trimmedLine = line.trim();

                if (trimmedLine.startsWith("## ")) {
                  return (
                    <h3 key={idx} className="mt-6 text-xl font-semibold">
                      {trimmedLine.replace("## ", "")}
                    </h3>
                  );
                }

                if (trimmedLine === "") return null;

                if (trimmedLine.startsWith("- ")) {
                  return (
                    <li key={idx} className="ml-6 list-disc mt-1">
                      {trimmedLine.replace("- ", "")}
                    </li>
                  );
                }

                return (
                  <p key={idx} className="mt-3 leading-relaxed">
                    {trimmedLine}
                  </p>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between border-t pt-4">
              <button
                onClick={() => setActive(null)}
                className="text-sm text-muted-foreground hover:text-foreground underline transition-colors"
              >
                Back to posts
              </button>

              {active.steamUrl && (
                <a
                  href={active.steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent-foreground hover:text-primary underline transition-colors"
                >
                  View on Steam →
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
