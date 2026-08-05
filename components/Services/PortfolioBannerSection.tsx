import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
}

export default function PortfolioBannerSection({ title }: Props) {
  return (
    <section className="relative bg-[#0a1b3d] py-24 px-8 overflow-hidden">
      {/* Dotted radial background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/2 h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e91e63 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse at right, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at right, black 30%, transparent 70%)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1BA6C7 1.5px, transparent 1.5px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(ellipse at left, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at left, black 30%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Link
          href="#"
          className="inline-flex items-center gap-3 text-pink-400 hover:text-pink-300 font-bold text-lg tracking-widest uppercase transition-colors group"
        >
          <span>{title}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}