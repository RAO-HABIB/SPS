"use client";

import Image from "next/image";

const featureCards = [
  {
    gif: "/bms/bar.gif",
    alt: "Integrated system illustration",
    title: "How can BMS help your business?",
    description:
      "With a fully-integrated system, employees across departments can use the same reliable information to meet their day-to-day needs. The system brings the front office and back office together — a full enterprise management solution that helps you identify areas for improvement and make cost-effective decisions.",
  },
  {
    gif: "/bms/benefits.gif",
    alt: "BMS benefits illustration",
    title: "What are the benefits of BMS?",
    description:
      "BMS offers more than traditional ERP solutions. Our system is tailored to your business needs so you can streamline operations and collaborate effectively across departments. It provides essential real-time information about your company, highlighting areas for improvement — all from one platform.",
  },
  {
    gif: "/bms/content.gif",
    alt: "Content management illustration",
    title: "Integrated Content Management System",
    description:
      "It's business oriented. With BMS, companies can manage their products and services right in BMS and create website content that will be published with just one click. No more need for full-time technical resources to manage the website.",
  },
];

const businessAreas = [
  "Sales",
  "Accounting",
  "HR",
  "Product Management",
  "Services Management",
  "Business Forecast",
  "Business Statements",
  "Web Content Management",
  "Learning and Education",
  "IT",
  "Marketing",
];

export default function BMSClientSection() {
  return (
    <>
      <section
        aria-label="BMS Hero"
        className="relative min-h-80 bg-black px-6 pt-16 pb-14"
      >
           <Image
                  src="/Hero/hero8.png"
                  alt="Contact Us"
                  fill
                  className="object-fit"
                />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-500">
            Products &rsaquo; SPS
          </p>
          <h1 className="text-3xl font-bold text-white md:text-4xl">
            Business Management System
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-400">
            Get real-time insights into every aspect of your company's
            performance, optimize processes and streamline business with our
            Business Management System.
          </p>
          <a
            href="/contact-us"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-blue-500 bg-blue-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 hover:text-black"
          >
            Request Consultation
          </a>
        </div>
      </section>

      <main className="bg-white text-black">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-black">What BMS Offers</h2>
            <p className="mt-2 text-sm text-gray-500">
              A complete enterprise platform built for modern businesses
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                className="group relative flex flex-col items-center rounded-2xl bg-white p-6 pt-0 text-center shadow-[0_4px_24px_rgba(59,130,246,0.25)] ring-1 ring-black/5 transition hover:shadow-[0_4px_24px_rgba(59,130,246,0.25)] hover:ring-blue-400"
              >
                <div className="mx-auto -mt-8 mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-black/30 ring-4 ring-white">
                  <Image
                    src={card.gif}
                    alt={card.alt}
                    width={75}
                    height={75}
                    unoptimized
                    className="object-contain"
                    
                  />
                </div>

                <h3 className="mb-3 text-base font-bold text-black leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {card.description}
                </p>

                {/* <span className="mt-auto   inline-block h-0.5 w-4 rounded-full bg-blue-500 transition-all group-hover:w-16" /> */}
              </article>
            ))}
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-xl font-bold text-black">
                Business Management Areas
              </h2>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                {businessAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2 text-sm text-black"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-black/8 bg-gray-50 p-6 min-h-55">
              <Image
                src="/bms/benefits.gif"
                alt="BMS Benefits"
                width={20}
                height={20}
                unoptimized
                style={{ width: "auto", height: "auto" }}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="bg-black py-14 text-center">
          <p className="mx-auto max-w-2xl text-xl font-semibold text-white">
            20 years of building digital products and we are{" "}
            <span className="text-blue-500">just getting started!</span>
          </p>
        </div>
      </main>
    </>
  );
}