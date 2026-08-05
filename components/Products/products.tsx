"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify-icon/react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { PRODUCTS, PRODUCTS_INTRO, type Product } from "@/lib/products";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Products() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  // SEO: Structured Data (JSON-LD) for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${PRODUCTS_INTRO.title} ${PRODUCTS_INTRO.highlight}`,
    "description": PRODUCTS_INTRO.description,
    "itemListElement": PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "url": product.href,
      },
    })),
  };

  return (
    <section
      className="sps-products relative w-full overflow-hidden bg-[#03122F] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      aria-labelledby="products-heading"
    >
      {/* Dynamic SEO JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4FC3F7 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft Ambient Light Effects */}
      <div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16">
          
          {/* ============ LEFT: Header & Products Carousel ============ */}
          <div className="order-2 lg:order-1">
            <header>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-300">
                <Icon icon="lucide:shield-check" width={13} aria-hidden="true" />
                {PRODUCTS_INTRO.eyebrow.toUpperCase()}
              </span>

              <h2
                id="products-heading"
                className="mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
              >
                {PRODUCTS_INTRO.title}{" "}
                <span className="text-cyan-300">{PRODUCTS_INTRO.highlight}</span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                {PRODUCTS_INTRO.description}
              </p>
            </header>

            {/* Slider Region */}
            <div 
              className="mt-8 sm:mt-10"
              role="region" 
              aria-roledescription="carousel" 
              aria-label="Products Showcase"
            >
              <Swiper
                modules={[Autoplay, Pagination, Navigation, A11y, Keyboard]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                className="products-swiper"
                spaceBetween={16}
                slidesPerView={1}
                speed={600}
                loop={PRODUCTS.length > 2}
                keyboard={{ enabled: true }}
                autoplay={
                  prefersReducedMotion || PRODUCTS.length <= 1
                    ? false
                    : {
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                }
                pagination={{ clickable: true }}
                a11y={{
                  enabled: true,
                  prevSlideMessage: "Previous product slide",
                  nextSlideMessage: "Next product slide",
                }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                }}
              >
                {PRODUCTS.map((product, index) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} index={index} total={PRODUCTS.length} />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center gap-3 sm:mt-8">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={!PRODUCTS.length || (isBeginning && !(PRODUCTS.length > 2))}
                  aria-label="Previous product"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03122F] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Icon icon="lucide:arrow-left" width={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!PRODUCTS.length || (isEnd && !(PRODUCTS.length > 2))}
                  aria-label="Next product"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03122F] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Icon icon="lucide:arrow-right" width={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* ============ RIGHT: Fully Responsive Featured Image & Stat Badge ============ */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[290px] sm:max-w-[380px] lg:max-w-[440px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-white/10 sm:h-[480px] sm:aspect-auto lg:h-[560px]">
                <Image
                  src={PRODUCTS_INTRO.image}
                  alt={`${PRODUCTS_INTRO.title} — SPS Products Feature`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 290px, (max-width: 1024px) 380px, 440px"
                  quality={85}
                  priority
                />
              </div>
              <StatBadge prefersReducedMotion={prefersReducedMotion} />
            </div>
          </div>

        </div>
      </div>

      {/* Styled Swiper Custom Controls */}
      <style jsx global>{`
        .sps-products .products-swiper {
          padding-bottom: 42px;
        }

        .sps-products .products-swiper .swiper-slide {
          height: auto;
          display: flex;
        }

        .sps-products .products-swiper .swiper-slide > article {
          width: 100%;
        }

        .sps-products .swiper-pagination {
          bottom: 0 !important;
          text-align: left;
          padding-left: 2px;
        }

        .sps-products .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .sps-products .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 999px;
          background: #22d3ee;
        }

        .sps-products .swiper-pagination-bullet:focus-visible {
          outline: 2px solid #22d3ee;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}

/* ====================== Stat Badge (Mobile Responsive) ====================== */
function StatBadge({
  prefersReducedMotion,
}: {
  prefersReducedMotion: boolean;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const target = PRODUCTS_INTRO.stat.value;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let rafId: number;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, target, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="absolute -bottom-4 left-2 rounded-2xl bg-cyan-400 px-4 py-3 text-center shadow-2xl ring-4 ring-[#03122F] sm:-bottom-5 sm:-left-5 sm:px-5 sm:py-4 lg:-left-8"
      role="status"
      aria-live="polite"
      aria-label={`${target}${PRODUCTS_INTRO.stat.suffix} ${PRODUCTS_INTRO.stat.label}`}
    >
      <div className="text-2xl font-extrabold text-[#03122F] sm:text-3xl">
        {count}
        {PRODUCTS_INTRO.stat.suffix}
      </div>
      <div className="mt-0.5 text-[10px] font-bold leading-tight uppercase tracking-wider text-[#03122F]/90 sm:text-[11px]">
        {PRODUCTS_INTRO.stat.label.split(" ").map((word, i) => (
          <div key={i}>{word}</div>
        ))}
      </div>
    </div>
  );
}

/* ====================== Accessible Product Card ====================== */
function ProductCard({
  product,
  index,
  total,
}: {
  product: Product;
  index: number;
  total: number;
}) {
  return (
    <article 
      className="h-full w-full"
      aria-roledescription="slide"
      aria-label={`Slide ${index + 1} of ${total}: ${product.name}`}
    >
      <Link
        href={product.href}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03122F] sm:p-8"
        aria-label={`Explore details for ${product.name}`}
      >
        <div>
          {/* Hexagon Gradient Icon Wrapper */}
          <div className="mb-5 flex items-center justify-between sm:mb-6">
            <div
              className={`grid h-12 w-12 place-items-center bg-gradient-to-br ${product.accentColor} shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14`}
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              aria-hidden="true"
            >
              <Icon icon={product.icon} width={22} className="text-white sm:w-6" />
            </div>
          </div>

          <h3 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-xl">
            {product.name}
          </h3>

          <p className="mt-2.5 max-w-md text-xs leading-relaxed text-white/75 sm:mt-3 sm:text-sm">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-cyan-300 sm:mt-6 sm:text-sm">
          <span>Learn more</span>
          <Icon
            icon="lucide:arrow-right"
            width={16}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>
      </Link>
    </article>
  );
}

/* ====================== Reduced Motion Hook ====================== */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}