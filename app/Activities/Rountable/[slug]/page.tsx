import React from 'react';
import { notFound } from 'next/navigation';
import { getRoundtableBySlug, getAllRoundtableSlugs } from '@/lib/activities-data';
import RountableHero from '@/components/activities/rountables/RoundtableHero';
import RountableContent from '@/components/activities/rountables/RoundtableContent';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/Footer/footer';


interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllRoundtableSlugs();
}

export default async function RoundtableDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const roundtable = getRoundtableBySlug(slug);

  if (!roundtable) {
    notFound();
  }

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#fafbfe] font-sans antialiased text-slate-800">
      {/* 1. Dynamic Hero Section with Countdown */}
      <RountableHero roundtable={roundtable} />

      {/* 2. Main content area with layout split & registration form */}
      <RountableContent roundtable={roundtable} />
    </main>
    <Footer/>
    </>
  );
}