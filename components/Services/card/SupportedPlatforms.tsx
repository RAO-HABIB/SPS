import React from "react";
import { Check } from "lucide-react";

interface SupportedPlatformsProps {
  supportedPlatforms?: string[];
  isVapt?: boolean;
}

export const SupportedPlatforms: React.FC<SupportedPlatformsProps> = ({
  supportedPlatforms,
  isVapt = false,
}) => {
  if (!supportedPlatforms || supportedPlatforms.length === 0) return null;

  return (
    <section
      className={`lg:max-w-sm max-w-64 mx-auto rounded-2xl p-5 border shadow-2xs space-y-3 ${
        isVapt ? "bg-[#0a1931] border-slate-800" : "bg-white border-slate-200/80"
      }`}
    >
      <h3 className={`text-lg  text-center font-bold ${isVapt ? "text-white" : "text-slate-900"}`}>
        Supported Platforms
      </h3>

      
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {supportedPlatforms.map((platform, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2 text-lg text-center font-semibold px-3.5 py-2 rounded-lg border transition-all ${
              isVapt
                ? "bg-[#112240]/60 border-slate-800/80 text-slate-200"
                : "bg-slate-50 border-slate-200/80 text-slate-700"
            }`}
          >
            <Check className={`w-3.5 h-3.5 ${isVapt ? "text-cyan-400" : "text-blue-600"} shrink-0`} />
            <span>{platform}</span>
          </div>
        ))}
      </div>
    </section>
  );
};