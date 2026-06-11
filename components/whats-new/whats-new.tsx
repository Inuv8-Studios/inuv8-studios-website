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
  excerpt: string;
  content: string;
};

const POSTS: Post[] = [
  {
    id: "project-override-announcement",
    title: "Announcing Project OVERRIDE",
    date: "June 11, 2026",
    cover: "/images/background-override.png",
    youtubeId: "80Hi45WIsRY", // Extracted from https://youtu.be/80Hi45WIsRY
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
  {
    id: "midnight-dreams-devlog-01",
    title: "Midnight Dreams: Beginnings",
    date: "September 26, 2025",
    cover: "/images/background-3.jpg",
    excerpt:
      "We formed Inuv8 in mid-2022 — this devlog covers our early design decisions, art direction and the engines powering our dreamscapes.",
    content: `
## Beginnings

We started as a small group of creatives with a shared love for storytelling. In this devlog we discuss:
- why we chose an adventure-puzzle platformer,
- early prototypes and tools,
- art style explorations and palette tests.

Stay tuned for screenshots, concept sketches and build notes.
    `,
  },
  {
    id: "studio-growth-2024",
    title: "Studio Update — Team & Growth",
    date: "October 10, 2025",
    cover: "/posts/team-growth.jpg",
    excerpt:
      "Our creative collective has grown — meet a few faces joining the Midnight Dreams project and hear about how we collaborate.",
    content: `
## Team & Growth

Over the last year we've welcomed artists, programmers and writers from production backgrounds. Highlights:
- pipeline improvements
- collaboration tooling
- current priorities for hiring

If you'd like to join or collaborate, send us a note via the contact page.
    `,
  },
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
            News, devlogs and updates from Inuv8 Studios; follow along the journey as
            we build our passion projects.
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

      {/* Modal for active post - fits viewport and scrolls when content is long */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-title"
        >
          {/* backdrop */}
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
                  title="YouTube video player"
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

            <div className="prose max-w-none dark:prose-invert">
              {active.content.split("\n").map((line, idx) => {
                if (line.startsWith("## ")) {
                  return (
                    <h3 key={idx} className="mt-6 text-xl font-semibold">
                      {line.replace("## ", "")}
                    </h3>
                  );
                }
                if (line.trim() === "") return null;
                if (line.trim().startsWith("- ")) {
                  return (
                    <li key={idx} className="ml-6 list-disc mt-1">
                      {line.trim().replace("- ", "")}
                    </li>
                  );
                }
                return (
                  <p key={idx} className="mt-3 leading-relaxed">
                    {line}
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
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
