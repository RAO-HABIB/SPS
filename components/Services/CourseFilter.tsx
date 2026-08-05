"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, GraduationCap, Clock, Calendar, ShieldCheck } from "lucide-react";
import { CourseFilterSection as CourseFilterType } from "@/lib/service-data";

interface Props {
  data: CourseFilterType;
}

export default function CourseFilterSection({ data }: Props) {
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("upcoming");

  const filteredCourses = data.courses.filter((course) => {
    const providerMatch =
      selectedProvider === "all" || course.provider === selectedProvider;
    const courseMatch =
      selectedCourse === "all" || course.id === selectedCourse;
    return providerMatch && courseMatch;
  });

  return (
    <section className="bg-[#f8fafc] py-20 px-6 md:px-12 lg:px-16 border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Main Interface Wrapper */}
        <div className="bg-white border-2 border-[#0a1b3d]/10 rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgba(10,27,61,0.02)]">
          
          {/* Brand/Providers Selector Header */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-10 pb-10 border-b border-gray-100">
            {data.providers.map((provider) => {
              const isActive = selectedProvider === provider.value;
              return (
                <button
                  key={provider.value}
                  onClick={() => setSelectedProvider(provider.value)}
                  className={`relative w-28 h-12 transition-all duration-200 outline-hidden ${
                    isActive
                      ? "scale-110 drop-shadow-md brightness-100"
                      : "hover:grayscale-0 hover:scale-105"
                  }`}
                >
                  <Image
                    src={provider.image}
                    alt={provider.name}
                    fill
                    className="object-contain"
                  />
                  {isActive && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1BA6C7]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Precision Filters Control Desk */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            
            <div className="md:col-span-4 space-y-2">
              <label className="block text-xs font-black text-[#0a1b3d] uppercase tracking-wider">
                Tech Provider
              </label>
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full border-2 border-gray-200 text-black rounded-xl px-4 py-3 text-sm font-semibold bg-[#f8fafc] focus:outline-hidden focus:border-[#1BA6C7] transition-all"
              >
                <option value="all">All Providers</option>
                {data.providers.map((p) => (
                  <option key={p.value} value={p.value}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-4 space-y-2">
              <label className="block text-xs font-black text-[#0a1b3d] uppercase tracking-wider">
                Course Nomenclature
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full border-2 border-gray-200 text-black rounded-xl px-4 py-3 text-sm font-semibold bg-[#f8fafc] focus:outline-hidden focus:border-[#1BA6C7] transition-all"
              >
                <option value="all">All Available Tracks</option>
                {data.courses.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="block text-xs font-black text-[#0a1b3d] uppercase tracking-wider">
                Timeline Matrix
              </label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="w-full border-2 border-gray-200 text-black rounded-xl px-4 py-3 text-sm font-semibold bg-[#f8fafc] focus:outline-hidden focus:border-[#1BA6C7] transition-all"
              >
                <option value="upcoming">Upcoming</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <button className="w-full inline-flex items-center justify-center gap-2 bg-[#0a1b3d] hover:bg-[#1BA6C7] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200">
                <Search className="w-4 h-4" />
                <span>Search</span>
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-2 bg-[#f8fafc] border border-gray-200/60 p-4 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-[#1BA6C7] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              *All technical specialization deployments can be tailored explicitly for custom corporate environments or on-premise architectural blueprints at corporate negotiated metrics.
            </p>
          </div>
        </div>

        {/* Dynamic Catalog Manifest Results */}
        <div className="space-y-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-[#0a1b3d]/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-between sm:items-center gap-6 shadow-[0_4px_12px_rgba(10,27,61,0.01)] hover:border-[#1BA6C7] hover:shadow-md transition-all duration-200 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#0a1b3d] group-hover:text-[#1BA6C7] transition-colors" />
                    <h3 className="font-extrabold text-lg text-[#0a1b3d] tracking-tight">
                      {course.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      Duration: {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      Schedule: {course.schedule}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 pt-4 sm:pt-0 border-gray-100">
                  {course.price && (
                    <div className="flex flex-col text-left sm:text-right">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Investment</span>
                      <span className="text-xl font-black text-[#1BA6C7]">{course.price}</span>
                    </div>
                  )}
                  <button className="bg-[#1BA6C7] hover:bg-[#159bbb] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg shadow-[#1BA6C7]/20 transition-all">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl py-12 text-center">
              <p className="text-gray-500 font-semibold text-sm">
                No Architecture Schedules match the active parameters.
              </p>
            </div>
          )}
        </div>

        {/* Global Context Help Panel */}
        <div className="bg-[#0a1b3d] text-white rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
          <p className="text-sm font-medium text-gray-300">
            Need custom validation paths, bespoke scheduling or enterprise consultancies?
          </p>
          <Link 
            href="/Contact" 
            className="inline-flex items-center justify-center bg-white/10 hover:bg-white text-[#1BA6C7] hover:text-[#0a1b3d] px-6 py-2.5 rounded-xl text-sm font-bold transition-all shrink-0"
          >
            Connect with Advisors
          </Link>
        </div>

      </div>
    </section>
  );
}