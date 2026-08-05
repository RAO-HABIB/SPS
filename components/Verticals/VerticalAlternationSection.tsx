// components/verticals/AlternatingSection.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { AlternatingSection as AlternatingSectionType } from "@/lib/vertical-data";

interface Props {
  data: AlternatingSectionType;
  /** Set true if this section is above the fold on the page */
  priorityFirstImage?: boolean;
}

export default function VerticalAlternatingSection({
  data,
  priorityFirstImage = false,
}: Props) {
  const { eyebrow, heading, subheading, items } = data;

  // Stable id for aria-labelledby (SEO + A11y)
  const headingId = heading
    ? `alt-section-${heading.toLowerCase().replace(/\s+/g, "-").slice(0, 40)}`
    : undefined;

  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-28 motion-safe:transition-colors"
    >
      {/* Decorative background — hidden from AT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(eyebrow || heading || subheading) && (
          <header className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 lg:mb-20">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-blue-200 sm:text-sm">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                <span>{eyebrow}</span>
              </p>
            )}
            {heading && (
              <h2
                id={headingId}
                className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              >
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg">
                {subheading}
              </p>
            )}
          </header>
        )}

        {/* Items */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {items.map((item, index) => {
            const itemHeadingId = `alt-item-${item.id}-heading`;
            const isFirst = index === 0;

            return (
              <article
                key={item.id}
                aria-labelledby={itemHeadingId}
                className={`group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-sm sm:gap-8 sm:rounded-3xl sm:p-8 lg:flex-row lg:gap-12 lg:p-12 motion-safe:transition-shadow motion-safe:duration-500 hover:shadow-xl hover:shadow-blue-100/50 ${
                  item.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl sm:rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 45vw"
                      quality={80}
                      priority={priorityFirstImage && isFirst}
                      loading={priorityFirstImage && isFirst ? "eager" : "lazy"}
                      className="object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out group-hover:motion-safe:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 opacity-20 blur-2xl sm:h-24 sm:w-24"
                  />
                </div>

                {/* Text */}
                <div className="flex w-full flex-col justify-center lg:w-1/2">
                  {item.tag && (
                    <p className="mb-3 inline-flex w-fit items-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm sm:mb-4 sm:text-xs">
                      {item.tag}
                    </p>
                  )}

                  <h3
                    id={itemHeadingId}
                    className="text-balance text-xl font-bold leading-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base lg:text-lg">
                    {item.description}
                  </p>

                  {(item.primaryCta || item.secondaryCta) && (
                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      {item.primaryCta && (
                        <Link
                          href={item.primaryCta.href}
                          aria-label={`${item.primaryCta.label} about ${item.title}`}
                          className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 motion-safe:transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 sm:px-6"
                        >
                          {item.primaryCta.label}
                          <ArrowRight
                            className="h-4 w-4 motion-safe:transition-transform group-hover/btn:motion-safe:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      )}
                      {item.secondaryCta && (
                        <Link
                          href={item.secondaryCta.href}
                          aria-label={`${item.secondaryCta.label} regarding ${item.title}`}
                          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 motion-safe:transition-all hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:px-6"
                        >
                          {item.secondaryCta.label}
                        </Link>
                      )}
                    </div>
                  )}
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/50 sm:rounded-3xl"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}