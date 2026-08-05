import Image from "next/image";
import { VerticalClient } from "@/lib/vertical-data";

interface Props {
  clients: VerticalClient[];
  heading?: string;
  subheading?: string;
}

export default function VerticalClientsSection({
  clients,
  heading = "Customers we are proud to work with.",
  subheading = "Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.",
}: Props) {
  // ✅ Early return if no clients
  if (!clients || clients.length === 0) return null;

  return (
    <section
      aria-labelledby="clients-heading"
      className="bg-gray-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl text-center">
        {/* ===== Header ===== */}
        <header className="mb-10 md:mb-12">
          <h2
            id="clients-heading"
            className="mb-3 text-2xl font-bold text-[#0a1b3d] sm:text-3xl md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-600 sm:text-base">
            {subheading}
          </p>
        </header>

        {/* ===== Client Logos Grid ===== */}
        <ul
          role="list"
          aria-label="Our client organizations"
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10"
        >
          {clients.map((client, idx) => (
            <li
              key={`${client.name}-${idx}`}
              className="group flex items-center justify-center"
            >
              <div
                className="relative h-20 w-20 transition-transform duration-300 hover:scale-110 focus-within:scale-110 sm:h-24 sm:w-24 md:h-28 md:w-28"
                title={client.name}
              >
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                  className="object-contain"
                />
                {/* Screen reader accessible name */}
                <span className="sr-only">{client.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}