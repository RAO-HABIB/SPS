"use client";

import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import HeroSection from "./card/Hero";
import { FeatureMatrixTable } from "./card/FeatureMatrixTable";
import { ContentSections } from "./card/ContentSections";
import { SupportedPlatforms } from "./card/SupportedPlatforms";
import { PricingTierMatrix } from "./card/PricingTierMatrix";
import QuotaForm from "./card/QuotaForm";
import { QuickQuoteModal } from "./card/QuickQuoteModal";

export default function CardDetailClient({ detail }: { detail: any }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [selectedScope, setSelectedScope] = useState("24x7");

  const [activeView, setActiveView] = useState<"detail" | "quota">("detail");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const renderStatusBadge = (status: "yes" | "no" | "partial") => {
    if (status === "yes") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800">
          <Check className="w-3 h-3 text-emerald-600" /> Included
        </span>
      );
    }
    if (status === "partial") {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-800">
          <Check className="w-3 h-3 text-amber-600" /> Partial
        </span>
      );
    }
    return <span className="text-slate-300 font-bold text-sm">—</span>;
  };

  const openQuoteModal = (planName: string = "standard") => {
    setSelectedPlan(planName.toLowerCase());
    setIsModalOpen(true);
  };

  const isVapt = Boolean(
    detail?.id === "vapt" ||
    detail?.serviceSlug === "vapt" ||
    detail?.cardTitle?.toLowerCase().includes("vapt")
  );

  return (
    <>
      <Navbar />

      <HeroSection
        detail={detail}
        activeView={activeView}
        setActiveView={setActiveView}
        isVapt={isVapt}
      />

      <main
        className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 transition-colors ${
          isVapt ? "bg-[#030712] text-slate-100" : "bg-slate-50 text-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {activeView === "detail" && (
            <>
              {detail?.featureMatrix && (
                <FeatureMatrixTable
                  featureMatrix={detail.featureMatrix}
                  renderStatusBadge={renderStatusBadge}
                  onRequestQuote={(planId) => openQuoteModal(planId)}
                />
              )}

              {detail?.mainTitle && (
                <div className="border-l-4 border-cyan-500 pl-12 py-4">
                  <h2
                    className={`md:text-3xl sm:text-xl font-normal   uppercase tracking-wide ${
                      isVapt ? "text-white" : "text-black"
                    }`}
                  >
                    {detail.mainTitle}
                  </h2>
                </div>
              )}

              <ContentSections sections={detail?.sections} isVapt={isVapt} />

              <PricingTierMatrix pricingTable={detail?.pricingTable} isVapt={isVapt} />

              <SupportedPlatforms
                supportedPlatforms={detail?.supportedPlatforms}
                isVapt={isVapt}
              />
            </>
          )}

          {activeView === "quota" && (
            <QuotaForm
              detail={detail}
              isVapt={isVapt}
              onSuccess={() => setActiveView("detail")}
            />
          )}
        </div>
      </main>

      <QuickQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardTitle={detail?.cardTitle || detail?.title}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        selectedScope={selectedScope}
        setSelectedScope={setSelectedScope}
      />

      <Footer />
    </>
  );
}