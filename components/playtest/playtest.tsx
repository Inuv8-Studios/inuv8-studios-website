"use client";

import React from "react";
import Image from "next/image";

const FEEDBACK_URL = "https://forms.gle/6B4m9D2TXgSZNZFU9";
const DISCORD_URL = "https://discord.gg/6CKGuTk7CD";
const STEAM_URL =
  "https://store.steampowered.com/app/5022440/Project_OVERRIDE/";

const SOCIAL_LINKS = {
  x: "https://x.com/inuv8_studios",
  instagram: "https://www.instagram.com/inuv8_studios",
  tiktok: "https://www.tiktok.com/@inuv8_studios",
};

const socials = [
  {
    name: "X",
    href: SOCIAL_LINKS.x,
    icon: "https://cdn.simpleicons.org/x/000000",
  },
  {
    name: "Instagram",
    href: SOCIAL_LINKS.instagram,
    icon: "https://cdn.simpleicons.org/instagram/000000",
  },
  {
    name: "TikTok",
    href: SOCIAL_LINKS.tiktok,
    icon: "https://cdn.simpleicons.org/tiktok/000000",
  },
];

export default function Playtest() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Playtest Complete
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            You made it through.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Now help us make Project OVERRIDE better. Your feedback will
            directly help us shape the next phase of development.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {/* Feedback */}
          <a
            href={FEEDBACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-muted/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-background text-xl">
              ✦
            </div>

            <h3 className="mt-6 text-xl font-semibold">Give Us Feedback</h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tell us what felt good, what didn&apos;t, and where you think we
              can improve.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 transition-transform group-hover:translate-x-1">
              Complete Feedback Form →
            </span>
          </a>

          {/* Discord */}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-muted/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-background p-2">
              <Image
                src="/images/discord-logo.png"
                alt="Discord"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold">Join Our Discord</h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Stay connected with the team, follow development, and be part of
              the Project OVERRIDE community.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 transition-transform group-hover:translate-x-1">
              Join the Community →
            </span>
          </a>

          {/* Steam */}
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:bg-muted/40"
          >
            <div className="flex h-12 w-35 items-center justify-center rounded-xl border bg-background p-2">
              <Image
                src="/images/steam-logo.png"
                alt="Wishlist Project OVERRIDE on Steam"
                width={40}
                height={30}
                className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Wishlist Project OVERRIDE
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Follow the development and wishlist Project OVERRIDE on Steam to
              stay up to date.
            </p>

            <span className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 transition-transform group-hover:translate-x-1">
              Wishlist on Steam →
            </span>
          </a>
        </div>

        {/* Socials */}
        <div className="mt-20 border-t pt-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Stay Connected
          </p>

          <div className="mt-7 flex items-center justify-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Inuv8 Studios on ${social.name}`}
                className="group flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain invert transition-transform duration-300 group-hover:invert-0 group-hover:scale-110"
                />
              </a>
            ))}
          </div>
        </div>
        
        {/* Closing message */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Project OVERRIDE is still in development. Every piece of feedback
            helps us understand what&apos;s working, what needs attention, and
            where we take the game next.
          </p>

          <p className="mt-3 text-lg font-large">Thank you for playing.</p>
        </div>
      </div>
    </section>
  );
}
