"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const universities = [
  { name: 'COMSATS', logo: '/internship/comsats.png' },
  { name: 'AIR UNIVERSITY', logo: '/internship/air.png' },
  { name: 'FAST UNIVERSITY', logo: '/internship/fast.png' },
  { name: 'NUST', logo: '/internship/nust.png' },
  { name: 'BAHRIA UNIVERSITY', logo: '/internship/bahria.png' },
  { name: 'ISLAMIC UNIVERSITY', logo: '/internship/islamic.png' },
  { name: 'VIRTUAL UNIVERSITY', logo: '/internship/virtual.png' },
  { name: 'FATIMA JINNAH', logo: '/internship/jinnah.jpeg' },
];

export default function Universities() {
  return (
    <section className="py-20 bg-blue-950 overflow-hidden">     
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <h2 className="text-center text-white text-3xl font-medium">
         Student Participation <span className="text-cyan-500">From Universities</span>
        </h2>
      </div>
      <div className="relative w-full flex overflow-hidden">
        <motion.div 
          className="flex gap-16"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...universities, ...universities].map((uni, idx) => (
            <div 
              key={idx} 
              className="shrink-0 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-28 h-28 bg-white backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-center p-4 transition-all duration-500 hover:border-blue-500 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <div className="relative w-16 h-16">
                  <Image src={uni.logo} alt={uni.name} fill className="object-contain" />
                </div>
              </div>
              <p className="mt-4 text-[10px] font-bold text-white tracking-widest uppercase ">
                {uni.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}