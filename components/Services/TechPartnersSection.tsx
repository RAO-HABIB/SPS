import Image from "next/image";
import { TechPartner } from "@/lib/service-data";

interface Props {
  heading: string;
  partners: TechPartner[];
}

export default function TechPartnersSection({ heading, partners }: Props) {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0a1b3d] mb-12">
          {heading}
        </h2>

        {/* Partners logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group relative w-32 h-16  hover:grayscale-0 transition-all duration-500 hover:scale-110"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}