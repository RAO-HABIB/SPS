import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function WebinarHero({ title, breadcrumb }: Props) {
  return (
    <section
      aria-labelledby="webinar-hero-title"
      className="relative overflow-hidden bg-linear-to-br  px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <Image
      src="/Hero/Hero3.jpg"
      alt=""
      fill
      className="object-cover"
      />
     

      <div className="relative mx-auto max-w-7xl">
        <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
          <h1
            id="webinar-hero-title"
            className="mb-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </h1>

          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80 sm:text-base">
              {breadcrumb.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="uppercase tracking-wider hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="uppercase tracking-wider text-white"
                    >
                      {item.label}
                    </span>
                  )}
                  {idx < breadcrumb.length - 1 && (
                    <ChevronRight
                      aria-hidden="true"
                      className="h-4 w-4 text-white/60"
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}