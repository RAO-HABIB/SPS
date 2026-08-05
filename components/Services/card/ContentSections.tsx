import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface SubSection {
  subHeading?: string;
  text?: string;
  bulletPoints?: string[];
}

export interface SectionItem {
  heading?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  subSections?: SubSection[];
  image?: string;
  imageAlt?: string; // Enhanced SEO: Custom image alt text
}

export interface ContentSectionsProps {
  sections?: SectionItem[];
  isVapt?: boolean;
  title?: string;      // Dynamic title (No hardcoded default)
  subtitle?: string;   // Dynamic subtitle
  id?: string;         // SEO/Accessibility anchor targeting
}

export const ContentSections: React.FC<ContentSectionsProps> = ({
  sections = [],
  isVapt = false,
  title,
  subtitle,
  id = "services-section",
}) => {
  if (!sections || sections.length === 0) return null;

  // Theme styling based on mode (WCAG AAA/AA Compliant Color Ratios)
  const theme = isVapt
    ? {
        headingColor: "text-cyan-950",
        borderColor: "border-cyan-500",
        bulletIconBg: "bg-cyan-50 border-cyan-200 text-cyan-700",
      }
    : {
        headingColor: "text-slate-900",
        borderColor: "border-emerald-500",
        bulletIconBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      };

  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className="py-4 lg:py-8 bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <header className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            {subtitle && (
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2
                id={`${id}-title`}
                className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${theme.headingColor}`}
              >
                {title}
              </h2>
            )}
          </header>
        )}

        {/* Dynamic Section Mapping */}
        <div className="space-y-10 lg:space-y-12">
          {sections.map((section, idx) => {
            const hasSubSections = Boolean(section.subSections && section.subSections.length > 0);

            const cards = hasSubSections
              ? section.subSections!.map((sub) => ({
                  title: sub.subHeading,
                  desc: sub.text,
                  bullets: sub.bulletPoints,
                }))
              : [
                  {
                    title: section.heading,
                    desc: section.paragraphs?.join(" "),
                    bullets: section.bulletPoints,
                  },
                ];

            const hasImage = Boolean(section.image);
            const cardCount = cards.length;

            // Responsive Layout Calculation
            let gridColsClass = "grid-cols-1";
            if (cardCount === 2) gridColsClass = "grid-cols-1 sm:grid-cols-2";
            if (cardCount >= 3) gridColsClass = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

            const sectionHeadingId = `${id}-section-heading-${idx}`;

            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300"
                aria-labelledby={hasSubSections && section.heading ? sectionHeadingId : undefined}
              >
                {/* Section Main Heading (If section has subsections) */}
                {hasSubSections && section.heading && (
                  <div className="mb-6 pb-4 border-b border-slate-100">
                    <h3
                      id={sectionHeadingId}
                      className="text-xl sm:text-2xl font-bold text-slate-900"
                    >
                      {section.heading}
                    </h3>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Optimized Image Column */}
                  {hasImage && (
                    <div className="lg:col-span-4 flex flex-col justify-center">
                      <div className="relative w-full aspect-square max-w-90 mx-auto rounded-xl overflow-hidden bg-slate-50 border border-slate-100 p-4">
                        <Image
                          src={section.image!}
                          alt={section.imageAlt || section.heading || `Visual for section ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 360px"
                          loading="lazy"
                          className="object-contain p-2"
                        />
                      </div>
                    </div>
                  )}

                  {/* Cards Area */}
                  <div className={`${hasImage ? "lg:col-span-8" : "lg:col-span-12"} flex flex-col justify-center`}>
                    <div className={`grid ${gridColsClass} gap-5 h-full`}>
                      {cards.map((card, cIdx) => (
                        <div
                          key={cIdx}
                          className="group relative bg-slate-50/70 hover:bg-white rounded-xl p-5 border border-slate-200/70 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden"
                        >
                       
                          <div
                            aria-hidden="true"
                            className={`absolute bottom-0 right-0 w-10 h-10 pointer-events-none rounded-br-xl border-r-2 border-b-2 ${theme.borderColor} opacity-60 group-hover:opacity-100 transition-opacity`}
                          />

                          <div>
                            {card.title && (
                              <h4 className="text-md font-semibold text-black mb-2 group-hover:text-slate-950">
                                {card.title}
                              </h4>
                            )}

                            {card.desc && (
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {card.desc}
                              </p>
                            )}
                          </div>

                          {/* Accessible List (UL/LI) for Screen Readers */}
                          {card.bullets && card.bullets.length > 0 && (
                            <ul
                              className="mt-4 pt-3 border-t border-slate-200/60 space-y-2"
                              aria-label="Features list"
                            >
                              {card.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                  <span
                                    aria-hidden="true"
                                    className={`p-0.5 rounded-full border ${theme.bulletIconBg} shrink-0 mt-0.5`}
                                  >
                                    <Check className="w-3 h-3" />
                                  </span>
                                  <span className="leading-tight">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};