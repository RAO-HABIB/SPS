"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  User, 
  Mail, 
  Building, 
  Briefcase, 
  Phone, 
  CheckCircle2, 
  Layers,
  FileText,
  UserPlus
} from "lucide-react";
import { InstructorSection as InstructorSectionType } from "@/lib/service-data";

interface Props {
  data: InstructorSectionType;
}

export default function InstructorSection({ data }: Props) {
  const [activeTab, setActiveTab] = useState<"overview" | "register">("overview");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    jobTitle: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Onboarding request initialized successfully!");
  };

  return (
    <section className="bg-[#f8fafc]  relative overflow-hidden">
      <div className="relative py-30 px-6 md:px-12 lg:px-16 bg-[#0a1b3d] text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero/Hero8.png"
            alt="Instructor-background"
            fill
            className="object-fit "
            priority
          />
      
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-black text-white uppercase tracking-wider backdrop-blur-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Instructor Network Hub</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
            {data.heroTitle}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            {data.heroDescription}
          </p>
        </div>
      </div>

      {/* ==================== INTERACTIVE WORKSPACE AREA ==================== */}
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-10 relative z-10">
        
        {/* Dynamic Tab Layout Switcher */}
        <div className="flex justify-center p-1.5 bg-[#0a1b3d]/5 rounded-2xl max-w-md mx-auto border border-gray-200/80">
          <button
            onClick={() => setActiveTab("overview")}
            className={`flex items-center justify-center gap-2.5 flex-1 py-3 text-sm font-bold rounded-xl transition-all outline-hidden ${
              activeTab === "overview"
                ? "bg-[#0a1b3d] text-white shadow-lg font-black"
                : "text-gray-600 hover:text-[#0a1b3d]"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Program Overview</span>
          </button>
          
          <button
            onClick={() => setActiveTab("register")}
            className={`flex items-center justify-center gap-2.5 flex-1 py-3 text-sm font-bold rounded-xl transition-all outline-hidden ${
              activeTab === "register"
                ? "bg-[#1BA6C7] text-white shadow-lg font-black"
                : "text-gray-600 hover:text-[#1BA6C7]"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Portal Registration</span>
          </button>
        </div>

        {/* Central Card Container */}
        <div className="bg-white border-2 border-[#0a1b3d]/10 rounded-3xl p-6 md:p-10 shadow-[0_15px_50px_rgba(10,27,61,0.03)] min-h-[420px] transition-all duration-300">
          
          {/* TAB 1: PROGRAM OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-4">
                
                <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {data.introParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 space-y-4">
                <h4 className="text-xs font-black text-[#0a1b3d] uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1BA6C7]" />
                  Authorized Validation Partners
                </h4>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {data.partners.map((partner, idx) => (
                    <div
                      key={idx}
                      className="bg-[#f8fafc] border border-gray-200 rounded-xl p-4 h-20 flex items-center justify-center hover:border-[#1BA6C7]/50 transition-colors"
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          fill
                          className="object-contain filter  transition-all duration-200"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: INTERACTIVE PORTAL FORM CONSTRUCT */}
          {activeTab === "register" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-gray-100 pb-4 text-center sm:text-left">
                <h3 className="text-xl font-extrabold text-[#0a1b3d] tracking-tight">
                  Credential Verification Request
                </h3>
                <p className="text-xs text-gray-500 font-semibold mt-1">
                  Please supply explicit professional markers to initiate validation mapping.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", type: "text", placeholder: "Full Identity Name", required: true, icon: User },
                    { name: "email", type: "email", placeholder: "Professional Email Address", required: true, icon: Mail },
                    { name: "organization", type: "text", placeholder: "Enterprise Institution", icon: Building },
                    { name: "jobTitle", type: "text", placeholder: "Domain Track Title", icon: Briefcase },
                  ].map((field) => {
                    const IconComponent = field.icon;
                    return (
                      <div key={field.name} className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1BA6C7] transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full pl-11 pr-5 py-3.5 bg-[#f8fafc] border-2 border-gray-200 text-black rounded-xl text-sm font-semibold focus:outline-hidden focus:border-[#1BA6C7] focus:bg-white transition-all placeholder:text-gray-400"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Full Width Field for Phone Contact */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#1BA6C7] transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Secure Contact Line / Phone Matrix"
                    className="w-full pl-11 pr-5 py-3.5 bg-[#f8fafc] border-2 border-gray-200 text-black rounded-xl text-sm font-semibold focus:outline-hidden focus:border-[#1BA6C7] focus:bg-white transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Submission Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-400 font-medium max-w-md text-center sm:text-left">
                    By deploying this registry data vector, your security and credentials comply with structured data governance rules.
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#1BA6C7] hover:bg-[#0a1b3d] text-white font-extrabold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 shrink-0"
                  >
                    Deploy Application
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}