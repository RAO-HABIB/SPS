// components/SpinnLabs/SpinnLabsExpertiseSection.tsx
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import type { SpinnLabExpertiseSection } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabExpertiseSection;
}

export default function SpinnLabsExpertiseSection({ data }: Props) {
  return (
    <section
      aria-labelledby="expertise-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle decorative bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-40 -left-32 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
        <div className="absolute bottom-40 -right-32 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===== TOP: Features + Gallery ===== */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* LEFT: Features list */}
          <div>
            {data.eyebrow && (
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1BA6C7]">
                <span aria-hidden="true" className="h-px w-8 bg-[#1BA6C7]" />
                {data.eyebrow}
              </p>
            )}

            <h2
              id="expertise-heading"
              className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {data.heading}
            </h2>

            {/* Features */}
            <ul role="list" className="mt-10 space-y-8 sm:mt-12">
              {data.features.map((feature, i) => (
                <li
                  key={i}
                  className="group relative grid grid-cols-[auto_1fr] gap-5 border-l border-slate-100 pl-6 transition-colors duration-300 hover:border-[#1BA6C7]"
                >
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="text-sm font-bold tabular-nums text-slate-300 transition-colors duration-300 group-hover:text-[#1BA6C7]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Asymmetric image gallery */}
          <div className="relative hidden lg:block">
            <div className="sticky top-24 grid grid-cols-2 gap-4">
              {/* Big image top-left */}
              {data.gallery[0] && (
                <div className="relative col-span-2 aspect-16/10 overflow-hidden rounded-2xl">
                  <Image
                    src={data.gallery[0].src}
                    alt={data.gallery[0].alt}
                    fill
                    sizes="(max-width: 1024px) 0px, 500px"
                    quality={85}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Two smaller images below */}
              {data.gallery[1] && (
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={data.gallery[1].src}
                    alt={data.gallery[1].alt}
                    fill
                    sizes="(max-width: 1024px) 0px, 240px"
                    quality={85}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}
              {data.gallery[2] && (
                <div className="relative mt-8 aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src={data.gallery[2].src}
                    alt={data.gallery[2].alt}
                    fill
                    sizes="(max-width: 1024px) 0px, 240px"
                    quality={85}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Subtle accent dot */}
              <div
                aria-hidden="true"
                className="absolute -top-3 -left-3 h-6 w-6 rounded-full bg-[#1BA6C7]"
              />
            </div>
          </div>

          {/* Mobile gallery — simple horizontal scroll */}
          <div className="lg:hidden">
            <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
              {data.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square w-64 shrink-0 snap-start overflow-hidden rounded-2xl"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="256px"
                    quality={85}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== BOTTOM: How to Join CTA ===== */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-linear-to-br from-[#1BA6C7] via-blue-600 to-blue-800 p-8 sm:mt-24 sm:p-12 lg:p-16">
          {/* Decorative shapes */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
          </div>

          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                <span aria-hidden="true" className="h-px w-8 bg-cyan-200" />
                Get Started
              </p>

              <h3 className="text-balance text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {data.joinTitle}
              </h3>

              <p className="mt-4 text-pretty text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                {data.joinDescription}
              </p>
            </div>

            <Link
              href={data.joinCta.href}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#1BA6C7] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1BA6C7] sm:text-base"
            >
              {data.joinCta.label}
              <Icon
                icon="lucide:arrow-right"
                width={18}
                height={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}