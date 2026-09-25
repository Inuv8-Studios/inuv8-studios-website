import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Inuv8 Studios",
  description: "Terms of Service and usage guidelines for Inuv8 Studios.",
};

export default function TermsOfServicePage() {
  return (
    <section className="py-16 md:py-40">
      <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-12">
        {/* Header */}
        <div className="border-b border-border pb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: September 25, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website, games, tools, and related
              services provided by Inuv8 Studios (&quot;we,&quot; &quot;us,&quot; or our&quot;), you
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services or participate in
              our game playtests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              2. Intellectual Property Rights
            </h2>
            <p>
              All content, including but not limited to game code, visual
              assets, 3D models, animations, narratives, audio, branding, and
              promotional materials, are the exclusive property of Inuv8 Studios
              and are protected by copyright, trademark, and other intellectual
              property laws. You may not copy, modify, distribute, sell, or
              reverse engineer any part of our games or services without
              explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              3. Playtesting, Early Access, and Feedback
            </h2>
            <p className="mb-4">
              As a development studio, we frequently conduct closed and open
              playtests. By participating in these early access phases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You acknowledge that the software is in development and may
                contain bugs, errors, or incomplete features.
              </li>
              <li>
                You agree that any feedback, bug reports, or suggestions you
                provide to us become the property of Inuv8 Studios, and we may
                use this feedback to improve our games without any obligation of
                compensation to you.
              </li>
              <li>
                If a playtest is marked as confidential or requires a
                Non-Disclosure Agreement (NDA), you agree not to capture,
                stream, or share gameplay footage or details publicly.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              4. User Conduct
            </h2>
            <p className="mb-4">
              When interacting with our community platforms, multiplayer
              environments, or services, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use cheats, exploits, automation software, or unauthorized
                third-party tools designed to modify our games or multiplayer
                experiences.
              </li>
              <li>
                Harass, threaten, or display toxic behavior toward other players
                or Inuv8 Studios staff.
              </li>
              <li>
                Attempt to disrupt our networking frameworks, peer-to-peer
                connections, or server infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              5. Third-Party Services
            </h2>
            <p>
              Our website or games may contain links to third-party platforms
              (e.g., Steam, Google Play, payment gateways). We do not control
              these external services and are not responsible for their content,
              privacy policies, or practices. Your interactions with third-party
              platforms are governed by their respective terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p>
              Our games and services are provided on an &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; basis. Inuv8 Studios makes no warranties, expressed or
              implied, regarding the uninterrupted availability, performance, or
              bug-free nature of our software. We reserve the right to archive,
              suspend, or discontinue any game or project at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Inuv8 Studios shall not be
              liable for any indirect, incidental, special, or consequential
              damages resulting from your use or inability to use our games or
              services, including but not limited to loss of data or hardware
              malfunction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              8. Changes to These Terms
            </h2>
            <p>
              We reserve the right to update or modify these Terms of Service at
              any time. We will notify users of any significant changes by
              updating the &rdqou;Last updated&rdqou; date at the top of this page.
              Continued use of our services after such modifications constitutes
              your acknowledgment and acceptance of the updated terms.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us via our official social channels or by returning to our{" "}
              <Link href="/" className="text-primary hover:underline">
                homepage
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
