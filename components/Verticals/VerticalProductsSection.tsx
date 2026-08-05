"use client";

import { useState, useRef, KeyboardEvent } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { VerticalProductTab } from "@/lib/vertical-data";
import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
  tabs: VerticalProductTab[];
}

export default function VerticalProductsSection({
  heading,
  subheading,
  tabs,
}: Props) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentTab = tabs[activeTabIdx];

  const handleTabKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
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
    <section aria-labelledby="products-heading" className="bg-white">
      <div className="px-4 pt-16 pb-8 sm:px-6 md:pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ===== Header ===== */}
          <header className="mb-10 text-center md:mb-12">
            <h2
              id="products-heading"
              className="mb-4 text-3xl font-extrabold text-[#0a1b3d] sm:text-4xl md:text-5xl"
            >
              {heading}
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base md:text-lg">
              {subheading}
            </p>
          </header>

          {/* ===== TABS — Horizontal Center ===== */}
          <div
            role="tablist"
            aria-label="Product categories"
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
                  id={`product-tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`product-panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTabIdx(idx)}
                  onKeyDown={(e) => handleTabKeyDown(e, idx)}
                  className={`group relative min-h-12 overflow-hidden whitespace-nowrap rounded-2xl px-6 py-3 text-xs font-bold tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 sm:px-8 sm:text-sm ${
                    isActive
                      ? "bg-[#0a1b3d] text-white shadow-xl shadow-[#0a1b3d]/20"
                      : "border border-gray-200 bg-white text-gray-700 hover:border-[#1BA6C7] hover:bg-[#1BA6C7]/5 hover:text-[#1BA6C7]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {tab.label}
                    {isActive && (
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    )}
                  </span>
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 h-0.5 w-1/2 -translate-x-1/2 rounded-full bg-[#1BA6C7]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        id={`product-panel-${currentTab.id}`}
        aria-labelledby={`product-tab-${currentTab.id}`}
        tabIndex={0}
        className="relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1BA6C7]"
      >
        {/* ===== Background Image ===== */}
        <div aria-hidden="true" className="absolute inset-0">
          <Image
            src="/verticals/government1.jpg"
            alt=""
            fill
            priority={false}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-br from-[#0a0521]/85 via-[#0a1b3d]/80 to-[#1a0a3d]/85" />
        </div>

        {/* ===== Decorative Elements ===== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Glowing orbs */}
          <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
          <div className="absolute bottom-1/4 left-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentTab.products.map((product, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(27,166,199,0.4)] hover:ring-[#1BA6C7]/40"
              >
                {/* Decorative corner gradient */}
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-linear-to-br from-[#1BA6C7]/10 to-purple-500/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:from-[#1BA6C7]/20 group-hover:to-purple-500/20"
                />

                {/* Icon Badge + Category tag */}
                <div className="relative mb-6 flex items-start justify-between">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#0a1b3d] to-[#1BA6C7] shadow-lg shadow-[#1BA6C7]/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon
                        icon={product.icon}
                        width={24}
                        height={24}
                        aria-hidden="true"
                        className="text-white"
                      />
                    </div>
                    <div className="absolute inset-0 -z-10 rounded-2xl bg-[#1BA6C7] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
                  </div>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-600 transition-colors group-hover:bg-[#1BA6C7]/10 group-hover:text-[#1BA6C7]">
                    {currentTab.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative mb-3 text-2xl font-extrabold text-[#0a1b3d] transition-colors group-hover:text-[#1BA6C7]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="relative mb-6 text-sm leading-relaxed text-gray-600 line-clamp-6">
                  {product.description}
                </p>

                {/* CTA */}
                {product.href && (
                  <Link
                    href={product.href}
                    className="group/link relative inline-flex items-center gap-2 text-sm font-bold text-[#0a1b3d] transition-all hover:text-[#1BA6C7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2"
                    aria-label={`Discover more about ${product.title}`}
                  >
                    <span className="relative">
                      Discover
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#1BA6C7] transition-all duration-300 group-hover/link:w-full"
                      />
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1BA6C7]/10 transition-all group-hover/link:bg-[#1BA6C7] group-hover/link:text-white">
                      <ArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-45"
                      />
                    </span>
                  </Link>
                )}

                {/* Bottom accent bar */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-transparent via-[#1BA6C7]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}