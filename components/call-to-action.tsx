import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Let's get you in.
          </h2>
          <p className="mt-4">
            Experience The Surreal and Magical Journey Through Dreams...
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link
                href="https://inuv8-studios.itch.io/midnight-dreams"
                target="_blank"
              >
                <span>Play Demo</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="https://discord.gg/c74rnepdJx" target="_blank">
                <span>Join Our Discord</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
