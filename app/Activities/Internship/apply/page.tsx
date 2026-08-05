import InternshipForm from '@/components/activities/intership/InternshipForm';
import Footer from '@/components/Footer/footer';
import Navbar from '@/components/Navbar/navbar';
import React from 'react';


export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <Navbar />
      <main className="grow">
        <InternshipForm />
      </main>
      <Footer />
    </div>
  );
}