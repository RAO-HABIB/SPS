'use client';

import LottiePlayer from "@/components/ui/lottieplayer";
import { aboutData } from "@/lib/about-data";

export default function Process() {
  const { process } = aboutData;

  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32 font-sans antialiased">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-black text-[#0a1b3d] lg:text-5xl">
            {process.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {process.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white p-8 rounded-3xl border border-slate-600 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >

              <div className="h-full w-full align-items-center mb-6">
                <LottiePlayer src={step.animation} />
              </div>

              {/* Title & Text */}
              <h3 className="text-xl font-bold text-[#0a1b3d] mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}