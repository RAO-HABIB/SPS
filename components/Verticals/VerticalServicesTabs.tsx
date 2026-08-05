  "use client";

import { useState, useRef, KeyboardEvent, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { VerticalServiceTab } from "@/lib/vertical-data";

interface Props {
  heading: string;
  subheading: string;
  tabs: VerticalServiceTab[];
}

export default function VerticalServicesTabs({
  heading,
  subheading,
  tabs,
}: Props) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentTab = tabs[activeTabIdx];
  const selectedCard = currentTab?.cards[selectedCardIdx];

  useEffect(() => {
    setSelectedCardIdx(0);
  }, [activeTabIdx]);

  const handleTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    let newIdx = idx;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        newIdx = (idx + 1) % tabs.length;
        break;
      case "ArrowLeft":
        e.preventDefault();
        newIdx = (idx - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        e.preventDefault();
        newIdx = 0;
        break;
      case "End":
        e.preventDefault();
        newIdx = tabs.length - 1;
        break;
      default:
        return;
    }
    setActiveTabIdx(newIdx);
    tabRefs.current[newIdx]?.focus();
  };

  if (!tabs.length) return null;

  return (
    <section
      aria-labelledby="services-tabs-heading"
      className="relative bg-linear-to-b from-white to-gray-50 pt-16 md:pt-20"
    >
      {/* ===== Decorative Top Elements ===== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-32 w-full overflow-hidden"
      >
        <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#1BA6C7]/5 blur-3xl" />
        <div className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-[#0a1b3d]/5 blur-3xl" />
      </div>

      {/* ===== Header ===== */}
      <header className="relative mb-10 px-4 text-center sm:px-6 md:mb-14 lg:px-8">
        <span className="mb-3 inline-block rounded-full border border-[#1BA6C7]/30 bg-[#1BA6C7]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1BA6C7]">
          Our Expertise
        </span>
        <h2
          id="services-tabs-heading"
          className="mb-3 text-3xl font-extrabold text-[#0a1b3d] sm:text-4xl md:text-5xl"
        >
          {heading}
        </h2>
        <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-linear-to-r from-[#1BA6C7] to-[#0a1b3d]" />
        <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
          {subheading}
        </p>
      </header>

      {/* ===== Tabs Navigation ===== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-label="Service categories"
          aria-orientation="horizontal"
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {tabs.map((tab, idx) => {
            const isActive = activeTabIdx === idx;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTabIdx(idx)}
                onKeyDown={(e) => handleTabKeyDown(e, idx)}
                className={`group relative min-h-12 overflow-hidden whitespace-nowrap rounded-full px-5 py-3 text-xs font-bold tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 sm:px-7 sm:text-sm md:px-8 ${
                  isActive
                    ? "bg-linear-to-r from-[#0a1b3d] to-[#1BA6C7] text-white shadow-lg shadow-[#1BA6C7]/40"
                    : "border-2 border-gray-200 bg-white text-gray-700 hover:border-[#1BA6C7] hover:text-[#1BA6C7] hover:shadow-md"
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 z-0 bg-linear-to-r from-[#0a1b3d] via-[#1BA6C7] to-[#0a1b3d] bg-size-[200%_auto] animate-shimmer"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== Tab Panel Content — PREMIUM PANEL ===== */}
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 md:mt-14 lg:px-8">
        <div
          role="tabpanel"
          id={`tabpanel-${currentTab.id}`}
          aria-labelledby={`tab-${currentTab.id}`}
          tabIndex={0}
          className="relative overflow-hidden rounded-3xl shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1BA6C7]"
        >
          {/* ===== Background Image ===== */}
          <div className="absolute inset-0">
            <Image
              src="/verticals/tabs.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
            {/* ===== Gradient Overlays for Depth ===== */}
            <div className="absolute inset-0 bg-linear-to-br from-[#0a1b3d]/95 via-[#0a1b3d]/85 to-[#1BA6C7]/60" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a1b3d] via-transparent to-transparent" />
          </div>

          {/* ===== Decorative Elements ===== */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* Dotted radial pattern */}
            <div
              className="absolute right-0 top-0 h-full w-1/2 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1BA6C7 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px",
                maskImage:
                  "radial-gradient(ellipse at right, black 30%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at right, black 30%, transparent 70%)",
              }}
            />
            {/* Corner accent shapes */}
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#1BA6C7]/10 blur-3xl" />
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* ===== Content Grid ===== */}
          <div className="relative grid min-h-100 grid-cols-1 gap-8 p-8 sm:p-10 md:grid-cols-5 md:gap-10 md:p-12 lg:p-16">
            {/* ===== LEFT: Card List (2 cols) ===== */}
            <nav
              aria-label={`${currentTab.label} services list`}
              className="md:col-span-2"
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#1BA6C7]">
                Available Services
              </p>
              <ul role="list" className="space-y-2">
                {currentTab.cards.map((card, idx) => {
                  const isCardActive = selectedCardIdx === idx;
                  return (
                    <li key={idx}>
                      <button
                        type="button"
                        onClick={() => setSelectedCardIdx(idx)}
                        aria-current={isCardActive ? "true" : undefined}
                        aria-label={`View details for ${card.title}`}
                        className={`group flex w-full min-h-12 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1b3d] sm:text-base ${
                          isCardActive
                            ? "bg-white/10 text-[#1BA6C7] shadow-lg backdrop-blur-sm ring-1 ring-[#1BA6C7]/30"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <ChevronRight
                          aria-hidden="true"
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                            isCardActive
                              ? "translate-x-0 text-[#1BA6C7]"
                              : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                          }`}
                        />
                        <span className="flex-1">{card.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ===== RIGHT: Selected Card Detail (3 cols) ===== */}
            <article
              aria-live="polite"
              aria-atomic="true"
              className="md:col-span-3"
            >
              {selectedCard && (
                <div className="relative flex h-full flex-col justify-center">
                  {/* Card badge */}
                  <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#1BA6C7]/30 bg-[#1BA6C7]/10 px-4 py-1.5 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[#1BA6C7] animate-pulse" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1BA6C7]">
                      {currentTab.label}
                    </span>
                  </div>

                  {/* Visible title (removed sr-only) */}
                  <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {selectedCard.title}
                  </h3>

                  <p className="mb-8 text-base leading-relaxed text-white/85 sm:text-lg">
                    {selectedCard.description}
                  </p>

                  <Link
                    href={selectedCard.href}
                    className="group inline-flex min-h-12 w-fit items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0a1b3d] shadow-xl transition-all duration-300 hover:bg-[#1BA6C7] hover:text-white hover:shadow-2xl hover:shadow-[#1BA6C7]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1b3d] sm:px-8 sm:text-base"
                  >
                    Learn More
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span className="sr-only"> about {selectedCard.title}</span>
                  </Link>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16 md:h-20" />
    </section>
  );
}