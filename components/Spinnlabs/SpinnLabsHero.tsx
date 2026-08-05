"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import type { SpinnLabHero } from "@/lib/spinnlabs-data";
import { Icon } from "@iconify-icon/react";
import { X } from "lucide-react";

interface Props {
  data: SpinnLabHero;
  activeStep?: string | null;
  onStepClick?: (stepTitle: string) => void;
  slug?: string; // 🆕 Added slug prop to detect the page
}

export default function SpinnLabsHero({ data, activeStep, onStepClick, slug }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section aria-labelledby="spinnlabs-hero-title" className="relative overflow-hidden">
      <Image
        src="/Hero/Hero8.png"
        alt="Background image of SpinnLabs"
        fill
        priority
        className="object-fit"
      />
      
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:px-8 lg:py-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/95 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1BA6C7] shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1BA6C7]" />
            SpinnLabs
          </span>

          <h1
            id="spinnlabs-hero-title"
            className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {activeStep ? activeStep : data.title}
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/90 sm:text-base">
            {data.description}
          </p>

          {slug === "centers-of-expertise" && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-6 bg-[#1BA6C7] hover:bg-[#158fae] text-white text-xs font-bold px-6 py-3 rounded-md transition-all tracking-wide active:scale-95 shadow-md flex items-center gap-2"
            >
              <Icon icon="lucide:user-plus" width={14} height={14} />
              <span>Join Us</span>
            </button>
          )}
        </div>


        {data.collageImage && (
          <div className="relative">
            <div className="relative aspect-3/2 w-full max-w-sm justify-self-center overflow-hidden rounded-2xl border border-white/50 bg-white shadow-2xl shadow-cyan-500/20 lg:justify-self-end">
              <Image
                src="/spinnlabs/2.jpg"
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-tr from-[#1BA6C7]/10 via-transparent to-transparent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Hero Steps Tabs */}
      {data.heroSteps && data.heroSteps.length > 0 && (
        <div className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul role="list" className="scrollbar-hide flex gap-3 overflow-x-auto py-4 sm:gap-4">
              {data.heroSteps.map((step, i) => {
                const isActive = activeStep === step.title;
                
                return (
                  <li
                    key={i}
                    onClick={() => {
                      if (onStepClick) {
                        onStepClick(step.title);
                      }
                    }}
                    className={`cursor-pointer flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md transition-colors sm:text-sm ${
                      isActive
                        ? "border-cyan-300 text-cyan-200 bg-white/20"
                        : "border-white/20 bg-white/10 text-white hover:border-cyan-300 hover:text-cyan-200"
                    }`}
                  >
                    <Icon 
                      icon={step.icon} 
                      width={16} 
                      height={16} 
                      aria-hidden="true" 
                      className={isActive ? "text-cyan-200" : "text-cyan-300"} 
                    />
                    {step.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

  {isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Backdrop Shadow Overlay */}
    <div 
      onClick={() => setIsModalOpen(false)} 
      className="absolute inset-0 bg-black/45 backdrop-blur-[1px] transition-opacity duration-300" 
    />

    {/* Modal Container */}
    <div className="relative bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
      
      {/* Modal Header - Now with #0a1b3d (Premium Dark Navy) */}
      <div className="flex justify-between bg-[#0a1b3d] items-center px-6 py-4">
        <h3 className="text-base font-bold text-white">Login</h3>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="text-white/80 hover:text-white transition-colors text-xl font-light outline-hidden"
        >
          &times;
        </button>
      </div>
      <hr className="border-slate-100" />

      {/* Modal Body - Same as your original layout */}
      <div className="p-6 space-y-5">
        <div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-hidden focus:ring-1 focus:ring-[#1BA6C7] focus:border-[#1BA6C7] transition-all placeholder:text-slate-500 text-slate-800"
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="Login Password" 
            className="w-full bg-white border border-slate-200 rounded-md p-4 text-xs font-semibold focus:outline-hidden focus:ring-1 focus:ring-[#1BA6C7] focus:border-[#1BA6C7] transition-all placeholder:text-slate-500 text-slate-800"
          />
        </div>
        
        {/* Reset Link */}
        <div className="text-xs">
          <span className="text-[#FF2A2A]">Forgot Password? </span>
          <span className="text-slate-900 font-bold hover:underline cursor-pointer">Click here</span>
          <span className="text-[#FF2A2A]"> to reset</span>
        </div>
      </div>
      
      {/* Body Bottom Divider */}
      <hr className="border-slate-100" />
      
      {/* Modal Footer - Maintained clean padding, Button matches #1BA6C7 (Cyan Accent) */}
      <div className="px-6 py-4 flex bg-slate-50 justify-end">
        <button 
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="bg-[#1BA6C7] hover:bg-[#0a1b3d] text-white text-xs font-bold px-6 py-2.5 rounded-md transition-colors tracking-wide"
        >
          Login
        </button>
      </div>

    </div>
  </div>
)}
    </section>
  );
}