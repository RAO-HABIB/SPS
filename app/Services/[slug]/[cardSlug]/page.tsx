import CardDetailClient from "@/components/Services/CardDetailClient";
import { getCardDetail, getAllCardParams } from "@/lib/card-details";
import { notFound } from "next/navigation";



interface Props {
  params: Promise<{ slug: string; cardSlug: string }>;
}

export default async function CardDetailPage({ params }: Props) {
  const { slug, cardSlug } = await params;
  const detail = getCardDetail(slug, cardSlug);
  
  if (!detail) {
    notFound();
  }

  return <CardDetailClient detail={detail} />;
}

export function generateStaticParams() {
  return getAllCardParams();
}