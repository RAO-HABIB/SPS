import { servicesData, getServiceBySlug } from "@/lib/service-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import ExecutiveSection from "@/components/Services/ExecutiveSection";
import FeaturedProductsSection from "@/components/Services/FeaturedProductSection";
import TechPartnersSection from "@/components/Services/TechPartnersSection";
import PortfolioBannerSection from "@/components/Services/PortfolioBannerSection";
import VideoSection from "@/components/Services/VideoSection";

import TrainingPageWrapper from "@/components/Services/Training";
import RoadmapSection from "@/components/Services/RoadmapSection";


interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  if (service.hasSubNav) {
    return (
      <>
        <Navbar />
        <TrainingPageWrapper service={service} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* ==================== SERVICES CARDS SECTION ==================== */}
      <section className="relative py-8 px-8 overflow-hidden bg-linear-to-b ">

        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <p className="text-white/70 tracking-[0.4em] text-sm font-semibold [writing-mode:vertical-rl] rotate-180">
            OUR SERVICES
          </p>
        </div>

         <Image
         src="/Hero/Hero8.png"
         alt="Hero-Background"
         fill
         className="object-cover"
         />

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#1BA6C7]/15 text-[#1BA6C7] rounded-full text-xs font-semibold tracking-widest uppercase mb-4 border border-[#1BA6C7]/30">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {service.sectionTitle}
            </h2>
            <div className="w-20 h-1 bg-[#1BA6C7] mx-auto mb-6 rounded-full"></div>
            <p className="text-white/70 max-w-3xl mx-auto text-base leading-relaxed">
              Safeguard your digital infrastructure with advanced solutions that
              provide real-time visibility, threat prevention, and continuous
              protection.
            </p>
          </div>

          {/* Cards Grid  */}
          <div className="flex flex-wrap justify-center gap-8">
            {service.cards.map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(27,166,199,0.4)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden border border-transparent hover:border-[#1BA6C7]/40 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)] max-w-md"
              >
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#1BA6C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Corner decoration */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#1BA6C7]/10 rotate-45 group-hover:bg-[#1BA6C7]/20 transition-colors duration-500"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-xl bg-linear-to-br from-[#1BA6C7] to-[#0e7a94] shadow-lg shadow-[#1BA6C7]/40 flex items-center justify-center mb-6 self-end group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <div className="relative w-8 h-8">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-[#0a1b3d] mb-4 leading-snug group-hover:text-[#1BA6C7] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="relative text-gray-600 text-sm leading-relaxed mb-8 line-clamp-4 flex-1">
                  {card.description}
                </p>

                <Link
                  href={
                    card.cardSlug
                      ? `/Services/${service.slug}/${card.cardSlug}`
                      : "#"
                  }
                  className="relative inline-flex items-center gap-2 text-[#1BA6C7] font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Explore Product →
                </Link>

                {/* Bottom  line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-linear-to-r from-transparent via-[#1BA6C7] to-transparent transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PRODUCTS SECTION ==================== */}
      {service.featuredProducts && service.featuredProducts.length > 0 && (
        <FeaturedProductsSection products={service.featuredProducts} />
      )}

      {/* ==================== EXECUTIVE SECTION ==================== */}
      {service.executive && <ExecutiveSection executive={service.executive} />}

      {/* ==================== TECH PARTNERS ==================== */}
      {service.techPartners && (
        <TechPartnersSection
          heading={service.techPartners.heading}
          partners={service.techPartners.partners}
        />
      )}

      {/* ==================== PORTFOLIO BANNER ==================== */}
      {service.portfolioBanner && (
        <PortfolioBannerSection title={service.portfolioBanner.title} />
      )}

      {/* ==================== AI ROADMAP ==================== */}
      {service.roadmap && (
        <RoadmapSection
          title={service.roadmap.title}
          steps={service.roadmap.steps}
        />
      )}

      {/* ==================== VIDEO SECTION ==================== */}
      {service.videoSection && <VideoSection video={service.videoSection} />}

      {/* ==================== CUSTOMERS SECTION ==================== */}
      <section className="bg-white py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 border-2 border-[#0a1b3d] rotate-45"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 border-2 border-[#0a1b3d] rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-4xl font-semibold mb-4 text-black">
            Customers we are proud to work with.
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our mission is to deliver compelling narratives, remarkable
            experiences, and outstanding results for our clients.
          </p>

          {/* Clients — always centered */}
          {service.clients && service.clients.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {service.clients.map((client, i) => (
                <div
                  key={i}
                  className="h-20 w-40 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#1BA6C7] transition-all hover:shadow-md group"
                >
                  <div className="relative w-16 h-12">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      priority={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-20 w-40 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  <span className="text-gray-400 text-sm">Client {i}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}