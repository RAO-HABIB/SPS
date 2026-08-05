
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import type { SpinnLabOutreachSection } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabOutreachSection;
  onExploreClick?: (id: string) => void; 
}

export default function SpinnLabsOutreachSection({ data, onExploreClick }: Props) {
  const cardCount = data.sigs.length;
  const isOdd = cardCount % 2 !== 0; 

  return (
    <section
      aria-labelledby="outreach-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative bg */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          
          {/* ===== LEFT: Description ===== */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {data.eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1BA6C7]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1BA6C7]" />
                {data.eyebrow}
              </span>
            )}

            <h2
              id="outreach-heading"
              className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {data.heading}
            </h2>

            <span
              aria-hidden="true"
              className="mt-4 block h-1 w-16 rounded-full bg-linear-to-r from-[#1BA6C7] to-blue-600"
            />

            <p className="mt-6 text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              {data.description}
            </p>
          </div>

          {/* ===== RIGHT: SIG Grid — SMART LAYOUT ===== */}
          <ul
            role="list"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
          >
            {data.sigs.map((sig, i) => {
              const isLastOddCard = isOdd && i === cardCount - 1;

              // Combined Tailwind styles for high reusability
              const cardClasses = `group relative flex h-full w-full text-left overflow-hidden rounded-2xl border shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1BA6C7] focus-visible:ring-offset-2 ${
                isLastOddCard
                  ? "flex-row items-center gap-6 border-cyan-200 bg-gradient-to-br from-cyan-50/50 via-white to-blue-50/30 p-6 hover:border-cyan-400 sm:p-8"
                  : "flex-col border-slate-200 bg-white p-6 hover:border-cyan-300 sm:p-7"
              }`;

              // Common Inner Card design
              const cardInnerContent = (
                <>
                  {/* Number tag */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 select-none text-sm font-bold text-slate-200 transition-colors duration-500 group-hover:text-cyan-300"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon container */}
                  <div
                    className={`relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-cyan-50 to-blue-50 ring-1 ring-cyan-100 transition-transform duration-500 group-hover:scale-110 ${
                      isLastOddCard
                        ? "h-20 w-20 shrink-0 sm:h-24 sm:w-24"
                        : "mb-5 h-16 w-16"
                    }`}
                  >
                    <Image
                      src={sig.icon}
                      alt={`${sig.title} icon`}
                      width={isLastOddCard ? 48 : 36}
                      height={isLastOddCard ? 48 : 36}
                      className="object-contain transition-transform duration-500 group-hover:rotate-6"
                    />
                  </div>

                  {/* Content wrapper */}
                  <div className={isLastOddCard ? "flex-1" : ""}>
                    <h3
                      className={`font-bold text-slate-900 ${
                        isLastOddCard ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                      }`}
                    >
                      {sig.title}
                    </h3>

                    <p
                      className={`mt-2 text-pretty leading-relaxed text-slate-600 ${
                        isLastOddCard ? "text-base" : "text-sm"
                      }`}
                    >
                      {sig.description}
                    </p>

                    {/* Arrow footer */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#1BA6C7]">
                      <span>Explore</span>
                      <Icon
                        icon="lucide:arrow-right"
                        width={16}
                        height={16}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-linear-to-r from-[#1BA6C7] to-blue-600 transition-transform duration-500 group-hover:scale-x-100"
                  />
                </>
              );

              return (
                <li key={sig.id} className={isLastOddCard ? "sm:col-span-2" : ""}>
                  {onExploreClick ? (
                    <button
                      type="button"
                      onClick={() => onExploreClick(sig.id)}
                      className={cardClasses}
                    >
                      {cardInnerContent}
                    </button>
                  ) : (
                    <Link href={sig.href} className={cardClasses}>
                      {cardInnerContent}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}