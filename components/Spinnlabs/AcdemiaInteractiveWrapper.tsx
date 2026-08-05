"use client";

import React, { useState } from "react";
import SpinnLabsHero from "./SpinnLabsHero";
import SpinnLabsOutreachSection from "./SpinnLabsOutreachSection"; 
import { Icon } from "@iconify-icon/react";

// Types
interface SigSession {
  date: string;
  author: string;
  title: string;
  highlighted?: boolean; 
}

interface Track {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pastSigs: SigSession[];
  futureSigs: SigSession[];
}

const TRACKS_DATA: Record<string, Track> = {
  ai: {
    id: "ai",
    title: "Spinn Labs Technology Tracks",
    subtitle: "Artificial Intelligence",
    description: "We develop AI-based solutions for corporates & startups. From strategy to execution, we guide our clients through their next digital transformation leveraging technologies like Data Analytics, Natural Language Processing, Computer Vision, Machine Learning, Deep Learning & IoT. We go beyond analytics to give our customers the content they crave.",
    pastSigs: [
      { date: "May-Wed-18-2022", author: "Dr Kifayet Alizai", title: "Query Processing in Resource-Constrained Environments" },
      { date: "Mar-Thu-31-2022", author: "Aadil Jaleel Choudhry", title: "Artificial Intelligence in Healthcare" },
      { date: "Jan-Thu-06-2022", author: "Muhammad Rafi", title: "Machine Learning approach to Predictive Maintenance", highlighted: true },
      { date: "Dec-Thu-09-2021", author: "Maryam Toor", title: "Chatbots - Introduction and Architectures" },
      { date: "Nov-Thu-11-2021", author: "Hashim Barraq", title: "AI-Powered Advertising & Personalization" },
      { date: "Oct-Thu-14-2021", author: "Hashim Barraq", title: "AI-Driven Governance, Risk, and Compliance" },
      { date: "Sep-Thu-09-2021", author: "Hashim Barraq", title: "Payment Ecosystem and Fraud Detection" },
      { date: "Aug-Thu-05-2021", author: "Asna Javed", title: "Tackling Bias in Machine Learning Datasets" }
    ],
    futureSigs: [
      { date: "Upcoming-2026", author: "Research Team", title: "Generative AI & LLMs in Enterprise Workflows" }
    ]
  },
  cloud: {
    id: "cloud",
    title: "Cloud Infrastructure Tracks",
    subtitle: "Cloud",
    description: "Master cloud-native architectures across AWS, Azure, and GCP for scalable systems.",
    pastSigs: [
      { date: "Jun-Wed-15-2022", author: "Dr Fahad Khan", title: "Optimizing Kubernetes Multi-Tenant Clusters" },
      { date: "Apr-Thu-28-2022", author: "Sarah Ahmed", title: "Serverless Architectures on AWS & Azure", highlighted: true }
    ],
    futureSigs: []
  },
  iot: {
    id: "iot",
    title: "Smart Systems & Edge Tracks",
    subtitle: "IoT",
    description: "Connect the physical and digital worlds through smart devices, sensors, and edge computing.",
    pastSigs: [
      { date: "Jul-Thu-07-2022", author: "Bilal Mansoor", title: "Edge AI: Running Optimized ML Models" }
    ],
    futureSigs: []
  },
  cybersecurity: {
    id: "cybersecurity",
    title: "Advanced Security Tracks",
    subtitle: "Cybersecurity",
    description: "Build resilient defenses against evolving cyber threats through hands-on research and training.",
    pastSigs: [
      { date: "Feb-Tue-22-2022", author: "Dr Tariq Mahmood", title: "Zero Trust Frameworks for Distributed API Gateways", highlighted: true }
    ],
    futureSigs: []
  }
};

interface AcademiaInteractiveWrapperProps {
  page: any;
  staticContent: React.ReactNode;
}

