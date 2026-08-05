"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, type NavItem } from "@/lib/navigation";

function chunkGroupsIntoRows<T>(groups: T[], columnsPerRow: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < groups.length; i += columnsPerRow) {
    rows.push(groups.slice(i, i + columnsPerRow));
  }
  return rows;
}

export default function Navbar() {
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const hasChildren = (item: NavItem) =>
    (item.groups && item.groups.length > 0) || (item.items && item.items.length > 0);

  // ✅ UPDATED: Mega menu only if BOTH groups AND promo exist
  const isMega = (item: NavItem) =>
    !!item.groups && item.groups.length > 0 && !!item.promo;

  const closeAll = useCallback(() => {
    setOpenDesktop(null);
    setMobileOpen(false);
    setOpenMobileItem(null);
  }, []);

  const handleEnter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDesktop(null), 120);
  }, []);

  const handleFocusCapture = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDesktop(label);
  };
  const handleBlurCapture = (e: React.FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      handleLeave();
    }
  };

  const handleTriggerKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    label: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenDesktop((cur) => (cur === label ? null : label));
    }
  };

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + "/");

  const activeItem = NAV.find((n) => n.label === openDesktop);
  const activeIsMega = activeItem ? isMega(activeItem) : false;

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white text-black shadow-lg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-350 items-center justify-between gap-4 px-4 py-3 lg:px-10"
      >
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo/logo1.png"
            width={250}
            height={250}
            alt="SPS - go to homepage"
            unoptimized
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="mb-2 hidden items-center gap-1 xl:flex">
          {NAV.map((item) => {
            const open = openDesktop === item.label;

            if (!hasChildren(item)) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="rounded px-3 py-2 text-sm font-medium text-black outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
                onFocusCapture={() => handleFocusCapture(item.label)}
                onBlurCapture={handleBlurCapture}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open}
                  onClick={() => setOpenDesktop(open ? null : item.label)}
                  onKeyDown={(e) => handleTriggerKeyDown(e, item.label)}
                  className="flex items-center gap-1 rounded px-3 py-4 text-sm font-medium text-black outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-black">+</span>
                </button>

                {open && !isMega(item) && (
                  <div
                    className="animate-fade-in absolute left-0 top-full mt-2 min-w-64 rounded-xl border border-gray-100 bg-white p-2 text-black shadow-xl"
                    role="menu"
                    aria-label={item.label}
                  >
                    <ul className="space-y-0.5">
                      {/* Groups-based (with flyout for items) — e.g., Activities */}
                      {item.groups?.map((group) => (
                        <NestedMenuItem
                          key={group.label}
                          group={group}
                          isActive={isActive}
                          closeAll={closeAll}
                        />
                      ))}

                      {/* Simple items-based — e.g., SpinnLabs, About Us */}
                      {item.items?.map((sub) => (
                        <li key={sub.href} role="none">
                          <Link
                            href={sub.href}
                            onClick={closeAll}
                            role="menuitem"
                            aria-current={isActive(sub.href) ? "page" : undefined}
                            className="block rounded px-3 py-2 text-sm text-black outline-none hover:bg-cyan-300 over:text-cyan-600 focus-visible:ring-2 focus-visible:ring-cyan-500"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/contact"
            className="rounded-sm bg-blue-600 px-5 py-2 text-sm font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
          >
            Internship
          </Link>
          <button
            type="button"
            aria-label="More information"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white/80 outline-none hover:border-cyan-300 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            <span aria-hidden="true">i</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded p-2 text-black outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 xl:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* ===== MEGA MENU (Products, Services, Verticals) ===== */}
      {activeItem && activeIsMega && (
        <div
          onMouseEnter={() => handleEnter(activeItem.label)}
          onMouseLeave={handleLeave}
          className="absolute left-0 right-0 top-full hidden xl:block"
        >
          <div className="mx-auto max-w-350 px-4 pb-6 lg:px-10">
            <div className="animate-fade-in overflow-hidden rounded-2xl bg-white text-gray-800 shadow-2xl ring-1 ring-black/5">
              <div className="grid grid-cols-12 gap-8 p-6">
                {/* LEFT — image + description + CTA (only if promo exists) */}
                {activeItem.promo && (
                  <div className="col-span-4">
                    <div className="relative h-56 w-full overflow-hidden rounded-xl">
                      <Image
                        src={activeItem.promo.image}
                        alt={activeItem.promo.description || activeItem.label}
                        fill
                        className="object-cover"
                        sizes="(max-width:1400px) 33vw, 460px"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">
                      {activeItem.promo.description}
                    </p>
                    <Link
                      href={activeItem.promo.ctaHref}
                      onClick={closeAll}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 outline-none hover:text-cyan-700 focus-visible:ring-2 focus-visible:ring-cyan-500"
                    >
                      {activeItem.promo.ctaLabel}
                    </Link>
                  </div>
                )}

                {/* RIGHT — link columns */}
                <div className={activeItem.promo ? "col-span-8" : "col-span-12"}>
                  {chunkGroupsIntoRows(activeItem.groups ?? [], 4).map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className={
                        rowIdx === 0
                          ? "grid grid-cols-4 gap-x-8 gap-y-6"
                          : "mt-6 grid grid-cols-4 gap-x-8 gap-y-6 border-t border-gray-100 pt-6"
                      }
                    >
                      {row.map((group) => (
                        <div key={group.label}>
                          {group.href ? (
                            <Link
                              href={group.href}
                              onClick={closeAll}
                              className="mb-4 block text-base font-bold text-[#03122F] outline-none hover:text-cyan-600 focus-visible:ring-2 focus-visible:ring-cyan-500"
                            >
                              {group.label}
                            </Link>
                          ) : (
                            <p className="mb-4 text-base font-bold text-[#03122F]">
                              {group.label}
                            </p>
                          )}
                          <ul className="space-y-2.5">
                            {(group.items ?? []).map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={closeAll}
                                  aria-current={isActive(sub.href) ? "page" : undefined}
                                  className="block text-sm text-gray-600 outline-none hover:text-cyan-600 focus-visible:ring-2 focus-visible:ring-cyan-500"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== MOBILE DRAWER ===== */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-[#03122F] px-4 py-4 xl:hidden"
        >
          <ul className="space-y-1">
            {NAV.map((item) => {
              const open = openMobileItem === item.label;
              if (!hasChildren(item)) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className="block rounded px-3 py-2 font-medium text-white outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li key={item.label} className="border-b border-white/10 last:border-0">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`mobile-submenu-${item.label}`}
                    onClick={() => setOpenMobileItem(open ? null : item.label)}
                    className="flex w-full items-center justify-between rounded px-3 py-2 text-left font-medium text-white outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-cyan-300">
                      {open ? "−" : "+"}
                    </span>
                  </button>

                  {open && (
                    <div id={`mobile-submenu-${item.label}`} className="pb-2 pl-4">
                      {item.groups && item.groups.length > 0
                        ? item.groups.map((group) => {
                            // ✅ SAFETY: Don't render group label as link if it has nested sub-items
                            const groupHasItems = group.items && group.items.length > 0;
                            const renderAsLink = group.href && !groupHasItems;

                            return (
                              <div key={group.label} className="mt-2">
                                {renderAsLink ? (
                                  <Link
                                    href={group.href!}
                                    onClick={closeAll}
                                    className="block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 hover:text-cyan-100"
                                  >
                                    {group.label}
                                  </Link>
                                ) : (
                                  <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                                    {group.label}
                                  </p>
                                )}
                                <ul>
                                  {(group.items ?? []).map((sub) => (
                                    <li key={sub.href}>
                                      <Link
                                        href={sub.href}
                                        onClick={closeAll}
                                        aria-current={isActive(sub.href) ? "page" : undefined}
                                        className="block rounded px-3 py-1.5 text-sm text-white/80 outline-none hover:bg-white/10 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
                                      >
                                        {sub.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })
                        : (item.items ?? []).map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeAll}
                              aria-current={isActive(sub.href) ? "page" : undefined}
                              className="block rounded px-3 py-1.5 text-sm text-white/80 outline-none hover:bg-white/10 hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-400"
                            >
                              {sub.label}
                            </Link>
                          ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            onClick={closeAll}
            className="mt-4 block rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white outline-none hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Internship
          </Link>
        </div>
      )}
    </header>
  );
}

function NestedMenuItem({
  group,
  isActive,
  closeAll,
}: {
  group: { label: string; href?: string; items: { label: string; href: string }[] };
  isActive: (href: string) => boolean;
  closeAll: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hasSubItems = group.items && group.items.length > 0;
  const shouldRenderAsLink = group.href && !hasSubItems;

  return (
    <li
      role="none"
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {shouldRenderAsLink ? (
        <Link
          href={group.href!}
          onClick={closeAll}
          role="menuitem"
          aria-haspopup={hasSubItems ? "menu" : undefined}
          aria-expanded={hasSubItems ? isHovered : undefined}
          aria-current={isActive(group.href!) ? "page" : undefined}
          className="flex items-center justify-between rounded px-3 py-2 text-sm font-sm text-black outline-none hover:bg-cyan-300 hover:text-black focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <span>{group.label}</span>
          {hasSubItems && (
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 text-cyan-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </Link>
      ) : (
        <div className="flex items-center justify-between rounded px-3 py-2 text-sm font-sm text-black cursor-default hover:bg-cyan-300 hover:text-black">
          <span>{group.label}</span>
          {hasSubItems && (
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 text-cyan-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </div>
      )}

      {hasSubItems && isHovered && (
        <div
          role="menu"
          aria-label={`${group.label} submenu`}
          className="animate-fade-in absolute left-full top-0 ml-1 min-w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
        >
          <ul className="space-y-0.5">
            {group.items.map((sub) => (
              <li key={sub.href} role="none">
                <Link
                  href={sub.href}
                  onClick={closeAll}
                  role="menuitem"
                  aria-current={isActive(sub.href) ? "page" : undefined}
                  className="block rounded px-3 py-2 text-sm text-black outline-none hover:bg-cyan-300 hover:text-black focus-visible:ring-2 focus-visible:ring-cyan-500"
                >
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}