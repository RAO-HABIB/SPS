// components/Verticals/VerticalSolutionsModal.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, AlertCircle } from "lucide-react";
import { getModalDataBySlug } from "@/lib/verticals-modal-data";


interface Props {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
  categoryTitle: string;
  initialIndex?: number;
}

export default function VerticalSolutionsModal({
  isOpen,
  onClose,
  slug,
  categoryTitle,
  initialIndex = 0,
}: Props) {
  const modalData = getModalDataBySlug(slug, categoryTitle);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Sync index if opened with a specific card click
  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex, isOpen]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentSolution = modalData.solutions[activeIndex] || modalData.solutions[0];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs transition-all duration-300">
      
      {/* Modal Container Card */}
      <div className="relative w-full max-w-6xl h-[85vh] max-h-187.5 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100">
        
        {/* Modal Topbar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50">
          <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-[#1BA6C7]" />
            {modalData.category}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-800 transition-colors focus:outline-none"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Main Body Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-[260px_1fr] overflow-hidden">
          
          {/* Left Panel: Vertical Custom Tab List */}
          <div className="bg-slate-50 border-r border-slate-100 overflow-y-auto p-4 space-y-2">
            {modalData.solutions.map((sol, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-4 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeIndex === index
                    ? "bg-[#1BA6C7] text-white shadow-md shadow-cyan-500/10"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {sol.title}
              </button>
            ))}
          </div>

          {/* Right Panel: Active Solution Detailed Viewer */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-white">
            
            {/* Diagram Card Box */}
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center min-h-55">
              <div className="relative w-full h-65 max-w-137.5">
                {currentSolution?.diagramImage ? (
                  <Image
                    src={currentSolution.diagramImage}
                    alt={currentSolution.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 600px"
                    priority
                    onError={(e) => {
                      // Fallback visual design rendering if file path does not exist
                      console.log("Fallback triggering, image path invalid");
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                    <AlertCircle className="h-8 w-8" />
                    <span className="text-xs">Diagram Image Placeholder</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Bottom Split: Overview & Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
              
              {/* Left Column: Solution Overview */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 tracking-wider uppercase border-b pb-2 border-slate-100">
                  Solution Overview
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {currentSolution?.overview}
                </p>
              </div>

              {/* Right Column: Dynamic Bullet Benefits */}
              <div className="space-y-3">
                <h4 className="text-sm font-extrabold text-slate-900 tracking-wider uppercase border-b pb-2 border-slate-100">
                  Solution Benefits
                </h4>
                <ul className="space-y-3">
                  {currentSolution?.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#1BA6C7] mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}