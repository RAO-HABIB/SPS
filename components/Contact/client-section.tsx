import type { Metadata } from "next";
import Footer from "@/components/Footer/footer";
import Navbar from "@/components/Navbar/navbar";
import ContactClientSection from "@/components/Contact/client-section";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Software Productivity Strategists (SPS)",
  description:
    "Get in touch with SPS — Software Productivity Strategists. Reach us for technical support, sales, internship queries, or visit our headquarters in Rockville, MD.",
  keywords: [
    "SPS contact",
    "Software Productivity Strategists",
    "SPS support",
    "SPS internship",
    "Rockville MD IT company",
  ],
  openGraph: {
    title: "Contact Us | SPS",
    description:
      "Reach out to SPS for support, sales inquiries, or internship queries. Located at 2400 Research Blvd, Suite 115, Rockville, MD 20850.",
    url: "https://www.spsnet.com/contact-us",
    siteName: "SPS - Software Productivity Strategists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SPS",
    description:
      "Reach out to SPS for support, sales inquiries, or internship queries.",
  },
  alternates: {
    canonical: "https://www.spsnet.com/contact-us",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section
        aria-label="Contact Us Hero"
        className="relative flex min-h-62.5 items-center px-6"
      >
        <Image
          src="/Hero/hero8.png"
          alt="Contact Us"
          fill
          className="object-fit"
        />

        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-8 pt-10 pb-10">
          <div className="border-l-4 border-blue-500 pl-5">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-1 text-sm uppercase tracking-widest text-gray-400">
              Home &rsaquo; Contact Us
            </p>
          </div>

          <div className="hidden md:block shrink-0">
            <Image
              src="/contact/contact-us.gif"
              alt="Contact SPS illustration"
              width={150}
              height={150}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== Contact Section — Blue & White premium design ===== */}
      <main className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <ContactClientSection />
        </div>
      </main>

      {/* ===== Map & Directions Section ===== */}
      <section 
        aria-label="Our Location & Map" 
        className="bg-linear-to-br from-[#0A2A6B] via-[#0B1E4A] to-[#03122F] py-16"
      >
        {/* Decorative background glows */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
          aria-hidden="true"
        />

        {/* Dotted pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4FC3F7 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Visit Our Office
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Find Us On The Map
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-400 mx-auto mt-4 mb-4"></div>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Located in the heart of Rockville's technology corridor, 
              easily accessible from major highways and public transport
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Container */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.082452722005!2d-77.1875!3d39.087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d2f5c5a5b5a5%3A0x1234567890!2s2400%20Research%20Blvd%2C%20Rockville%2C%20MD%2020850!5e0!3m2!1sen!2sus!4v1697040000000!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SPS Headquarters Location"
                className="w-full"
              />
            </div>

            {/* Location Info Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
              {/* Address */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Address</h3>
                </div>
                <p className="text-blue-100 leading-relaxed pl-15">
                  2400 Research Blvd, Suite 115<br />
                  Rockville, MD 20850<br />
                  United States
                </p>
              </div>

              {/* Quick Directions */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Quick Routes</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-900/50 rounded-lg border border-blue-400/20">
                    <span className="text-cyan-400 font-bold mt-0.5 text-sm">I-270</span>
                    <p className="text-blue-100 text-sm">Exit 8 (Shady Grove), east to Research Blvd</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-900/50 rounded-lg border border-blue-400/20">
                    <span className="text-cyan-400 font-bold mt-0.5 text-sm">MD-355</span>
                    <p className="text-blue-100 text-sm">Turn onto Research Blvd, on the right</p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-blue-900/50 rounded-lg border border-blue-400/20">
                    <span className="text-cyan-400 font-bold mt-0.5 text-sm">Metro</span>
                    <p className="text-blue-100 text-sm">Red Line to Shady Grove Station</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href="https://maps.google.com/?q=2400+Research+Blvd+Suite+115+Rockville+MD+20850"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Get Directions
              </a>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Business Hours</h4>
              <p className="text-blue-200 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-blue-200 text-sm">Sat - Sun: Closed</p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Parking</h4>
              <p className="text-blue-200 text-sm">Free visitor parking</p>
              <p className="text-blue-200 text-sm">Accessible spots available</p>
            </div>

            <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-white font-semibold mb-2">Office Location</h4>
              <p className="text-blue-200 text-sm">First floor, Suite 115</p>
              <p className="text-blue-200 text-sm">Past the fitness center</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}