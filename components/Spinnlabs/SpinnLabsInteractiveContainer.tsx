"use client"; // ⚠️ Yeh line top par hona zaroori hai

import React, { useState } from "react";
import SpinnLabsHero from "./SpinnLabsHero";
import ProposeIdeaForm from "./ProposeIdeaForm"; 
import CreatePlanForm from "./steps/CreatePlanView";
import EquityModelView from "./steps/EquityModelView";
import SignAgreement from "./steps/SignAgreementView";
import ExecutePlan from "./steps/ExecutePlanView";
import Launch from "./steps/LaunchStartupView";

interface Props {
  page: any;
  staticContent: React.ReactNode;
}

export default function StartupsInteractiveWrapper({ page, staticContent }: Props) {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const normalizeStep = (step: string | null) => (step ? step.toLowerCase().trim() : "");

  return (
    <>
      <SpinnLabsHero
        data={page.hero}
        activeStep={activeStep}
        onStepClick={(stepTitle) => {
          if (activeStep === stepTitle) {
            setActiveStep(null); 
          } else {
            setActiveStep(stepTitle); 
          }
        }}
      />
      {activeStep === null && (
        <div className="default-landing-view">
          {staticContent}
        </div>
      )}

      {/* =========================================
          CONDITION 2: DYNAMIC FORM VIEW
          ========================================= */}
      {activeStep !== null && (
        <div className="dynamic-forms-wrapper bg-gray-50 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            
            {normalizeStep(activeStep) === "propose idea" && <ProposeIdeaForm />}
            {normalizeStep(activeStep) === "create plan" && <CreatePlanForm/>}
            {normalizeStep(activeStep) === "equity model" && <EquityModelView/>}
            {normalizeStep(activeStep) === "sign agreement" && <SignAgreement/>}
            {normalizeStep(activeStep) === "execute plan" && <ExecutePlan/>}
            {normalizeStep(activeStep) === "launch startup" && <Launch/>}
            
          </div>
        </div>
      )}
    </>
  );
}