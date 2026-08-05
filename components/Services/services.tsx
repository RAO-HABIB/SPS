"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { SERVICE_TABS } from "@/lib/services";

const AUTOPLAY_MS = 3000;
const CARDS_PER_PAGE = 2;

// Split an array into chunks of a given size
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export default function Services() {
  const [activeTabId, setActiveTabId] = useState(SERVICE_TABS[0].id);
  const [activePage, setActivePage] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activeTab = SERVICE_TABS.find((t) => t.id === activeTabId)!;
  const pages = chunk(activeTab.slides, CARDS_PER_PAGE);
  const currentPage = pages[activePage] ?? pages[0];

  const handleTabChange = (id: string) => {
    setActiveTabId(id);
    setActivePage(0);
  };

  useEffect(() => {
    if (paused || pages.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setActivePage((p) => (p + 1) % pages.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activePage, paused, pages.length]);

  return (
    <section className="relative w-full overflow-hidden bg-blue-50 px-6 py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#0057B8]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-[#0057B8]/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-[#0057B8]">
            Our Expertise
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 lg:text-4xl">
            Comprehensive Technology Services
          </h2>
        </div>

        {/* ============ TOP — Pill Tabs, centered ============ */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {SERVICE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                aria-pressed={isActive}
                className={`inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-bold transition-all ${
                  isActive
                    ? "bg-[#0057B8] text-white shadow-lg shadow-[#0057B8]/30"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#0057B8] hover:text-[#0057B8]"
                }`}
              >
                <Icon
                  icon={tab.icon}
                  width={18}
                  className={isActive ? "text-white" : "text-[#0057B8]"}
                />
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* ============ CARD CONTAINER ============ */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6"
        >
          {/* Category headline */}
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">
              {activeTab.headline}
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 lg:text-base">
              {activeTab.description}
            </p>
          </div>

          {/* ====== 2-Card Grid Page ====== */}
          <div
            key={`${activeTabId}-${activePage}`}
            className="animate-fade-in flex flex-wrap justify-center gap-5"
          >
            {currentPage.map((slide) => (
              <div
                key={slide.id}
                className="w-full overflow-hidden rounded-xl border border-slate-200 sm:w-[calc(50%-0.625rem)]"
              >
                {/* Dark top strip */}
                <div className="relative overflow-hidden bg-[#03264d] p-6">
                  <div
                    className="pointer-events-none absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex-1">
                      {activeTab.badge && (
                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-cyan-300">
                          <Icon icon="lucide:star" width={13} />
                          {activeTab.badge}
                        </span>
                      )}
                      <h4 className="mb-2 text-base font-bold text-white lg:text-lg">
                        {slide.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {slide.description}
                      </p>
                    </div>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10">
                      <Icon icon={slide.icon} width={24} className="text-cyan-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom stats row */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4">
                  {slide.stats && slide.stats.length > 0 ? (
                    <div className="flex flex-wrap gap-5">
                      {slide.stats.map((s, i) => (
                        <div key={i}>
                          <p className="text-base font-bold text-slate-900">
                            {s.value}
                          </p>
                          <p className="text-[11px] text-slate-500">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span />
                  )}
                  <Link
                    href={slide.href}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold text-[#0057B8] hover:text-[#004494]"
                  >
                    Read more
                    <Icon icon="lucide:arrow-right" width={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ====== Page Controls ====== */}
          {pages.length > 1 && (
            <div className="mt-6 flex items-center justify-center gap-1.5">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActivePage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-0.75 rounded-full transition-all ${
                    i === activePage
                      ? "w-5 bg-[#0057B8]"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}