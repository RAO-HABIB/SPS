"use client";

import Image from "next/image";
import { BarChart3, TrendingUp, Users } from "lucide-react";
import type { SpinnLabStatsBanner } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabStatsBanner;
}

export default function SpinnLabsStatsBanner({ data }: Props) {
  // Safe validation check matching your schema
  if (!data.singleImage && !data.stats) return null;

  return (
    <section
      aria-label="SpinnLabs impact banner"
      className="relative overflow-hidden rounded-3xl border-2 border-[#0a1b3d]/5 bg-white shadow-[0_4px_30px_rgba(10,27,61,0.02)] my-8 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(10,27,61,0.06)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* ===== Left/Full Column: Premium Image Framework ===== */}
        <div className={`relative min-h-65 sm:min-h-85 ${data.stats && data.stats.length > 0 ? "lg:col-span-7" : "lg:col-span-12"}`}>
          {data.singleImage && (
            <>
              <Image
                src={data.singleImage.src}
                alt={data.singleImage.alt || "SpinnLabs metrics showcase"}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                quality={95}
                priority={false}
                className="object-cover object-center transition-transform duration-700 ease-out"
              />
              {/* Subtle tint grid overlay for luxury finish */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1b3d]/40 via-transparent to-transparent mix-blend-multiply" />
            </>
          )}

          {/* Floating Branding Core Tag over Image */}
          <div className="absolute top-4 left-4 bg-[#0a1b3d]/90 text-[#1BA6C7] text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-xl backdrop-blur-md shadow-sm border border-white/10 flex items-center gap-1.5">
            <TrendingUp className="w-3 h-3" />
            Empirical Impact Data
          </div>
        </div>

        {/* ===== Right Column: Dynamic Corporate Stats Engine ===== */}
        {data.stats && data.stats.length > 0 && (
          <div className="lg:col-span-5 bg-[#0a1b3d] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden text-left">
            {/* Background geometric flare overlay */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#1BA6C7]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#1BA6C7] flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Metrics Showcase
                </span>
                <h4 className="text-xl font-black text-white tracking-tight">
                  Driving Measurable Growth
                </h4>
              </div>

              {/* Grid Loop matching data.stats array seamlessly */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {data.stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs transition-all duration-300 hover:bg-white/10 group/card"
                  >
                    <span className="block text-2xl sm:text-3xl font-black text-[#1BA6C7] tracking-tight group-hover/card:scale-105 transition-transform origin-left">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] font-bold text-gray-300 mt-1 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}