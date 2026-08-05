import Image from "next/image";
import { Layers } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: Props) {
  return (
    <section className="relative py-30 px-6 md:px-12 lg:px-16 bg-[#0a1b3d] text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/Hero/Hero8.png"
          alt="Hero background"
          fill
          className="object-fit"
          priority
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-black text-white uppercase tracking-wider backdrop-blur-xs">
          <Layers className="w-3.5 h-3.5" />
          <span>Technical Deployment Path</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
          {title}
        </h1>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}