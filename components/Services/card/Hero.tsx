"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface HeroSectionProps {
  detail: any;
  activeView: "detail" | "quota";
  setActiveView: (view: "detail" | "quota") => void;
  isVapt: boolean;
}

export default function HeroSection({
  detail,
  activeView,
  setActiveView,
}: HeroSectionProps) {
  // SOC services logic
  const isSoc =
    detail?.category?.toLowerCase().includes("soc") ||
    detail?.serviceSlug?.toLowerCase().includes("soc") ||
    detail?.cardTitle?.toLowerCase().includes("soc");

  const showQuotaButton = !isSoc;

  return (
    <section className="relative bg-slate-950 text-white py-12 lg:py-16 overflow-hidden">
      <Image
        src="/Hero/Hero8.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-400">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-600" />
            </li>
            <li>
              <Link
                href={`/Services/${detail?.serviceSlug}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {detail?.category || "Services"}
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-slate-600" />
            </li>
            <li className="text-cyan-400 font-medium truncate">
              {activeView === "quota" ? "Request a Quote" : detail?.cardTitle}
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <div className="max-w-4xl flex flex-col items-start gap-5">
          <div className="space-y-2">
            {/* Dynamic Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              {activeView === "quota" ? "Request a Quote" : detail?.cardTitle}
            </h1>

            {/* Dynamic Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {activeView === "quota"
                ? "Risk & Vulnerability Assessment"
                : detail?.cardDescription}
            </p>
          </div>

          <div className="pt-2 shrink-0">
            {activeView === "quota" ? (
              <button
                type="button"
                onClick={() => setActiveView("detail")}
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all border border-slate-700 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Details
              </button>
            ) : (
              showQuotaButton && (
                <button
                  type="button"
                  onClick={() => setActiveView("quota")}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
                >
                  Request Quota
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}