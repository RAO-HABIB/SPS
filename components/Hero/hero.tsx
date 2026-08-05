"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { WHAT_IF, CARD_SLIDES, AUTOPLAY_MS, HERO_BG_VIDEO } from "@/lib/hero";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay only the right-side card
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % CARD_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active, paused]);

  const slide = CARD_SLIDES[active];

  return (
    <section className="relative w-full overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <video
          src={HERO_BG_VIDEO}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950/60 via-slate-950/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-14 lg:flex-row lg:gap-16 lg:py-20">
        <div className="flex-1 max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-4 py-1.5 text-sm font-semibold text-cyan-300">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            {WHAT_IF.eyebrow}
          </div>

          {/* Title */}
          <h1 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-6xl">
            {WHAT_IF.title}{" "}
            <span className="text-cyan-300">{WHAT_IF.highlight}</span>
          </h1>

          {/* Bullets */}
          <ul className="mt-7 space-y-3">
            {WHAT_IF.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-400/15 text-cyan-300">
                  <Icon icon="lucide:check" width={14} />
                </span>
                <span className="text-base leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={WHAT_IF.primaryCta.href}
              className="flex items-center gap-2 rounded-lg bg-[#0057B8] px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-[#004494] hover:shadow-lg hover:shadow-[#0057B8]/30"
            >
              {WHAT_IF.primaryCta.label}
              <Icon icon="lucide:arrow-right" />
            </Link>
            <Link
              href={WHAT_IF.secondaryCta.href}
              className="rounded-lg border-2 border-white/70 px-6 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10"
            >
              {WHAT_IF.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* ============ RIGHT — Video Slider Card ============ */}
        <div className="flex w-full max-w-md shrink-0 justify-center lg:justify-end">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative aspect-4/5 w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10"
          >
            {/* Video slides */}
            {CARD_SLIDES.map((s, i) => (
              <video
                key={s.id}
                src={s.video}
                autoPlay
                muted
                loop
                playsInline
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
              {/* Top */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  LIVE PREVIEW
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(CARD_SLIDES.length).padStart(2, "0")}
                </span>
              </div>

              {/* Bottom */}
              <div key={`card-${slide.id}`} className="animate-fade-in">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {slide.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-bold leading-tight">
                  {slide.title}{" "}
                  <span className="text-cyan-300">{slide.highlight}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85 line-clamp-3">
                  {slide.description}
                </p>

                {/* Controls */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      aria-label="Previous slide"
                      onClick={() =>
                        setActive(
                          (p) => (p - 1 + CARD_SLIDES.length) % CARD_SLIDES.length
                        )
                      }
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30"
                    >
                      <Icon icon="lucide:arrow-left" width={16} />
                    </button>
                    <button
                      aria-label="Next slide"
                      onClick={() =>
                        setActive((p) => (p + 1) % CARD_SLIDES.length)
                      }
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-md transition hover:bg-white/30"
                    >
                      <Icon icon="lucide:arrow-right" width={16} />
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="flex gap-1.5">
                    {CARD_SLIDES.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setActive(i)}
                        aria-label={`Go to ${s.eyebrow}`}
                        className={`h-1.5 rounded-full transition-all ${
                          i === active
                            ? "w-7 bg-cyan-300"
                            : "w-4 bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    key={`progress-${active}-${paused}`}
                    className={`h-full bg-cyan-300 ${
                      paused ? "" : "animate-progress"
                    }`}
                    style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}