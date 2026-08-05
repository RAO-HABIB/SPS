"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { usePathname } from "next/navigation";
import { verticalCategories } from "@/lib/vertical-data";

interface Props {
  activeCategorySlug?: string;
}

export default function VerticalSubNav({ activeCategorySlug }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Active category object (for mobile label)
  const activeCategory = verticalCategories.find(
    (c) => c.slug === activeCategorySlug
  );

  // ✅ Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenCategory(null);
        setMobileDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // ✅ Close dropdown on outside click (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileDrawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  // ✅ Auto-scroll active pill into view on mobile
  useEffect(() => {
    if (!scrollRef.current || !activeCategorySlug) return;
    const activeEl = scrollRef.current.querySelector<HTMLElement>(
      `[data-slug="${activeCategorySlug}"]`
    );
    activeEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeCategorySlug]);

  const toggleCategory = useCallback((slug: string) => {
    setOpenCategory((prev) => (prev === slug ? null : slug));
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Verticals categories navigation"
        className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm"
      >
        {/* ============ DESKTOP (lg+) ============ */}
        <div className="mx-auto hidden max-w-7xl lg:block">
          <ul role="menubar" className="grid grid-cols-7">
            {verticalCategories.map((cat) => {
              const isActive = activeCategorySlug === cat.slug;
              const isOpen = openCategory === cat.slug;
              const hasSubItems = cat.subItems.length > 0;

              return (
                <li
                  key={cat.slug}
                  role="none"
                  className="relative"
                  onMouseEnter={() => hasSubItems && setOpenCategory(cat.slug)}
                  onMouseLeave={() => setOpenCategory(null)}
                >
                  <button
                    type="button"
                    role="menuitem"
                    aria-haspopup={hasSubItems ? "menu" : undefined}
                    aria-expanded={hasSubItems ? isOpen : undefined}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => toggleCategory(cat.slug)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleCategory(cat.slug);
                      }
                    }}
                    className={`flex w-full min-h-16 flex-col items-center justify-center gap-1 px-2 py-3 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-b-2 border-[#1BA6C7] text-[#1BA6C7]"
                        : "text-gray-700 hover:text-[#1BA6C7]"
                    }`}
                  >
                    <Icon icon={cat.icon} width={22} height={22} aria-hidden="true" />
                    <span className="text-center text-sm font-semibold">
                      {cat.title}
                    </span>
                  </button>

                  {/* Desktop Dropdown */}
                  {isOpen && hasSubItems && (
                    <ul
                      role="menu"
                      aria-label={`${cat.title} sub-categories`}
                      className="absolute left-1/2 top-full z-50 min-w-60 -translate-x-1/2 animate-fade-in rounded-md border border-gray-200 bg-white py-2 shadow-2xl"
                    >
                      {cat.subItems.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <li key={item.slug} role="none">
                            <Link
                              href={item.href}
                              role="menuitem"
                              aria-current={isItemActive ? "page" : undefined}
                              className={`block min-h-11 px-5 py-2.5 text-sm transition-colors focus:outline-none focus-visible:bg-gray-100 focus-visible:text-[#1BA6C7] ${
                                isItemActive
                                  ? "font-semibold text-[#1BA6C7]"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#1BA6C7]"
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ============ MOBILE / TABLET (<lg) ============ */}
        <div className="flex items-center gap-2 px-3 py-2 lg:hidden">
          {/* "All" button — opens drawer */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Open all categories menu"
            aria-expanded={mobileDrawerOpen}
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-2 text-xs font-semibold text-gray-700 shadow-sm transition hover:border-[#1BA6C7] hover:text-[#1BA6C7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
          >
            <Icon icon="lucide:menu" width={16} height={16} aria-hidden="true" />
            All
          </button>

          {/* Divider */}
          <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

          {/* Horizontal scrolling pills */}
          <div
            ref={scrollRef}
            role="menubar"
            aria-label="Vertical categories"
            className="scrollbar-hide flex flex-1 gap-2 overflow-x-auto scroll-smooth"
          >
            {verticalCategories.map((cat) => {
              const isActive = activeCategorySlug === cat.slug;
              const firstSubItem = cat.subItems[0];
              const href = firstSubItem?.href ?? "#";

              return (
                <Link
                  key={cat.slug}
                  href={href}
                  data-slug={cat.slug}
                  role="menuitem"
                  aria-current={isActive ? "page" : undefined}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] ${
                    isActive
                      ? "bg-[#1BA6C7] text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon icon={cat.icon} width={14} height={14} aria-hidden="true" />
                  <span className="whitespace-nowrap">{cat.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ============ MOBILE DRAWER (Full Categories + Sub-items) ============ */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="All vertical categories"
        >
          {/* Backdrop */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(false)}
            aria-label="Close menu"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 left-0 flex w-full max-w-sm flex-col bg-white shadow-2xl animate-slide-in-left">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h2 className="text-lg font-bold text-gray-900">Categories</h2>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(false)}
                aria-label="Close categories menu"
                className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7]"
              >
                <Icon icon="lucide:x" width={20} height={20} aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-2 py-3">
              {verticalCategories.map((cat) => {
                const isActive = activeCategorySlug === cat.slug;
                return (
                  <details
                    key={cat.slug}
                    open={isActive}
                    className="group border-b border-gray-100 last:border-none"
                  >
                    <summary
                      className={`flex cursor-pointer list-none items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] ${
                        isActive
                          ? "text-[#1BA6C7]"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon
                          icon={cat.icon}
                          width={18}
                          height={18}
                          aria-hidden="true"
                        />
                        {cat.title}
                      </span>
                      <Icon
                        icon="lucide:chevron-down"
                        width={18}
                        height={18}
                        aria-hidden="true"
                        className="transition-transform group-open:rotate-180"
                      />
                    </summary>

                    <ul className="mb-2 ml-9 space-y-1">
                      {cat.subItems.map((item) => {
                        const isItemActive = pathname === item.href;
                        return (
                          <li key={item.slug}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileDrawerOpen(false)}
                              aria-current={isItemActive ? "page" : undefined}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors focus:outline-none focus-visible:bg-gray-100 ${
                                isItemActive
                                  ? "bg-[#1BA6C7]/10 font-semibold text-[#1BA6C7]"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#1BA6C7]"
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                );
              })}
            </div>

            {/* Footer (optional current context) */}
            {activeCategory && (
              <div className="border-t border-gray-200 bg-gray-50 px-5 py-3 text-xs text-gray-500">
                Currently viewing:{" "}
                <span className="font-semibold text-gray-900">
                  {activeCategory.title}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}