"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { HOW_INTRO, STEPS, type Step } from "@/lib/howitworks";

// ─── Types ───────────────────────────────────────────────────────────────────
type Stat = {
  value: number;
  suffix: string;
  label: string;
};

// ─── Static Icon Features (Who We Are style) ────────────────────────────────
const ICON_FEATURES = [
  {
    icon: "/services/icon5.png",
    alt: "AI Powered Innovation",
    width: 34,
    height: 36,
    lines: ["AI-Powered", "Innovation"],
  },
  {
    icon: "/services/icon7.png",
    alt: "Limitless Styles",
    width: 37,
    height: 36,
    lines: ["Limitless", "Styles"],
  },
];

export default function HowItWorks() {
  const thumbImage: string = STEPS[0]?.image ?? HOW_INTRO.image;

  return (
    <section className="relative isolate overflow-hidden bg-white py-30">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 xl:grid-cols-2 xl:gap-16">
          
          {/* ======= Left Side - Image ======= */}
          <div className="mx-auto w-full  max-w-141.75">
            <div
              className="relative"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* Main Image */}
              <div className="overflow-hidden   rounded-[30px]">
                <Image
                  src={HOW_INTRO.image}
                  alt={HOW_INTRO.title}
                  width={567}
                  height={592}
                  className="h-105 w-full object-cover sm:h-148"
                  priority
                />
              </div>

              {/* Overlay Stats Card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:bottom-8 sm:left-auto sm:right-8 sm:max-w-90 sm:p-4">
                <div className="flex items-center gap-4">
                  {/* Thumb Image */}
                  <div className="h-19.5 w-19.5 shrink-0 overflow-hidden rounded-full ring-4 ring-[#0057B8]/10 sm:h-25 sm:w-25">
                    <Image
                      src={thumbImage}
                      alt={STEPS[0]?.title ?? HOW_INTRO.title}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Stats */}
                  <div className="grid flex-1 grid-cols-2 gap-3">
                    {HOW_INTRO.stats.map((stat: Stat) => (
                      <div key={stat.label}>
                        <h3 className="text-2xl font-extrabold leading-none text-slate-900 sm:text-3xl">
                          {stat.value}
                          {stat.suffix}
                        </h3>
                        <p className="mt-2 text-xs font-semibold leading-5 text-slate-700 sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ======= Right Side - Content ======= */}
          <div className="mx-auto w-full max-w-155">
            {/* Subtitle */}
            <span
              className="inline-flex items-center gap-2 rounded-full bg-[#0057B8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#0057B8]"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0057B8]" />
              Our Process
            </span>

            {/* Heading */}
            <h2
              className="mt-5 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-4xl lg:leading-[1.12]"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              {HOW_INTRO.title}
            </h2>

            {/* Description */}
            <p
              className="mt-6 max-w-[60ch] text-base leading-8 text-slate-600"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {HOW_INTRO.description}
            </p>

            {/* Divider */}
            {/* <div className="mt-8 h-px w-full bg-slate-200" /> */}

            {/* ======= Icon Feature Boxes (Who We Are style) ======= */}
            {/* <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {ICON_FEATURES.map((feature, index) => (
                <div
                  key={feature.alt}
                  className={`flex items-center gap-4 ${
                    index === 1
                      ? "sm:border-l sm:border-slate-200 sm:pl-6"
                      : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-duration={index === 0 ? "1400" : "1600"}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0057B8]/10">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={feature.width}
                      height={feature.height}
                      className="h-auto w-auto"
                    />
                  </div>

                  <h5 className="text-lg font-bold leading-6 text-slate-900">
                    {feature.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h5>
                </div>
              ))}
            </div> */}

            {/* Divider */}
            {/* <div className="mt-8 h-px w-full bg-slate-200" /> */}

            {/* ======= Checklist — ALL 4 STEPS ======= */}
            <ul
              className="mt-8 space-y-4"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {STEPS.map((step: Step) => (
                <li key={step.number} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0057B8] text-white">
                    <Icon icon="mdi:check" width={12} />
                  </span>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {step.number}. {step.title}
                    </h4>
                    <p className="mt-1 text-base leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              className="mt-5"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link
                href={HOW_INTRO.cta.href}
                className="inline-flex items-center gap-3 rounded-full bg-[#03122F] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#0057B8] hover:shadow-[0_14px_30px_rgba(0,87,184,0.28)]"
              >
                <span>{HOW_INTRO.cta.label}</span>
                <span className="flex h-9 w-10 items-center justify-center rounded-full bg-white text-[#03122F]">
                  <Icon icon="lucide:arrow-right" width={18} />
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Float animation */}
      <style jsx>{`
        @keyframes floatBobY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float-bob-y {
          animation: floatBobY 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}