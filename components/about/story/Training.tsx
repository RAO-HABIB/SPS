'use client';

import { aboutData } from "@/lib/about-data";
import LottiePlayer from "@/components/ui/lottieplayer";

export default function Training() {
  const { training } = aboutData;

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="mx-auto mt-20 max-w-6xl px-4 lg:px-6">
        <div className="relative rounded-4xl lg:rounded-[3rem] bg-[#0a1b3d] px-6 pb-12 pt-12 lg:px-16 lg:pt-20 shadow-2xl">
          <div className="flex justify-center gap-4 lg:gap-8 mb-10 flex-wrap">
            {training.images.map((animationSrc, index) => (
              <div
                key={index}
                className="flex items-center justify-center aspect-square h-24 w-24 md:h-32 md:w-32 lg:h-44 lg:w-44 overflow-hidden rounded-full border-4 border-[#1BA6C7] bg-white shadow-xl shrink-0"
              >
                <div className="h-[85%] w-[85%] flex items-center justify-center">
                  <LottiePlayer src={animationSrc} />
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] text-white bg-[#1BA6C7]/10 px-3 py-1 lg:px-4 lg:py-1.5 rounded-full border border-[#1BA6C7]/20">
              Learning Culture
            </span>

            <h2 className="mt-6 text-3xl font-black text-white lg:text-5xl tracking-tight">
              {training.title}
            </h2>

            <p className="mt-6 text-sm lg:text-lg leading-relaxed text-slate-400">
              {training.description}
            </p>

            {/* Points Grid */}
            <ul className="mt-10 grid gap-3 text-left md:grid-cols-2">
              {training.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-xl bg-white/5 p-3 lg:p-4 border border-white/5 hover:bg-[#1BA6C7]/10 transition-colors duration-300"
                >
                  <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-[#1BA6C7] shrink-0" />
                  <span className="text-slate-200 text-xs lg:text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}