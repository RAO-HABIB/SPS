"use client";

import { useState } from "react";
import { BsFillBuildingFill } from "react-icons/bs";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiArrowRight,
  FiNavigation,
} from "react-icons/fi";

const contactCards = [
  {
    icon: <FiPhone size={20} />,
    title: "Call Us",
    lines: ["+1 301-337-2290"],
  },
  {
    icon: <FiMail size={20} />,
    title: "General Support",
    lines: ["support@spsnet.com"],
  },
  {
    icon: <FiMail size={20} />,
    title: "Internship Queries",
    lines: ["internship@spsnet.com", "internqueries@spsnet.com"],
  },
  {
    icon: <FiMapPin size={20} />,
    title: "Headquarters",
    lines: ["2400 Research Blvd, Suite 115", "Rockville, MD 20850 USA"],
  },
];

const directions = [
  {
    heading: "Going North on 270:",
    text: "Take 270 North to Exit 8 (Shady Grove Exit). Follow exit around to stop light and proceed left. Going over bridge stay to the Left and go to the 4th light (Key West Ave). Take a Left and make your first left. Building 2400 will be straight ahead of you as you enter the parking lot. Park in any of the unassigned parking spaces. SPS is on the first floor. Use the hallway furthest to the right of the café. Suite 115 is all the way at the end of the hallway past the fitness center.",
  },
  {
    heading: "Going South on 270:",
    text: "Take 270 South to the Shady Grove Exit 8. Follow exit to the light and take a right onto Shady Grove. Go to the 3rd light (Key West Ave). Take a left and make your first left. Building 2400 will be straight ahead of you as you enter the parking lot. Park in any of the unassigned parking spaces. SPS is on the first floor. Use the hallway furthest to the right of the café. Suite 115 is all the way at the end of the hallway past the fitness center.",
  },
];

export default function ContactClientSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* ======================= HERO CONTACT CARD ======================= */}
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0A2A6B] via-[#0B1E4A] to-[#03122F] shadow-2xl">
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

        <div className="relative grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          {/* ============ LEFT — White Form Card ============ */}
          <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-8">
            <h2 className="text-2xl font-bold text-[#0A2A6B]">Get in touch</h2>
            <p className="mt-2 text-sm text-gray-600">
              Just fill out the form and our team will be in touch with you
              shortly to help with your needs!
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <FiUser
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-label="Your name"
                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="relative">
                  <FiMail
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    autoComplete="email"
                    aria-label="Email address"
                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Company + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative">
                  <BsFillBuildingFill
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    autoComplete="organization"
                    aria-label="Company name"
                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div className="relative">
                  <FiPhone
                    size={14}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    autoComplete="tel"
                    aria-label="Phone number"
                    className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <FiMessageSquare
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  aria-label="Subject"
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Message"
                  aria-label="Message"
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                aria-label="Send contact message"
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-500 hover:to-cyan-400 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
              >
                {sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <FiSend size={15} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ============ RIGHT — Info Section ============ */}
          <div className="flex flex-col justify-center text-white">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              We Are Here To Answer All Your Questions
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              Let&apos;s build{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                smarter solutions
              </span>{" "}
              together
            </h2>

            {/* Description */}
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Reach out to SPS for technical support, sales inquiries,
              partnership opportunities, or internship queries. Our team of
              experts is ready to help you accelerate your digital journey.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:3013372290"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-500 hover:to-cyan-400"
              >
                Get In Touch <FiArrowRight size={15} />
              </a>
              <a
                href="#directions"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400 hover:bg-white/10"
              >
                Learn More <FiArrowRight size={15} />
              </a>
            </div>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-white/15" />

            {/* Contact info blocks */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-400 backdrop-blur-md">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    Feel Free to get in Touch
                  </p>
                  <a
                    href="tel:3013372290"
                    className="text-lg font-semibold text-white transition hover:text-cyan-300"
                  >
                    +1 301-337-2290
                  </a>
                </div>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-cyan-400 backdrop-blur-md">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">
                    How can we Help you
                  </p>
                  <a
                    href="mailto:support@spsnet.com"
                    className="text-lg font-semibold text-white transition hover:text-cyan-300"
                  >
                    support@spsnet.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================= CONTACT CARDS GRID ======================= */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-600">
            Reach Us Directly
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0A2A6B]">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-200 transition group-hover:scale-110">
                {card.icon}
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#0A2A6B]">
                  {card.title}
                </p>
                {card.lines.map((line) => (
                  <p key={line} className="text-sm text-gray-700">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Would you like to learn more or need to schedule an appointment?{" "}
          <a
            href="#"
            className="font-semibold text-blue-600 underline underline-offset-2 hover:text-blue-500"
          >
            Click here
          </a>
        </p>
      </div>

      {/* ======================= HEADQUARTERS + DIRECTIONS ======================= */}
      <div id="directions" className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Headquarters Card */}
        <div className="rounded-3xl border border-gray-100 bg-linear-to-br from-blue-50 to-white p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">
              <FiMapPin size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2A6B]">
              Corporate Headquarters
            </h2>
          </div>

          <p className="font-semibold text-gray-900">
            Software Productivity Strategists, Inc.
          </p>

          <address className="mt-3 space-y-1 text-sm text-gray-700 not-italic">
            <p>2400 Research Blvd</p>
            <p>Suite 115</p>
            <p>Rockville, MD 20850</p>

            <div className="mt-4 space-y-2">
              <p>
                <span className="font-semibold text-gray-900">Phone:</span>{" "}
                <a
                  href="tel:3013372290"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  301-337-2290
                </a>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Email:</span>{" "}
                <a
                  href="mailto:support@spsnet.com"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  support@spsnet.com
                </a>
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-gray-900">
                  For internship inquiries:
                </span>
                <br />
                <a
                  href="mailto:internship@spsnet.com"
                  className="text-blue-600 hover:text-blue-500"
                >
                  internship@spsnet.com
                </a>{" "}
                or{" "}
                <a
                  href="mailto:internqueries@spsnet.com"
                  className="text-blue-600 hover:text-blue-500"
                >
                  internqueries@spsnet.com
                </a>
              </p>
            </div>
          </address>
        </div>

        {/* Directions Card */}
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200">
              <FiNavigation size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[#0A2A6B]">Directions</h2>
          </div>

          <div className="flex flex-col gap-5">
            {directions.map((dir) => (
              <div
                key={dir.heading}
                className="rounded-xl border-l-4 border-blue-500 bg-blue-50/50 p-4"
              >
                <p className="mb-2 text-sm font-bold text-[#0A2A6B]">
                  {dir.heading}
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  {dir.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
