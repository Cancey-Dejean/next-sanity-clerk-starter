import Link from "next/link";

import { Button } from "@/components/ui/Button";
import GetStartedCode from "@/components/GetStartedCode";
import Container from "@/components/ui/container";

import { HeroOne as Hero } from "@/types";

export default function HeroOne({
  topText,
  headline,
  subHeading,
  copyPasteText = "copy",
  ctaButtons,
}: Hero) {
  return (
    <section className="relative bg-gradient-to-r from-red-200 from-0% via-white via-40%">
      <div className="absolute top-0 h-40 w-full bg-gradient-to-b from-white"></div>
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-white"></div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl py-20 text-center lg:max-w-4xl lg:px-12">
          <div className="flex flex-col items-center gap-4">
            {topText && (
              <div className="text-md uppercase leading-6">{topText}</div>
            )}

            <h1 className="font-display text-5xl font-bold tracking-tighter text-black sm:text-6xl md:text-7xl lg:text-8xl">
              <Link className="text-red-500" href="https://sanity.io/">
                {headline}
              </Link>
            </h1>
          </div>

          {subHeading && (
            <div className="prose sm:prose-lg md:prose-xl lg:prose-2xl mt-6 space-y-6 text-gray-700">
              <p>{subHeading}</p>
            </div>
          )}

          {ctaButtons && ctaButtons.length > 0 && (
            <div className="mt-4 flex items-center justify-center gap-4">
              {ctaButtons.map(({ label, newTab, url, variant, size }) => (
                <Button key={label} variant={variant} asChild size={size}>
                  <Link
                    href={url || "/"}
                    target={newTab ? "_blank" : "_self"}
                    rel={newTab ? "noopener noreferrer" : undefined}
                  >
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          )}

          {copyPasteText && (
            <div className="flex flex-col items-center gap-4">
              <GetStartedCode code={copyPasteText} />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
