'use client';

import Image from "next/image";
import { aboutData } from "@/lib/about-data";

export default function Awards() {
  const { awards } = aboutData;

  return (
    <section 
      className="relative overflow-hidden py-24 lg:py-32" 
      aria-labelledby="awards-heading"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image
          src="/Hero/hero1.jpg"
          alt="SPS Company Achievements Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#1BA6C7]">
            Recognition
          </span>
          <h2 
            id="awards-heading" 
            className="mt-4 text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Achievements & Awards
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Over the years, SPS has been recognized for innovation, technical excellence, and successful collaboration with leading technology partners.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <article
              key={`${award.title}-${index}`}
              className="group relative bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2.5 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              {/* Card Image with Hover Zoom */}
              <div className="relative w-full h-50 overflow-hidden">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Card Content */}
              <div className="p-6 text-center">
                <span className="block text-xs font-bold text-blue-600 uppercase mb-2 tracking-wider">
                  {award.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2 leading-tight">
                  {award.title}
                </h3>
                {/* Animated Button */}
                <button 
                  type="button"
                  className="mt-2 px-6 py-2.5 rounded-full bg-linear-to-r from-blue-700 to-blue-500 text-white font-semibold shadow-md transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-blue-400"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}