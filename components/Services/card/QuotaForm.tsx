"use client";

import React, { useState } from "react";
import { Shield, User, Mail, Building, Briefcase, Check, Send, CheckCircle } from "lucide-react";

interface QuotaFormProps {
  detail: any;
  isVapt?: boolean;
  onSuccess?: () => void;
}

export default function QuotaForm({ detail, onSuccess }: QuotaFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesList = [
    "External / Internal Network Pentesting",
    "Web & Mobile Application Assessment",
    "API & Cloud Security Audit",
    "Active Directory Security Assessment",
    "Social Engineering Simulation",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Enter a valid corporate email address." }));
      } else {
        setErrors((prev) => {
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }

    if (name === "name" && value.trim().length < 3) {
      setErrors((prev) => ({ ...prev, name: "Name must be at least 3 characters." }));
    } else if (name === "name") {
      setErrors((prev) => {
        const { name, ...rest } = prev;
        return rest;
      });
    }
  };

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto my-8 p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xl">
        <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
        <h3 className="text-2xl font-bold text-slate-900">Quota Request Submitted!</h3>
        <p className="text-slate-600 text-sm">
          Thank you for configuring your scope for{" "}
          <span className="text-cyan-600 font-semibold">{detail?.cardTitle}</span>. Our cybersecurity engineering team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={onSuccess}
          className="mt-4 px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-md"
        >
          Return to Details
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-6 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden text-slate-800">
      {/* Header Block */}
      <div className="bg-slate-900 p-6 flex items-center justify-between border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-600">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Scope Configurator &mdash; {detail?.cardTitle}
            </h2>
            <p className="text-xs text-slate-50">
              Tailor your security assessment parameters.
            </p>
          </div>
        </div>
      </div>

      {/* Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {/* Primary Contact Details */}
        <div className="space-y-4">
          <h3 className="text-xs font-bold text-cyan-600 uppercase tracking-widest flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Primary Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                    errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-cyan-500 focus:bg-white"
                  } rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all`}
                />
              </div>
              {errors.name && <span className="text-[11px] text-red-500 block mt-1">{errors.name}</span>}
            </div>

            {/* Corporate Email */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Corporate Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@enterprise.com"
                  className={`w-full pl-9 pr-3 py-2.5 bg-slate-50 border ${
                    errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200 focus:border-cyan-500 focus:bg-white"
                  } rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all`}
                />
              </div>
              {errors.email && <span className="text-[11px] text-red-500 block mt-1">{errors.email}</span>}
            </div>

            {/* Company Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Company Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="SecOps Global"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>

            {/* Role / Designation */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">
                Designation / Role
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  placeholder="Security Architect"
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 focus:border-cyan-500 focus:bg-white rounded-xl text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scope Selection (Checkboxes) */}
        <div className="space-y-3 pt-4 border-t border-slate-200">
          <h3 className="text-xs font-bold text-cyan-600 uppercase tracking-widest flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500"></span> Scope Assessment Checklist
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicesList.map((service, index) => {
              const isChecked = selectedServices.includes(service);
              return (
                <div
                  key={index}
                  onClick={() => toggleService(service)}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer select-none transition-all ${
                    isChecked
                      ? "bg-cyan-50/60 border-cyan-400 text-slate-900"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-100/60"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center transition-all ${
                      isChecked ? "bg-cyan-500 text-slate-950" : "border border-slate-300 bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-3" />}
                  </div>
                  <span className="text-xs font-medium">{service}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Small Submit Button Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
          {onSuccess && (
            <button
              type="button"
              onClick={onSuccess}
              className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all cursor-pointer"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-slate-950 bg-cyan-500 hover:bg-cyan-400 rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Submitting...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit Configuration</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}