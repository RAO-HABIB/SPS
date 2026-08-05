// components/SpinnLabs/SpinnLabsJourneySection.tsx
import { Icon } from "@iconify-icon/react";
import type { SpinnLabJourneySection } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabJourneySection;
}

export default function SpinnLabsJourneySection({ data }: Props) {
  return (
    <section
      aria-labelledby="journey-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {data.eyebrow && (
            <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1BA6C7]">
              <span aria-hidden="true" className="h-px w-8 bg-[#1BA6C7]" />
              {data.eyebrow}
              <span aria-hidden="true" className="h-px w-8 bg-[#1BA6C7]" />
            </p>
          )}

          <h2
            id="journey-heading"
            className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {data.heading}
          </h2>

          {data.subheading && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-slate-600 sm:text-lg">
              {data.subheading}
            </p>
          )}
        </div>

        {/* Steps Grid */}
        <ol
          role="list"
          className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.steps.map((step) => (
            <li
              key={step.id}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 sm:p-7"
            >
              
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-50 to-blue-50 text-[#1BA6C7] ring-1 ring-cyan-100 transition-all duration-500 group-hover:from-[#1BA6C7] group-hover:to-blue-600 group-hover:text-white group-hover:ring-transparent">
                  <Icon
                    icon={step.icon}
                    width={22}
                    height={22}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>

              {/* Bottom gradient bar (animates on hover) */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 rounded-b-2xl bg-linear-to-r from-[#1BA6C7] to-blue-600 transition-transform duration-500 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>

        {/* Footer note */}
        {data.footerNote && (
          <p className="mt-12 text-center text-sm font-medium text-slate-500 sm:text-base">
            {data.footerNote}
          </p>
        )}
      </div>
    </section>
  );
}