'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Roundtable } from '@/lib/activities-data';
import { Calendar, Clock, Monitor, Hourglass } from 'lucide-react';
import { LiaLinkedin } from 'react-icons/lia';

interface HeroProps {
  roundtable: Roundtable;
}

export default function RountableHero({ roundtable }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date(roundtable.eventDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0')
      });
    };

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId);
  }, [roundtable.eventDate]);

  return (
    <section className="relative text-white overflow-hidden py-8 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800/60">
      <Image 
        src="/Hero/Hero3.jpg"
        alt='background'
        fill
        priority
        className='object-cover '
      />
      
      <div className="absolute inset-0 bg-[#070913]/85 mix-blend-multiply z-0" />
    

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        <div className="lg:col-span-7 space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
                {roundtable.category}
              </span>
              <span className="text-[10px] text-cyan-400 font-semibold uppercase tracking-wider">
                • {roundtable.topic}
              </span>
            </div>
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {roundtable.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xl">
              {roundtable.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 items-center pt-3 border-t border-slate-800/80">
            {/* Host Capsule (Cyan Highlight) */}
            <div className="flex items-center gap-2.5 bg-slate-950/40 backdrop-blur-sm border border-slate-800/80 py-6 px-3 rounded-lg">
              <div className="relative w-16 h-16 rounded-full border border-cyan-500 overflow-hidden shrink-0">
                <Image 
                  src={roundtable.host.image} 
                  alt={roundtable.host.name} 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[11px] text-white leading-none">{roundtable.host.name}</span>
                  {roundtable.host.linkedIn && (
                    <a href={roundtable.host.linkedIn} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition">
                      <LiaLinkedin className="w-4 h-4 fill-current" />
                    </a>
                  )}
                </div>
                <span className="text-[9px] text-slate-400 block truncate max-w-35">{roundtable.host.organization}</span>
              </div>
            </div>

            {/* Co-Host Capsule (Blue Highlight) */}
            {roundtable.coHost && (
              <div className="flex items-center gap-2.5 bg-slate-950/40 backdrop-blur-sm border border-slate-800/80 py-6 px-3 rounded-lg">
                <div className="relative w-16 h-16 rounded-full border border-blue-500 overflow-hidden shrink-0">
                  <Image 
                    src={roundtable.coHost.image} 
                    alt={roundtable.coHost.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[11px] text-white leading-none">{roundtable.coHost.name}</span>
                    {roundtable.coHost.linkedIn && (
                      <a href={roundtable.coHost.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                        <LiaLinkedin className="w-4 h-4 fill-current" />
                      </a>
                    )}
                  </div>
                  <span className="text-[9px] text-slate-400 block truncate max-w-35">{roundtable.coHost.organization}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col gap-3">
          
          {/* Cyan/Blue Accent Metadata Micro-badge List */}
          <div className="grid grid-cols-3 gap-2 bg-[#090d1a]/80 backdrop-blur-md border border-slate-800/80 rounded-xl p-3 text-xs">
            <div className="space-y-1">
              <span className="text-[9px] text-cyan-400 uppercase tracking-wider font-extrabold flex items-center gap-1">
                <Calendar className="w-3 h-3 text-cyan-400" /> Date
              </span>
              <p className="font-semibold text-slate-200 text-[10px] leading-tight">{roundtable.date}</p>
            </div>
            <div className="space-y-1 border-l border-slate-800/80 pl-2">
              <span className="text-[9px] text-blue-400 uppercase tracking-wider font-extrabold flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" /> Time
              </span>
              <p className="font-semibold text-slate-200 text-[10px] leading-tight">{roundtable.time}</p>
            </div>
            <div className="space-y-1 border-l border-slate-800/80 pl-2">
              <span className="text-[9px] text-blue-400 uppercase tracking-wider font-extrabold flex items-center gap-1">
                <Monitor className="w-3 h-3 text-blue-400" /> Platform
              </span>
              <p className="font-semibold text-slate-200 text-[10px] leading-tight">MS Teams</p>
            </div>
          </div>

          
          <div className="flex items-center justify-between bg-linear-to-r from-blue-950/30 to-slate-950/60 backdrop-blur-md border border-slate-800/80 p-2.5 px-4 rounded-xl shadow-lg">
            <span className="text-[10px] text-slate-300 font-extrabold uppercase tracking-widest flex items-center gap-1.5 shrink-0">
              <Hourglass className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Live Countdown
            </span>
            <div className="flex gap-2.5 items-center text-xs font-mono">
              <span className="text-cyan-400 font-black">{timeLeft.days}d</span>
              <span className="text-slate-600 font-sans">:</span>
              <span className="text-cyan-400 font-black">{timeLeft.hours}h</span>
              <span className="text-slate-600 font-sans">:</span>
              <span className="text-cyan-400 font-black">{timeLeft.minutes}m</span>
              <span className="text-slate-600 font-sans">:</span>
              <span className="text-cyan-300 font-black animate-pulse">{timeLeft.seconds}s</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}