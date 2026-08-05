import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import {
  getSpinnLabBySlug,
  getAllSpinnLabSlugs,
} from "@/lib/spinnlabs-data";
import SpinnLabsSubNav from "@/components/Spinnlabs/SpinnLabsSubNav";
import SpinnLabsHero from "@/components/Spinnlabs/SpinnLabsHero"; 
import SpinnLabsOutreachSection from "@/components/Spinnlabs/SpinnLabsOutreachSection";
import SpinnLabsTextImageBlock from "@/components/Spinnlabs/SpinnLabsTextImageBlock";
import SpinnLabsStatsBanner from "@/components/Spinnlabs/SpinnLabsStatsBanner";
import SpinnLabsTechHubBanner from "@/components/Spinnlabs/SpinnLabsTechHubBanner";
import SpinnLabsClientsSection from "@/components/Spinnlabs/SpinnLabsClientsSection";
import SpinnLabsExpertiseSection from "@/components/Spinnlabs/SpinnLabsExpertiseSection";
import SpinnLabsTechnologiesSection from "@/components/Spinnlabs/SpinnLabsTechnologiesSection";
import SpinnLabsJourneySection from "@/components/Spinnlabs/SpinnLabsJourneySection";
import Verticals from "@/components/Verticals/verticals";
import StartupsInteractiveWrapper from "@/components/Spinnlabs/SpinnLabsInteractiveContainer";
import AcademiaInteractiveWrapper from "@/components/Spinnlabs/AcdemiaInteractiveWrapper";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSpinnLabBySlug(slug);
  if (!page) return {};
  return {
    title: `${page.hero.title} | SpinnLabs`,
    description: page.hero.description.slice(0, 160),
    openGraph: {
      title: `${page.hero.title} | SpinnLabs`,
      description: page.hero.description.slice(0, 160),
      images: [{ url: page.hero.backgroundImage }],
    },
    alternates: {
      canonical: `/Spinnlabs/${page.slug}`,
    },
  };
}

export function generateStaticParams() {
  return getAllSpinnLabSlugs();
}

export default async function SpinnLabsDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getSpinnLabBySlug(slug);
  if (!page) notFound();

  const staticContent = (
    <>
      {page.journeySection && <SpinnLabsJourneySection data={page.journeySection} />}
      {page.slug === "startups" && <Verticals />}
      
      {page.technologiesSection && page.slug !== "academia" && (
        <SpinnLabsTechnologiesSection data={page.technologiesSection} />
      )}
      
       {page.outreachSection && page.slug !== "academia" && (
        <SpinnLabsOutreachSection data={page.outreachSection} />
      )}
      
      {page.textImageBlocks && page.textImageBlocks.length > 0 && (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl space-y-6 px-4 sm:space-y-8 sm:px-6 lg:px-8">
            {page.textImageBlocks.map((block, i) => (
              <SpinnLabsTextImageBlock key={block.id} block={block} index={i} />
            ))}
          </div>
        </section>
      )}

      {page.expertiseSection && <SpinnLabsExpertiseSection data={page.expertiseSection} />}
      {page.techHubBanner && <SpinnLabsTechHubBanner data={page.techHubBanner} />}
      
      {page.statsBanner && (
        <section className="bg-white pb-10 md:pt-20 pt-10 md:pb-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SpinnLabsStatsBanner data={page.statsBanner} />
          </div>
        </section>
      )}

      {page.clientsSection && <SpinnLabsClientsSection data={page.clientsSection} />}
    </>
  );

  return (
    <>
      <Navbar />
      <SpinnLabsSubNav />

      {page.slug === "startups" ? (
        <StartupsInteractiveWrapper page={page} staticContent={staticContent} />
      ) : page.slug === "academia" ? (
        <AcademiaInteractiveWrapper page={page} staticContent={staticContent} />
      ) : (
        <>
          <SpinnLabsHero data={page.hero} slug={page.slug} />
          {staticContent}
        </>
      )}

      <Footer />
    </>
  );
}