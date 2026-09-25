import React from "react";
import Link from "next/link";

export default function PrivacySection() {
  return (
    <section className="py-16 md:py-40">
      <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-12">
        <div className="space-y-4 border-b border-border pb-8">
          <h1 className="relative z-10 text-4xl font-medium lg:text-5xl leading-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last Updated:{" "}
            <span className="font-semibold text-accent-foreground">
              Sepetember 25, 2026
            </span>
          </p>
        </div>

        <div className="space-y-10">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              1. Introduction
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Inuv8 Studios Limited (&quot;we&quot;, &quot;our&quot;
              or &quot;us&quot;). We are a digital and game development studio
              based in Nigeria. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our
              website, participate in our playtests, interact with our community
              channels (such as Discord), or play our games.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site or our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may collect information about you in a variety of ways,
              depending on how you interact with us:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <span className="font-semibold text-foreground">
                  Personal Data:
                </span>{" "}
                Information you voluntarily provide to us via contact forms,
                newsletter sign-ups, or survey responses (such as your name and
                email address).
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Game & Playtest Data:
                </span>{" "}
                When you participate in our beta tests or play our titles via
                platforms like Steam, Playstation or Google Play, we may collect
                telemetry data, bug reports, hardware specifications, and
                in-game performance metrics to improve the experience.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Derivative Data:
                </span>{" "}
                Information our servers automatically collect when you access
                our website, such as your IP address, browser type, operating
                system, access times, and the pages you have viewed.
              </li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              3. How We Use Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Having accurate information about you permits us to provide you
              with a smooth, efficient, and customized experience. Specifically,
              we may use information collected about you to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                Deliver, troubleshoot, and improve our games and web platforms.
              </li>
              <li>
                Respond to your customer service requests and community
                inquiries.
              </li>
              <li>
                Compile anonymous statistical data and analysis for use
                internally.
              </li>
              <li>
                Send you updates, newsletters, or playtest invitations (only if
                you have opted in).
              </li>
            </ul>
          </div>

          {/* Cookies & Analytics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              4. Cookies & Analytics
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies, web beacons, tracking pixels, and other
              tracking technologies to help customize our website and improve
              your experience. We may also partner with selected third-party
              vendors (such as Vercel Analytics or Google Analytics) to allow
              tracking technologies and remarketing services on our site through
              the use of first-party cookies and third-party cookies.
            </p>
          </div>

          {/* Third-Party Services */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              5. Third-Party Services & Platforms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website and games interface with third-party platforms. When
              you connect with us through these services, their respective
              privacy policies also apply:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <span className="font-semibold text-foreground">
                  Community & Social:
                </span>{" "}
                Discord, X (formerly Twitter), and LinkedIn.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Distribution Platforms:
                </span>{" "}
                Steam, Google Play, Apple App Store, Playstation and Xbox.
              </li>
              <li>
                <span className="font-semibold text-foreground">
                  Forms & Feedback:
                </span>{" "}
                Google Forms for playtest surveys and feedback.
              </li>
              <li>
                <span className="font-semibold text-foreground">Playfab:</span>{" "}
                Player Accounts for mobile games and leaderboard.
              </li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              6. Data Sharing & International Transfers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              As a studio based in Nigeria, your information may be transferred
              to, stored, and processed in Nigeria or other countries where our
              third-party service providers maintain facilities. We do not sell
              your personal data. We may share information with service
              providers that perform services for us or on our behalf, such as
              data analysis, email delivery, and hosting services.
            </p>
          </div>

          {/* Data Security & Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              7. Data Security & Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use administrative, technical, and physical security measures
              to help protect your personal information. We will only keep your
              personal information for as long as it is necessary for the
              purposes set out in this privacy policy, unless a longer retention
              period is required or permitted by law.
            </p>
          </div>

          {/* Your Privacy Rights */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              8. Your Privacy Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have the right to request
              access to the personal data we collect from you, change that
              information, or delete it. To request to review, update, or delete
              your personal information, please submit a request to our contact
              email below.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not knowingly solicit information from or market to children
              under the age of 13. If we learn that personal information from
              users less than 13 years of age has been collected, we will
              deactivate the account and take reasonable measures to promptly
              delete such data from our records.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              10. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to make changes to this Privacy Policy at any
              time and for any reason. We will alert you about any changes by
              updating the &quot;Last Updated&quot; date of this Privacy Policy.
              You are encouraged to periodically review this Privacy Policy to
              stay informed of updates.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 rounded-xl bg-muted/50 p-6 md:p-8 mt-12 border border-border">
            <h2 className="text-2xl font-semibold text-accent-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us via our official social channels or by Email:{" "}
              <Link
                href="mailto:info@inuv8studios.com"
                target="_blank"
                className="font-medium text-accent-foreground hover:underline transition-all"
              >
                info@inuv8studios.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
