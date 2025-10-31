"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  date: string;
  cover?: string;
  excerpt: string;
  content: string;
};

const POSTS: Post[] = [
  {
    id: "midnight-dreams-devlog-01",
    title: "Midnight Dreams — Devlog #1: Beginnings",
    date: "June 15, 2024",
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
          <h1 className="text-4xl font-semibold lg:text-5xl">What&apos;s New</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            News, devlogs and updates from Inuv8 Studios — follow the journey as
            we build Dreams.
          </p>
        </header>

        <section>
          <div className="grid gap-8 sm:grid-cols-2">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl border p-4 hover:shadow-lg transition-shadow bg-card"
                onClick={() => setActive(post)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActive(post);
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
                    <time className="text-xs text-muted-foreground">
                      {post.date}
                    </time>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-2">
                    </div>

                    <div className="text-right">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(post);
                        }}
                        className="text-sm font-medium text-accent-foreground underline"
                      >
                        Read more →
                      </button>
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
            className="text-accent-foreground underline"
          >
            Want to collaborate? Build with us →
          </Link>
        </footer>
      </div>

      {/* Modal for active post */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="post-title"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActive(null)}
          />

          <article className="relative z-50 mx-auto max-w-3xl overflow-auto rounded-2xl bg-card p-6 shadow-lg sm:p-8">
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
                  className="rounded-md border px-3 py-1 text-sm"
                >
                  Close
                </button>
              </div>
            </div>

            {active.cover && (
              <div className="relative my-6 h-64 w-full overflow-hidden rounded-lg">
                <Image
                  src={active.cover}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="prose max-w-none dark:prose-invert">
              {/* naive markdown-ish rendering — replace with remark/MDX for rich posts */}
              {active.content.split("\n").map((line, idx) => {
                if (line.startsWith("## ")) {
                  return (
                    <h3 key={idx} className="mt-6 text-xl">
                      {line.replace("## ", "")}
                    </h3>
                  );
                }
                if (line.trim() === "") return null;
                if (line.trim().startsWith("- ")) {
                  // render list; simple transform
                  const items = active.content
                    .split("\n")
                    .filter((l) => l.trim().startsWith("- "))
                    .map((l) => l.replace("- ", ""));
                  return (
                    <ul key={idx} className="mt-3 list-disc pl-6">
                      {items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx}>{line}</p>;
              })}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-3">
                <Link
                  href={`/whats-new`}
                  onClick={() => setActive(null)}
                  className="text-sm text-muted-foreground underline"
                >
                  Back to posts
                </Link>
              </div>

              <div className="flex gap-3">
                {/* share link opens compose in Gmail */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=hello@inuv8studios.com&su=${encodeURIComponent(
                    active.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline"
                >
                  Email about this post
                </a>

                <Link
                  href="/build-with-us"
                  className="text-sm rounded-md bg-accent-foreground px-3 py-1 text-white"
                >
                  Work with us
                </Link>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
