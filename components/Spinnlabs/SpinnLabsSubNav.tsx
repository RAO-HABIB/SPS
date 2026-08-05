"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { spinnLabsSubItems } from "@/lib/spinnlabs-data";

export default function SpinnLabsSubNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector<HTMLElement>(
      `[data-active="true"]`
    );
    activeEl?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [pathname]);

  return (
    <nav
      aria-label="SpinnLabs sub-navigation"
      className="sticky top-0 z-40  "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          role="tablist"
          className="scrollbar-hide flex gap-2 overflow-x-auto scroll-smooth py-3 sm:gap-3"
        >
          {spinnLabsSubItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.slug}
                href={item.href}
                role="tab"
                data-active={isActive}
                aria-current={isActive ? "page" : undefined}
                aria-selected={isActive}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 sm:px-5 ${
                  isActive
                    ? "bg-linear-to-r from-[#166aa6] to-blue-600 text-white shadow-md shadow-cyan-500/30"
                    : "text-white hover:bg-blue-400 hover:text-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}