"use client";

import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { STARTUPS, STARTUPS_INTRO } from "@/lib/startups";

export default function Startups() {
  return (
    <section className="relative w-full">
      {/* ============ TOP DARK BANNER ============ */}
      <div className="relative overflow-hidden bg-[#03122F] px-6 py-16 text-white lg:px-8 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4FC3F7 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Blue glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-175 -translate-x-1/2 rounded-full bg-[#0057B8]/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold lg:text-4xl">
            {STARTUPS_INTRO.eyebrow}
          </h2>
          <p className="mt-3 text-lg font-medium text-white/90 lg:text-xl">
            {STARTUPS_INTRO.title}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/75 lg:text-base">
            {STARTUPS_INTRO.description}
          </p>
        </div>
      </div>

      {/* ============ CARDS GRID ============ */}
      <div className="relative bg-[#EAF4FB] px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {STARTUPS.map((s) => (
            <StartupCard key={s.id} startup={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Reusable card ============ */
function StartupCard({ startup }: { startup: (typeof STARTUPS)[number] }) {
  return (
    <article className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-white px-6 pb-6 pt-6 shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0057B8]/30">
      <span className="absolute top-6 left-6 z-0 h-14 w-14 rounded-xl bg-[#0057B8] transition-all duration-500 group-hover:scale-[18]" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-[#0057B8] transition-all duration-300">
          <Icon
            icon={startup.icon}
            width={26}
            height={26}
            className="text-white"
          />
        </div>

        {/* Title */}
        <h3 className="mt-5 text-lg font-extrabold text-[#0a1a3a] transition-colors duration-300 group-hover:text-white">
          {startup.name}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white/90">
          {startup.description}
        </p>

        {/* Dashed separator */}
        <div className="my-5 border-t border-dashed border-slate-300 transition-colors duration-300 group-hover:border-white/40" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Link
            href={startup.href}
            className="flex items-center gap-2 text-sm font-semibold text-[#0057B8] transition-colors duration-300 group-hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#0057B8] transition-colors duration-300 group-hover:bg-white" />
            Read More
          </Link>

          <Link
            href={startup.href}
            aria-label={`Open ${startup.name}`}
            className="grid h-10 w-10 place-items-center rounded-full bg-[#0057B8] text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0057B8]"
          >
            <Icon icon="lucide:arrow-up-right" width={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}