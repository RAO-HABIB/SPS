"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { NEWS_ITEMS, NEWS_INTRO } from "@/lib/news";
import type { NewsItem } from "@/lib/news";

export default function NewsInsights() {
  return (
    <section
      aria-labelledby="news-heading"
      className="w-full bg-[#FAFBFC] px-6 py-20 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* ============ Heading ============ */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0BB4D4]">
              {NEWS_INTRO.eyebrow}
            </span>
            <h2
              id="news-heading"
              className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#031B3D] lg:text-4xl"
            >
              {NEWS_INTRO.title} {NEWS_INTRO.highlight}
            </h2>
          </div>

          <Link
            href={NEWS_INTRO.cta.href}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-[#0057B8]/20 bg-white py-2.5 pl-5 pr-2.5 text-sm font-semibold text-[#0057B8] shadow-sm transition-all duration-300 hover:border-[#0057B8] hover:bg-[#0057B8] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003e85]"
          >
            {NEWS_INTRO.cta.label}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0057B8]/10 transition-all duration-300 group-hover:bg-white/20 group-hover:translate-x-0.5">
              <Icon icon="lucide:arrow-right" width={15} aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* ============ Equal Grid ============ */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS_ITEMS.map((item, i) => (
            <NewsCard key={item.id} item={item} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== News Card ====================== */
function NewsCard({ item, priority }: { item: NewsItem; priority?: boolean }) {
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_50px_-15px_rgba(0,87,184,0.25)]">
      {/* ---- Image ---- */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt=""
          aria-hidden="true"
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        {/* Soft top scrim so badge always readable regardless of image */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#003e85] backdrop-blur-sm">
          {item.category}
        </span>
      </div>

      {/* ---- Content ---- */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-2.5 text-xs font-medium text-slate-500">
          <time dateTime={item.date}>{formattedDate}</time>
          {item.readTime && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
              <span>{item.readTime}</span>
            </>
          )}
        </div>

        <h3 className="text-lg font-bold leading-snug tracking-tight text-[#031B3D] transition-colors duration-300 group-hover:text-[#0057B8]">
          <Link href={item.href} className="static focus-visible:outline-none">
            <span className="absolute inset-0 z-0" aria-hidden="true" />
            <span className="relative z-10 line-clamp-3">{item.title}</span>
          </Link>
        </h3>

        {/* Spacer pushes footer to bottom so all cards align */}
        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0BB4D4] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#0057B8]">
            Read More
            <Icon
              icon="lucide:arrow-right"
              width={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>

      {/* Focus-visible ring for keyboard nav on the whole card */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-[#0057B8] transition-all duration-200 group-has-[a:focus-visible]:ring-2" />
    </article>
  );
}