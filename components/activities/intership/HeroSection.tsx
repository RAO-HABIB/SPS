import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative  text-white py-20 px-8">
      <div className="absolute inset-0  bg-cover bg-center" >
       <Image
       src="/Hero/Hero8.png"
       alt='background'
       fill
       className='object-cover'
       />

      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Start your professional journey by joining the SPS Internship Program
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
          Join our hands-on strictly program, open to graduates and undergraduates. Discover your career path, build valuable skills, and gain practical experience.
        </p>
<Link href="/Activities/Internship/apply">
  <span className="bg-transparent border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-[#1a237e] transition font-semibold inline-block cursor-pointer">
    Apply Now
  </span>
</Link>
      </div>
    </section>
  );
}