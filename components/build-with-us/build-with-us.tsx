"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

type FormState = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  role?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  honeypot?: string;
};

export default function BuildWithUsContact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    timeline: "",
    message: "",
    honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const update = (k: keyof FormState, v: string) =>
    setForm((s) => ({ ...s, [k]: v }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your work email.";
    // basic email check
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email.";
    if (!form.message || form.message.trim().length < 10)
      return "Please provide a short message describing your project (10+ characters).";
    // honeypot should be empty
    if (form.honeypot && form.honeypot.trim() !== "") return "Bad request.";
    return null;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setErrorMessage(null);

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setLoading(true);

    try {
      // Example: POST to /api/contact -> configure this serverless endpoint to send emails
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        // fallback: open mail client if API is not configured
        throw new Error("Server did not accept the message.");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        website: "",
        budget: "",
        timeline: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "We couldn’t send your message via the form. You can still email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  const openMailClient = () => {
    const subject = encodeURIComponent("Build with Inuv8 Studios — Inquiry");
    const body = encodeURIComponent(
      `Hi Inuv8 team,\n\nMy name is ${form.name || "[your name]"}.\n\n` +
        `Company: ${form.company || "[company]"}\nWebsite: ${
          form.website || "[website]"
        }\n` +
        `Budget: ${form.budget || "[budget]"}\nTimeline: ${
          form.timeline || "[timeline]"
        }\n\nMessage:\n${form.message || "[message]"}\n\nThanks.`
    );
    const mailto = `mailto:inuv8studios@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8 text-center">
          <h1 className="text-title text-4xl font-bold lg:text-5xl mt-15">
            Build with Us
          </h1>
          <p className="text-foreground mt-3">
            Have a game, art or design idea?
          </p>
          <p className="text-muted-foreground mt-3">
            We have the developers, artists and creatives to bring it to life.
          </p>
        </div>

        <div className="bg-ui border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-8 shadow-md">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-title">
                  Full name
                </span>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="input sz-md w-full"
                  placeholder="Jane Doe"
                  name="name"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-title">
                  Work Email
                </span>
                <input
                  required
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="input sz-md w-full"
                  placeholder="jane@studio.com"
                  name="email"
                  type="email"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-title">
                  Company / Studio
                </span>
                <input
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className="input sz-md w-full"
                  placeholder="Studio name (optional)"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-title">
                  Company website
                </span>
                <input
                  value={form.website}
                  onChange={(e) => update("website", e.target.value)}
                  className="input sz-md w-full"
                  placeholder="https://yourstudio.com"
                  type="url"
                />
              </label>

              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-title">Timeline</span>
                <select
                  value={form.timeline}
                  onChange={(e) => update("timeline", e.target.value)}
                  className="input sz-md w-full bg-background"
                >
                  <option value="">Select</option>
                  <option value="0-1 months">0 - 1 months (urgent)</option>
                  <option value="1-3 months">1 - 3 months</option>
                  <option value="3-6 months">3 - 6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </label>

              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-title">
                  Estimated budget
                </span>
                <select
                  value={form.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className="input sz-md w-full bg-background"
                >
                  <option value="">Select</option>
                  <option value="pro-bono">Pro-bono / Portfolio</option>
                  <option value="small- < $5k">&lt; $5k</option>
                  <option value="medium - $5k - $30k">$5k - $30k</option>
                  <option value="large - $30k+">$30k+</option>
                </select>
              </label>

              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-title">Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  required
                  rows={6}
                  className="textarea sz-md w-full rounded-lg my-4"
                  placeholder="Tell us about your idea, goals and what you need help with..."
                />
              </label>

              {/* Honeypot - hidden field to catch bots */}
              <input
                aria-hidden
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) => update("honeypot", e.target.value)}
                name="company_website"
                style={{ display: "none" }}
              />
            </div>
            <div className="text-sm text-muted-foreground pt-4">
              <div>
                We typically respond within 48-72 hours. By contacting us you
                agree to share project details.
              </div>
            </div>

            <div className="mt-6 gap-4">
              <div>
                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="min-w-[150px]"
                >
                  {loading ? "Sending..." : "Submit Inquiry"}
                </Button>
              </div>
              <div>
                {/* Fallback email button */}
                <Button asChild size="lg" variant="outline">
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openMailClient();
                    }}
                  >
                    Email Us Instead
                  </Link>
                </Button>
              </div>
            </div>
          </form>

          <div className="mt-6">
            {status === "success" && (
              <div className="rounded-md bg-green-50 px-4 py-3 text-green-800">
                Thanks — your message was sent. We’ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-md bg-amber-50 px-4 py-3 text-amber-900">
                {errorMessage}{" "}
                <button
                  onClick={openMailClient}
                  className="ml-2 underline text-amber-900"
                >
                  Open mail client
                </button>
              </div>
            )}

            {errorMessage && status === null && (
              <div className="rounded-md bg-foreground px-4 py-3 text-rose-500">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
