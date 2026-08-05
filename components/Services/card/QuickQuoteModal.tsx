import React from "react";
import { Shield, X, User, Mail, Clock, Zap, Activity, Check } from "lucide-react";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardTitle?: string;
  selectedPlan: string;
  setSelectedPlan: (plan: string) => void;
  selectedScope: string;
  setSelectedScope: (scope: string) => void;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  cardTitle,
  selectedPlan,
  setSelectedPlan,
  selectedScope,
  setSelectedScope,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm"
    >
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-950 text-white p-5 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">Get Quote — {cardTitle}</h2>
              <p className="text-xs text-slate-400">
                Selected Tier: <span className="text-cyan-400 capitalize font-semibold">{selectedPlan}</span>
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="p-5 sm:p-6 overflow-y-auto space-y-5 text-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="user-name" className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  id="user-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="user-email" className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  id="user-email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold text-slate-700 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-cyan-600" />
              Monitoring Scope <span className="text-rose-500">*</span>
            </legend>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: "24x7", title: "24x7", desc: "Round-the-clock" },
                { id: "16x7", title: "16x7", desc: "Extended hours" },
                { id: "8x5", title: "8x5", desc: "Business hours" }
              ].map((scope) => (
                <button
                  type="button"
                  key={scope.id}
                  onClick={() => setSelectedScope(scope.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    selectedScope === scope.id
                      ? "border-cyan-500 bg-cyan-50/50 text-slate-900 font-semibold ring-1 ring-cyan-500"
                      : "border-slate-200 hover:border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  <div className="text-xs font-bold">{scope.title}</div>
                  <div className="text-[10px] text-slate-500">{scope.desc}</div>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="text-xs font-semibold text-slate-700 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-cyan-600" />
              Service Tier <span className="text-rose-500">*</span>
            </legend>
            <div className="space-y-2">
              {[
                { id: "standard", title: "Standard", desc: "Standard Plan Specification" },
                { id: "advance", title: "Advance", desc: "Advanced Pro Tier Setup" },
                { id: "premium", title: "Premium", desc: "Premium Full Coverage Option" }
              ].map((plan) => (
                <button
                  type="button"
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                    selectedPlan === plan.id
                      ? "border-cyan-500 bg-cyan-50/50 text-slate-900 ring-1 ring-cyan-500"
                      : "border-slate-200 hover:border-slate-300 bg-white text-slate-600"
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900">{plan.title}</div>
                    <div className="text-[11px] text-slate-500">{plan.desc}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${selectedPlan === plan.id ? "border-cyan-600 bg-cyan-600" : "border-slate-300"}`}>
                    {selectedPlan === plan.id && <Check className="w-3 h-3 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="space-y-1.5">
            <label htmlFor="eps-select" className="text-xs font-semibold text-slate-700 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-cyan-600" />
              Estimated EPS (Events Per Second)
            </label>
            <select
              id="eps-select"
              className="w-full py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all"
            >
              <option value="1000">Up to 1,000 EPS</option>
              <option value="5000">1,000 – 5,000 EPS</option>
              <option value="10000">5,000 – 10,000 EPS</option>
              <option value="custom">10,000+ EPS</option>
            </select>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-lg transition-colors cursor-pointer"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};