'use client'; 

import Image from "next/image";
import { aboutData } from "@/lib/about-data";
import { 
  Calendar, 
  Rocket, 
  Award, 
  Globe, 
  Users, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export default function Timeline() {
  const { timeline } = aboutData;
  const timelineIcons = [Rocket, Award, Globe, Users, TrendingUp, Cpu, ShieldCheck, Zap];

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-28 font-sans antialiased relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1BA6C7]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1BA6C7] border border-[#1BA6C7]/20">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight text-[#0a1b3d]">
              Highlights of the Past Two Decades
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-2 snap-x snap-mandatory select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
            {timeline.map((item, index) => {
              const IconComponent = timelineIcons[index % timelineIcons.length];

              return (
                <div 
                  key={`${item.year}-${index}`}
                  className="w-75 md:w-87.5 shrink-0 snap-start relative group"
                >
                  <div className="bg-white rounded-2xl shadow-md border border-slate-200/60 overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#0a1b3d] hover:border-[#122852] hover:shadow-xl hover:shadow-slate-900/30 flex flex-col justify-between h-120">
                    
                    <div>
                      <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-xs text-[#0a1b3d] rounded-xl border border-white/20 group-hover:bg-[#1BA6C7] group-hover:text-white transition-all duration-500 shadow-sm">
                          <IconComponent size={18} className="stroke-[2.5]" />
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-base md:text-lg font-black text-[#0a1b3d] group-hover:text-white transition-colors duration-500 tracking-tight line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-slate-500 group-hover:text-slate-300 text-justify transition-colors duration-500 line-clamp-4">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 mt-auto">
                      <div className="pt-4 border-t border-slate-100 group-hover:border-slate-800 transition-colors duration-500 flex justify-between items-center text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#1BA6C7]" />
                          <span className="text-slate-700 font-bold group-hover:text-white transition-colors duration-500">
                            Milestone Achieve
                          </span>
                        </div>
                        <div className="flex items-center gap-1 font-black text-[#1BA6C7] bg-[#1BA6C7]/5 group-hover:bg-[#1BA6C7]/10 px-2.5 py-1 rounded-lg border border-[#1BA6C7]/10 transition-colors duration-500">
                          <Calendar size={12} className="stroke-[2.5]" />
                          <span>{item.year}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}