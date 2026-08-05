// components/SpinnLabs/SpinnLabsTechnologiesSection.tsx
import Image from "next/image";
import type { SpinnLabTechnologiesSection } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabTechnologiesSection;
}

export default function SpinnLabsTechnologiesSection({ data }: Props) {
  return (
    <section
      aria-labelledby="technologies-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-50/70 blur-3xl" />
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
            id="technologies-heading"
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

        {/* Cards Grid */}
        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8"
        >
          {data.technologies.map((tech) => (
            <li
              key={tech.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Top row: Icon + Title */}
              <div className="flex items-start gap-5">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-cyan-50 to-blue-50 ring-1 ring-cyan-100 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={tech.icon}
                    alt={`${tech.title} icon`}
                    width={36}
                    height={36}
                    className="object-contain transition-transform duration-500 group-hover:rotate-6"
                  />

                  {/* Shine */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                  />
                </div>

                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                    {tech.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-2 block h-0.5 w-10 rounded-full bg-linear-to-r from-[#1BA6C7] to-blue-600"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
                {tech.description}
              </p>

              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-linear-to-br from-cyan-100/50 to-blue-100/30 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}