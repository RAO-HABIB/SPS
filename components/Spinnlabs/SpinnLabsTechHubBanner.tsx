import Image from "next/image";
import type { SpinnLabTechHubBanner } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabTechHubBanner;
}

export default function SpinnLabsTechHubBanner({ data }: Props) {
  return (
    <section
      aria-label="Tech Hub for innovators and entrepreneurs"
      className="relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero/Hero6.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:px-8 lg:py-16">
        {/* ===== Left: Tagline ===== */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Small badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            SpinnLabs
          </span>

          <p className="mt-4 text-balance text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {data.tagline}
          </p>

          {/* Accent line */}
          <span
            aria-hidden="true"
            className="mt-4 block h-1 w-16 rounded-full bg-linear-to-r from-[#1BA6C7] to-blue-400"
          />
        </div>

        <div className="flex justify-center lg:justify-end">
            <div className="relative aspect-2/1 w-full overflow-hidden rounded-xl bg-white">
              <Image
                src="/spinnlabs/2.jpg"
                alt={data.collageAlt || "Tech Hub collage"}
                fill
                loading="lazy"
                className="object-fit"
              />
            </div>
          </div>

      </div>
    </section>
  );
}