import React from 'react';
import { Roundtable } from '@/lib/activities-data';

import { CheckCircle2, Goal, CalendarRange, Users, GraduationCap, Clock, MonitorPlay,  Target } from 'lucide-react';
import Image from 'next/image';
import RountableRegistrationForm from './RoundtableRegistrationForm';
import { LiaLinkedin } from 'react-icons/lia';

interface ContentProps {
  roundtable: Roundtable;
}

export default function RountableContent({ roundtable }: ContentProps) {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Panel: Feature Rich standard detailed content */}
        <div className="lg:col-span-7 space-y-16">
          
          {/* High Fidelity alternatly styled quick info standard banners details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-50/50 border border-slate-100 rounded-3xl p-6 shadow-inner">
            {[
              { icon: Clock, bold: "Frequency:", text: "3rd Thursday of every month" },
              { icon: CalendarRange, bold: "Start Date:", text: "July 16th, 2026" },
              { icon: MonitorPlay, bold: "Format:", text: "Virtual (Microsoft Teams)" }
            ].map((info, idx) => (
              <div key={idx} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-black">
                    {info.bold}
                  </span>
                  <span className="block text-sm font-bold text-slate-800">
                    {info.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* About description details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight border-l-4 border-l-blue-600 pl-4">
              {roundtable.aboutTitle}
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {roundtable.aboutDescription}
            </p>
          </div>

          {/* Premium alternatly grid styled Why Attend Section features */}
          <div className="space-y-5 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-100">
            <h3 className="text-xl font-extrabold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-4">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              {roundtable.whyAttendTitle}
            </h3>
            <p className="text-xs font-medium text-slate-400 italic mb-4">{roundtable.whyAttendIntro}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {roundtable.whyAttendPoints.map((point, index) => (
                <div key={index} className="flex gap-3 items-center text-sm text-slate-600 leading-relaxed hover:text-blue-700 cursor-default transition">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* High Fidelity modern outlined grid styled Goals Section modules features */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Goal className="w-5 h-5 text-blue-600" />
              {roundtable.goalsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {roundtable.goals.map((goal, index) => (
                <div key={index} className="p-5 border border-slate-100 hover:border-blue-200/50 rounded-2xl bg-white shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition duration-200 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <Target className="w-3.5 h-3.5 text-blue-500" />
                    <h4 className="font-extrabold text-xs text-slate-900 uppercase tracking-wide block leading-tight">
                      {goal.bold}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed pl-6 border-l border-slate-100 ml-1.5">
                    {goal.text.startsWith('- ') ? goal.text.slice(2) : goal.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern list styled Agenda section with defined icons features */}
          <div className="space-y-5 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-lg shadow-slate-100">
            <h3 className="text-xl font-extrabold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-4">
              <CalendarRange className="w-5 h-5 text-blue-600" />
              {roundtable.agendaTitle}
            </h3>
            <div className="space-y-4">
              {roundtable.agenda.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-slate-50 rounded-xl p-4 border border-slate-100 group">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">0{idx + 1}</div>
                  <div className="space-y-1">
                    <strong className="text-[10px] text-slate-400 uppercase tracking-widest font-black block">Core Focus Module</strong>
                    <span className="font-semibold text-sm text-slate-700 leading-tight block">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Split grid styled Who Should Join section features details with defined icons details */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-slate-950 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Users className="w-5 h-5 text-blue-600" />
              {roundtable.whoShouldJoinTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              {roundtable.whoShouldJoin.map((who, index) => (
                <div key={index} className="flex gap-3 items-center p-3.5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                  <p className="text-xs leading-relaxed text-slate-600">
                    <strong className="text-slate-800 font-extrabold text-xs">{who.bold}</strong>: {who.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium banner styled Ideal Participants section features details and standardized spacing standard details with defined icons and standardized spacing */}
          <div className="space-y-4 p-6 border-2 border-dashed border-slate-200 bg-slate-50/50 rounded-3xl">
            <h3 className="text-xl font-extrabold text-slate-950 flex items-center gap-2 border-b border-slate-200/50 pb-3">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              {roundtable.idealParticipantsTitle}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {roundtable.idealParticipantsText}
            </p>
          </div>

        </div>

        {/* Right Hand: Deep Elevated Sticky card with standard high fidelity features and standardized spacing with defined icons details standard depth effects */}
        <div className="lg:col-span-5 lg:sticky lg:top-8 mt-12 lg:mt-0">
          <div className="bg-white border border-slate-200/80 shadow-2xl rounded-3xl p-6 md:p-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg md:text-xl font-black text-slate-900 tracking-tight">Roundtable Registration</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">Complete this form to receive your secure access credentials for the session.</p>
            </div>
            {/* SaaS optimized form details */}
            <RountableRegistrationForm />
          </div>

          
        </div>

      </div>
    </section>
  );
}