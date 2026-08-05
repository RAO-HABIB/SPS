"use client";
import { useState } from "react";

import { ServiceDetail } from "@/lib/service-data";
import TrainingSubNavSection from "./TrainingSabNav";
import CustomHeroSection from "./CustomersHeroSection";
import CourseFilterSection from "./CourseFilter";
import InstructorSection from "./Instructor";

export default function TrainingPageWrapper({ service }: { service: ServiceDetail }) {
  const [activeTab, setActiveTab] = useState<"courses" | "instructor">("courses");

  return (
    <>
      <TrainingSubNavSection activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "courses" ? (
        <>
          {service.customHero && <CustomHeroSection {...service.customHero} />}
          {service.courseFilter && <CourseFilterSection data={service.courseFilter} />}
        </>
      ) : (
        service.instructorSection && <InstructorSection data={service.instructorSection} />
      )}
    </>
  );
}