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

      <Footer />
    </>
  );
}