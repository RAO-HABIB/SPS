"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Clock, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import type { SpinnLabTextImageBlock } from "@/lib/spinnlabs-data";

interface Props {
  block: SpinnLabTextImageBlock;
  index: number;
}

export default function SpinnLabsTextImageBlock({ block, index }: Props) {
  return (
    <article
      className={`group flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-3xl border-2 border-[#0a1b3d]/10 bg-white p-6 shadow-[0_4px_25px_rgba(10,27,61,0.02)] hover:border-[#1BA6C7] hover:shadow-[0_20px_50px_rgba(10,27,61,0.06)] transition-all duration-300 md:gap-10 md:p-8 lg:p-10 ${
        block.reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl md:w-2/5 shadow-md border-2 border-gray-100 bg-slate-50 group-hover:scale-[1.03] transition-transform duration-300">
        <div className="relative aspect-video w-full md:aspect-4/3">
          <Image
            src={block.image}
            alt={block.imageAlt}
            fill
            loading="lazy"
            className="object-fit"
          />
        </div>
      </div>

      <div className="w-full md:flex-1 space-y-6">
        {/* Course Nomenclature Header */}
        <div className="space-y-2 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2 bg-[#f8fafc] border border-gray-200/60 p-2 rounded-xl">
             <GraduationCap className="w-5 h-5 text-[#0a1b3d]" />
             <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Course Specialization</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0a1b3d] tracking-tight group-hover:text-[#1BA6C7] transition-colors">
            {block.title || "Enterprise Advanced Track"}
          </h3>
        </div>

     
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
          {block.text}
        </p>

        {/* Technical Specialized Timeline Matrix */}
        <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-6">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#0a1b3d]/5 text-[#0a1b3d] flex items-center justify-center">
                 <Clock className="w-5 h-5 text-[#1BA6C7]" />
             </div>
             <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Duration</span>
                  <span className="text-sm font-semibold text-black">{block.duration || "Self-Paced Learning"}</span>
             </div>
          </div>
           <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-[#0a1b3d]/5 text-[#0a1b3d] flex items-center justify-center">
                 <Calendar className="w-5 h-5 text-[#1BA6C7]" />
             </div>
             <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Schedule Tiers</span>
                  <span className="text-sm font-semibold text-black">{block.schedule || "Upcoming Deployment"}</span>
             </div>
          </div>
        </div>

      
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
       
           {block.price && (
                <div className="flex items-center gap-3 bg-[#f8fafc] border border-gray-200 p-4 rounded-xl shadow-inner w-full sm:w-auto">
                    <CheckCircle className="w-5 h-5 text-[#1BA6C7]" />
                    <div className="flex flex-col text-left">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Investment</span>
                        <span className="text-xl font-black text-[#1BA6C7]">{block.price}</span>
                    </div>
                </div>
           )}
           <Link 
              href={block.ctaLink || "#"} 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0a1b3d] hover:bg-[#1BA6C7] text-white text-sm font-bold px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[#1BA6C7]/20"
            >
              <span>Enroll Now & Validate Paths</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>
      </div>
    </article>
  );
}