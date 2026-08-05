import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import VerticalSubNav from "@/components/Verticals/VerticalSubNav";
import VerticalHero from "@/components/Verticals/VerticalHero";
import VerticalServicesTabs from "@/components/Verticals/VerticalServicesTabs";
import VerticalProductsSection from "@/components/Verticals/VerticalProductsSection";
import VerticalClientsSection from "@/components/Verticals/VerticalClientsSection";

import {
  getVerticalBySlug,
  getAllVerticalSlugs,
} from "@/lib/vertical-data";
import VerticalAlternatingSection from "@/components/Verticals/VerticalAlternationSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function VerticalDetailPage({ params }: Props) {
  const { slug } = await params;
  const vertical = getVerticalBySlug(slug);

  if (!vertical) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <VerticalSubNav activeCategorySlug={vertical.categorySlug} />

      <VerticalHero
    slug={vertical.slug} 
        category={vertical.category}
        title={vertical.heroTitle}
        description={vertical.heroDescription}
        image={vertical.heroImage}
        solutions={vertical.solutions}
      />

      {/* Alternating Section — optional */}
      {vertical.alternatingSection && (
        <VerticalAlternatingSection data={vertical.alternatingSection} />
      )}

      {/* 🆕 Services Tabs — now optional */}
      {vertical.serviceTabs && vertical.serviceTabs.length > 0 && (
        <VerticalServicesTabs
          heading={vertical.servicesHeading ?? "Our Services"}
          subheading={
            vertical.servicesSubheading ??
            "Explore services we provide across our core practices"
          }
          tabs={vertical.serviceTabs}
        />
      )}

      {/* Products Section — optional */}
      {vertical.productsSection && (
        <VerticalProductsSection
          heading={vertical.productsSection.heading}
          subheading={vertical.productsSection.subheading}
          tabs={vertical.productsSection.tabs}
        />
      )}

      {/* Clients Section — optional */}
      {vertical.clients && vertical.clients.length > 0 && (
        <VerticalClientsSection clients={vertical.clients} />
      )}

      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return getAllVerticalSlugs();
}