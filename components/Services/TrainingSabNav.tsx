"use client";

import { BookOpen, UserPlus, Sparkles } from "lucide-react";

interface Props {
  activeTab: "courses" | "instructor";
  onTabChange: (tab: "courses" | "instructor") => void;
}

export default function TrainingSubNavSection({ activeTab, onTabChange }: Props) {
  return (
    <div className="bg-[#0a1b3d]/95  text-white sticky top-0   border-b border-white/10 shadow-[0_4px_20px_rgba(10,27,61,0.15)] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16">
        
        {/* Brand/Portal Marker */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#1BA6C7] animate-pulse" />
          <h2 className="text-xs font-black tracking-widest uppercase text-gray-300 flex items-center gap-1.5">
            <span>SPS Digital Learning</span>
            <Sparkles className="w-3 h-3 text-[#1BA6C7]" />
          </h2>
        </div>

        {/* Dynamic Nav Controls */}
        <nav className="flex items-center sm:gap-8 gap-4 h-full w-full md:w-auto justify-center md:justify-end">
          
          {/* Courses Tab Button */}
          <button
            onClick={() => onTabChange("courses")}
            className={`relative h-full flex items-center gap-2 px-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 outline-hidden group ${
              activeTab === "courses" ? "text-[#1BA6C7]" : "text-gray-400 hover:text-white"
            }`}
          >
            <BookOpen className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${activeTab === "courses" ? "text-[#1BA6C7]" : "text-gray-400 group-hover:text-white"}`} />
            <span>SPS Courses</span>
            
            {/* Active Highlight Underline Vector */}
            <span className={`absolute bottom-0 left-0 right-0 h-0.75 bg-[#1BA6C7] transition-all duration-300 transform rounded-t-full ${
              activeTab === "courses" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50"
            }`} />
          </button>

          {/* Become Instructor Tab Button */}
          <button
            onClick={() => onTabChange("instructor")}
            className={`relative h-full flex items-center gap-2 px-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 outline-hidden group ${
              activeTab === "instructor" ? "text-[#1BA6C7]" : "text-gray-400 hover:text-white"
            }`}
          >
            <UserPlus className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${activeTab === "instructor" ? "text-[#1BA6C7]" : "text-gray-400 group-hover:text-white"}`} />
            <span>Become Instructor</span>
            
            {/* Active Highlight Underline Vector */}
            <span className={`absolute bottom-0 left-0 right-0 h-0.75 bg-[#1BA6C7] transition-all duration-300 transform rounded-t-full ${
              activeTab === "instructor" ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-50 group-hover:opacity-50"
            }`} />
          </button>

        </nav>
      </div>
    </div>
  );
}