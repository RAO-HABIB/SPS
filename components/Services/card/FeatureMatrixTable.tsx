import React, { Fragment } from "react";

interface FeatureMatrixTableProps {
  featureMatrix: {
    plans?: Array<{ id?: string; name: string; subtitle?: string }>;
    categories?: Array<{
      category: string;
      items?: Array<{
        feature: string;
        standard: any;
        advance: any;
        premium: any;
      }>;
    }>;
  };
  renderStatusBadge: (status: any) => React.ReactNode;
  onRequestQuote: (planId: string) => void;
}

export const FeatureMatrixTable: React.FC<FeatureMatrixTableProps> = ({
  featureMatrix,
  renderStatusBadge,
  onRequestQuote,
}) => {
  if (!featureMatrix) return null;

  return (
    <section className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-187.5">
            <thead>
              <tr className="bg-slate-950 text-white">
                <th className="p-4 text-sm font-bold w-1/3 border-r border-slate-800">
                  Capabilities & Features
                </th>
                {featureMatrix.plans?.map((plan, i) => (
                  <th
                    key={i}
                    className="p-4 text-center border-r border-slate-800 last:border-0 min-w-47.5"
                  >
                    <div className="text-sm font-bold text-white">{plan.name}</div>
                    {plan.subtitle && (
                      <div className="text-[11px] text-slate-400 font-normal mt-1 min-h-7 flex items-center justify-center">
                        {plan.subtitle}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => onRequestQuote(plan.id || plan.name.toLowerCase())}
                      className="mt-2.5 inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-4 py-1.5 rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      Request Quota
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {featureMatrix.categories?.map((cat, catIdx) => (
                <Fragment key={catIdx}>
                  <tr className="bg-slate-900 text-white">
                    <td
                      colSpan={(featureMatrix.plans?.length || 3) + 1}
                      className="p-2.5 px-4 font-bold text-xs uppercase tracking-wider text-slate-200"
                    >
                      {cat.category}
                    </td>
                  </tr>
                  {cat.items?.map((item, itemIdx) => (
                    <tr
                      key={itemIdx}
                      className="hover:bg-slate-50/80 transition-colors border-b border-slate-100"
                    >
                      <td className="p-3 px-4 text-slate-800 font-medium border-r border-slate-100">
                        {item.feature}
                      </td>
                      <td className="p-3 text-center border-r border-slate-100">
                        {renderStatusBadge(item.standard)}
                      </td>
                      <td className="p-3 text-center border-r border-slate-100">
                        {renderStatusBadge(item.advance)}
                      </td>
                      <td className="p-3 text-center">
                        {renderStatusBadge(item.premium)}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};