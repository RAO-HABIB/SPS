// components/Verticals/VerticalHero.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { VerticalSolution } from "@/lib/vertical-data";
import VerticalSolutionsModal from "./VerticalSolutionModal";


interface Props {
  slug: string; // Pass current route slug to load correct modal configs
  category: string;
  title: string;
  description: string;
  image: string;
  solutions: VerticalSolution[];
}

export default function VerticalHero({
  slug,
  category,
  title,
  description,
  image,
  solutions,
}: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSolutionIndex, setSelectedSolutionIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setSelectedSolutionIndex(index);
    setModalOpen(true);
  };

  return (
    <>
      <section
        aria-labelledby="vertical-hero-title"
        className="relative overflow-hidden px-4 py-12 text-white sm:px-6 md:py-16 lg:px-8 lg:py-20"
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover"
        />
        
        {/* ===== Content Grid ===== */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* ===== LEFT: Title + Description ===== */}
          <div className="lg:col-span-2">
            <p
              className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/70 sm:text-sm"
              aria-label={`Category: ${category}`}
            >
              {category}
            </p>

            <h1
              id="vertical-hero-title"
              className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:mb-6 md:text-5xl"
            >
              {title}
            </h1>

            <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* ===== RIGHT: Solutions Card ===== */}
          {solutions.length > 0 && (
            <aside
              aria-labelledby="solutions-heading"
              className="lg:col-span-1"
            >
              <div className="mb-4 sm:mb-6">
                <h2
                  id="solutions-heading"
                  className="text-xl font-bold text-white sm:text-2xl"
                >
                  Our Solutions{" "}
                  <span className="text-xs font-normal text-white/70 sm:text-sm">
                    (Click to learn more)
                  </span>
                </h2>
              </div>

              <ul
                role="list"
                aria-label="Available solutions"
                className="space-y-3"
              >
                {solutions.map((sol, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(idx)}
                      className="group flex w-full min-h-14 items-center justify-between rounded-full bg-white px-5 py-3 text-left text-[#0a1b3d] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1b3d] sm:px-6 sm:py-4"
                    >
                      <span className="text-sm font-semibold sm:text-base">
                        {sol.title}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 text-[#1BA6C7]"
                      />
                    </button>
                  </li>
                ))}

                {/* View More Button */}
                <li>
                  <button
                    type="button"
                    onClick={() => handleOpenModal(0)}
                    className="group flex w-full min-h-14 items-center justify-between rounded-full bg-[#1BA6C7] px-5 py-3 text-left text-white shadow-lg transition-all hover:bg-[#159bbb] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1b3d] sm:px-6 sm:py-4"
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      View More
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </li>
              </ul>
            </aside>
          )}
        </div>
      </section>

      <VerticalSolutionsModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        slug={slug}
        categoryTitle={title}
        initialIndex={selectedSolutionIndex}
      />
    </>
  );
}