export default function AcademiaInteractiveWrapper({ page, staticContent }: AcademiaInteractiveWrapperProps) {
  const [activeTrackKey, setActiveTrackKey] = useState<string | null>(null);
  const [sigTab, setSigTab] = useState<"past" | "future">("past");

  const activeTrack = activeTrackKey ? TRACKS_DATA[activeTrackKey] : null;

  const heroSteps = Object.values(TRACKS_DATA).map((t) => ({
    title: t.subtitle,
    icon: t.id === "ai" ? "lucide:brain" : t.id === "cloud" ? "lucide:cloud" : t.id === "cybersecurity" ? "lucide:shield-check" : "lucide:cpu"
  }));

  const dynamicHeroData = activeTrack
    ? {
        title: activeTrack.title,
        description: activeTrack.description,
        backgroundImage: "/Hero/Hero3.jpg",
        heroSteps: [{ title: "Back to Academia", icon: "lucide:arrow-left" }, ...heroSteps],
        collageImage: "/spinnlabs/2.jpg"
      }
    : page.hero;

  const handleExploreClick = (sigId: string) => {
    const normalizedId = sigId.toLowerCase();
    let matchedKey: string | null = null;

    if (normalizedId.includes("ai") || normalizedId.includes("artificial")) {
      matchedKey = "ai";
    } else if (normalizedId.includes("cloud")) {
      matchedKey = "cloud";
    } else if (normalizedId.includes("iot") || normalizedId.includes("internet")) {
      matchedKey = "iot";
    } else if (normalizedId.includes("cyber") || normalizedId.includes("security")) {
      matchedKey = "cybersecurity";
    }

    if (matchedKey) {
      setActiveTrackKey(matchedKey);
      setSigTab("past");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleHeroStepClick = (stepTitle: string) => {
    if (stepTitle === "Back to Academia") {
      setActiveTrackKey(null);
      return;
    }
    const matchedKey = Object.keys(TRACKS_DATA).find(
      (key) => TRACKS_DATA[key].subtitle.toLowerCase() === stepTitle.toLowerCase()
    );
    if (matchedKey) setActiveTrackKey(matchedKey);
  };

  return (
    <div className="bg-slate-50/30 min-h-screen">
      <SpinnLabsHero
        data={dynamicHeroData}
        activeStep={activeTrack ? activeTrack.subtitle : null}
        onStepClick={handleHeroStepClick}
        slug={page.slug}
      />

      {/* MAIN BODY */}
      {!activeTrack ? (
        /* VIEW A: DEFAULT LANDING PAGE */
        <>
          {page.outreachSection && (
            <SpinnLabsOutreachSection
              data={page.outreachSection}
              onExploreClick={handleExploreClick}
            />
          )}

          {/* Remaining components (Tech Hub, Clients etc.) */}
          {staticContent}
        </>
      ) : (
        /* VIEW B: DETAILED TRACK SCHEDULE VIEW */
        <section className="bg-white py-16 sm:py-20 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Go Back Link */}
            <div className="mb-8">
              <button
                onClick={() => setActiveTrackKey(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#1BA6C7] transition-colors"
              >
                <Icon icon="lucide:chevron-left" width={16} height={16} />
                <span>Back to Academia Landing</span>
              </button>
            </div>

            {/* Special Interest Group Schedule Header */}
            <div className="text-center flex flex-col items-center mb-10">
              <div className="flex items-center justify-center gap-1.5 text-[#1BA6C7] mb-3">
                <Icon icon="lucide:infinity" width={20} height={20} className="text-[#1BA6C7]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                  Special Interest Groups
                </span>
              </div>
              <h2 className="max-w-3xl text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-relaxed">
                Latest Schedule for <span className="text-[#1BA6C7]">{activeTrack.subtitle}</span> Special Interest Group sessions.
              </h2>
            </div>

            {/* Past vs Current/Future Tabs Selector */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-1">
                <button
                  onClick={() => setSigTab("past")}
                  className={`rounded-md px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    sigTab === "past"
                      ? "bg-[#1E293B] text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Past Sigs
                </button>
                <button
                  onClick={() => setSigTab("future")}
                  className={`rounded-md px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
                    sigTab === "future"
                      ? "bg-[#1E293B] text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  Current/Future Sigs
                </button>
              </div>
            </div>

            {/* Schedules Grid */}
            {activeTrack[sigTab === "past" ? "pastSigs" : "futureSigs"].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeTrack[sigTab === "past" ? "pastSigs" : "futureSigs"].map((sig, idx) => {
                  const isHighlighted = sig.highlighted;
                  return (
                    <div
                      key={idx}
                      className={`relative rounded-lg p-6 transition-all duration-300 flex flex-col justify-between border ${
                        isHighlighted
                          ? "bg-[#1E293B] text-white border-transparent shadow-lg shadow-slate-900/10 scale-[1.01]"
                          : "bg-white border-slate-100 text-slate-900 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-md"
                      }`}
                    >
                      <div>
                        {/* Upper Tag Category Pill */}
                        <span 
                          className={`inline-block text-[9px] font-bold uppercase px-2 py-0.5 rounded-sm mb-4 tracking-wider ${
                            isHighlighted ? "bg-[#38BDF8] text-white" : "bg-[#1E293B] text-white"
                          }`}
                        >
                          {activeTrack.subtitle === "Cloud" ? "CLOUD" : activeTrack.id.toUpperCase()}
                        </span>

                        {/* Date & Author */}
                        <p className={`text-[11px] font-semibold mb-3 ${isHighlighted ? "text-slate-300" : "text-slate-400"}`}>
                          <span className={isHighlighted ? "text-[#38BDF8]" : "text-[#1BA6C7]"}>{sig.date}</span> // By {sig.author}
                        </p>

                        {/* Title */}
                        <h4 className="text-sm sm:text-base font-bold leading-snug line-clamp-3">
                          {sig.title}
                        </h4>
                      </div>

                      <div>
                        <div className={`border-b border-dotted my-4 w-full ${isHighlighted ? "border-slate-700" : "border-slate-200"}`} />
                        
                        {/* Interactive Read More link */}
                        <a
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${
                            isHighlighted ? "text-[#38BDF8] hover:text-white" : "text-[#1BA6C7] hover:text-[#138fae]"
                          }`}
                        >
                          <span className={`h-px w-4 ${isHighlighted ? "bg-[#38BDF8]" : "bg-[#1BA6C7]"}`} />
                          <span>Read More</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <Icon icon="lucide:calendar-range" width={32} height={32} className="mx-auto text-slate-400 mb-3" />
                <p className="text-slate-500 text-sm font-semibold">No active sessions scheduled currently.</p>
              </div>
            )}

          </div>
        </section>
      )}
    </div>
  );
}