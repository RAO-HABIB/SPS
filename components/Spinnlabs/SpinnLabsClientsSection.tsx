import Image from "next/image";
import type { SpinnLabClientsSection } from "@/lib/spinnlabs-data";

interface Props {
  data: SpinnLabClientsSection;
}

export default function SpinnLabsClientsSection({ data }: Props) {
  return (
    <section
      aria-labelledby="spinnlabs-clients-heading"
      className="bg-gray-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="spinnlabs-clients-heading"
            className="text-balance text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            {data.heading}
          </h2>
          <p className="mt-3 text-pretty text-sm text-gray-600 sm:text-base">
            {data.subheading}
          </p>
        </div>

        <ul
          role="list"
          className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {data.clients.map((client) => (
            <li
              key={client.name}
              className="relative flex h-20 w-40 items-center justify-center rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200 transition hover:shadow-md"
            >
              <Image
                src="/customers/unlv.webp"
                alt="customer logo"
                width={200}
                height={200}
                className=" object-contain"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}