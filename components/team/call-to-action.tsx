import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Wanna join the Dream Team?
          </h2>
          <p className="mt-4">Reach out to us and Submit your resume...</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:your@email.com?subject=Hello%20from%20your%20site&body=Hi%20there%2C%0A%0AI'd%20like%20to%20get%20in%20touch...">
                <span>Reach Out</span>
              </a>
            </Button>

            {/* <Button asChild size="lg" variant="outline">
              <Link href="https://discord.gg/c74rnepdJx" target="_blank">
                <span>Join Our Discord</span>
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
