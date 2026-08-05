import ApplicationProcess from '@/components/activities/intership/ApplicationProcess';
import AreasOfInternship from '@/components/activities/intership/AreaofSpeciality';
import Eligibility from '@/components/activities/intership/Eligibility';
import FAQ from '@/components/activities/intership/FAQ';
import Hero from '@/components/activities/intership/HeroSection';
import Overview from '@/components/activities/intership/Overview';
import ProgressivePhases from '@/components/activities/intership/ProgramPhases';
import SubNavigation from '@/components/activities/intership/SubNavigation';
import Universities from '@/components/activities/intership/Universities';
import WhatYouWillDo from '@/components/activities/intership/WhatWillYouDo';
import WhySps from '@/components/activities/intership/WhyChooseUs';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Navbar/navbar';
import React from 'react';

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Aapka custom Navbar */}
      <Navbar />
      <Hero />
      <SubNavigation />
      <Overview />
      <ProgressivePhases />
      <AreasOfInternship />
      <WhySps />
      <Universities />
      <WhatYouWillDo />
      <Eligibility />
      <ApplicationProcess />
      <FAQ />

      <Footer />
    </div>
  );
}