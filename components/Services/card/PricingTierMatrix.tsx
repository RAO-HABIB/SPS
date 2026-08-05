import React from "react";
import { Check } from "lucide-react";

export interface PricingRow {
  tier: string;
  description: string;
  oneDataCenter: string;
  twoToTenDataCenters: string;
  moreThanTenDataCenters: string;
}

export interface PricingTierMatrixProps {
  pricingTable?: PricingRow[];
  isVapt?: boolean;
}

export const PricingTierMatrix: React.FC<PricingTierMatrixProps> = ({
  pricingTable,
  isVapt = false,
}) => {
  if (!pricingTable || pricingTable.length === 0) return null;

  // Theme configuration
  const theme = isVapt
    ? {
        tierColor: "text-cyan-600",
        iconColor: "text-cyan-600",
        btnBg: "bg-cyan-600 hover:bg-cyan-700 text-white",
        badgeBg: "bg-cyan-50 text-cyan-800 border-cyan-200",
      }
    : {
        tierColor: "text-blue-600",
        iconColor: "text-blue-600",
        btnBg: "bg-slate-900 hover:bg-slate-800 text-white",
        badgeBg: "bg-slate-100 text-slate-800 border-slate-200",
      };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-auto mx-auto">
      {/* Section Title */}
      <h3 className={`text-xl font-bold mb-6 ${isVapt ? "text-white" : "text-black"}`}>
        Pricing Tier Matrix
      </h3>

      {/* Grid Layout - Compact Spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {pricingTable.map((row, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            {/* Header Area - Reduced Padding */}
            <div className="p-5 pb-4 flex flex-col justify-between min-h-27.5">
              <h4 className={`text-base font-bold tracking-tight ${theme.tierColor}`}>
                {row.tier}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed line-clamp-3">
                {row.description}
              </p>
            </div>

            {/* Inner Content Box */}
            <div className="flex-1 p-2 pt-0 flex flex-col justify-between">
              <div className="bg-slate-50/80 rounded-xl p-4 flex flex-col justify-between flex-1 border border-slate-100">
                
                {/* Compact Price List */}
                <ul className="space-y-3" role="list">
                  {/* One Data Center */}
                  <li className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${theme.iconColor} shrink-0`} />
                      <span className="font-semibold text-slate-700">One Data Center</span>
                    </div>
                    <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-white border border-slate-200 shadow-2xs">
                      {row.oneDataCenter}
                    </span>
                  </li>

                  {/* 2 to 10 Data Centers */}
                  <li className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${theme.iconColor} shrink-0`} />
                      <span className="font-semibold text-slate-700">2 to 10 Data Centers</span>
                    </div>
                    <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-white border border-slate-200 shadow-2xs">
                      {row.twoToTenDataCenters}
                    </span>
                  </li>

                  {/* 10+ Data Centers */}
                  <li className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Check className={`w-4 h-4 ${theme.iconColor} shrink-0`} />
                      <span className="font-semibold text-slate-700">10+ Data Centers</span>
                    </div>
                    <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-white border border-slate-200 shadow-2xs">
                      {row.moreThanTenDataCenters}
                    </span>
                  </li>
                </ul>

                {/* Compact CTA Button */}
                <div className="mt-6">
                  <a
                    href="#contact"
                    className={`block w-full text-center py-2.5 px-4 rounded-lg text-xs font-semibold transition-all duration-200 ${theme.btnBg} shadow-2xs`}
                  >
                    Select Plan
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};