import Image from "next/image";
import Link from "next/link";
import { FeaturedProduct } from "@/lib/service-data";
import { ArrowRight, Package } from "lucide-react";

export default function FeaturedProductsSection({
  products,
}: {
  products: FeaturedProduct[];
}) {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#f8fafc] border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="border-l-4 border-[#0a1b3d] pl-4">
          <h2 className="text-xs font-bold text-[#1BA6C7] uppercase tracking-widest mb-1">
            Enterprise Solutions
          </h2>
          <p className="text-3xl font-black text-[#0a1b3d] tracking-tight">
            Our Featured Products
          </p>
        </div>

        {/* Modern 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <article
              key={idx}
              className="bg-white border-2 border-[#0a1b3d]/10 rounded-3xl p-6 shadow-[0_4px_20px_rgba(10,27,61,0.02)] hover:shadow-[0_15px_40px_rgba(10,27,61,0.08)] hover:border-[#1BA6C7]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Image Showcase Frame */}
                <div className="relative w-full aspect-video bg-[#f1f5f9] rounded-2xl p-4 border border-gray-200/60 overflow-hidden flex items-center justify-center shadow-inner">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <Package className="w-10 h-10 text-gray-400" />
                  )}
                </div>

                {/* Content Block */}
                <div className="space-y-2">
                  <h3 className="text-xl font-extrabold text-[#0a1b3d] group-hover:text-[#1BA6C7] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed min-h-[70px] line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action Trigger Link */}
              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 text-[#0a1b3d] font-bold text-sm group-hover:text-[#1BA6C7] transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}