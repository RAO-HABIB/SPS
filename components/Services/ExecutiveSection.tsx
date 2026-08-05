import Image from "next/image";
import Link from "next/link";
import { Executive } from "@/lib/service-data";
import { CalendarDays } from "lucide-react";

export default function ExecutiveSection({
  executive,
}: {
  executive: Executive;
}) {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-16  text-white overflow-hidden">
     <Image
     src="/Hero/Hero6.jpg"
     alt="Executive Hero"
     fill
     className="object-cover"
     
     /> 
     

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left Information Block */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-block bg-[#1BA6C7]/10 border border-[#1BA6C7]/30 text-[#1BA6C7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            Executive Leadership
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            {executive.sectionHeading}
          </h2>
          
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {executive.description}
          </p>
          
          <div className="pt-4">
            <Link
              href={executive.meetingLink}
              className="inline-flex items-center gap-3 bg-white text-[#0a1b3d] font-extrabold px-8 py-4 rounded-xl shadow-xl hover:bg-[#1BA6C7] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Schedule an Appointment</span>
            </Link>
          </div>
        </div>

     
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group">  
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1BA6C7] to-white/20 rounded-full blur-md opacity-70 group-hover:scale-105 transition-transform duration-500" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-[#0f2554]">
              {executive.image ? (
                <Image
                  src={executive.image}
                  alt={executive.name || "Executive"}
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                  No Avatar Provided
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}