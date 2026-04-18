"use client";

import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  slug: string;
  image?: string;
  icon?: string; // Kept for backwards compatibility if needed
}

interface BrandCarouselProps {
  brands: Brand[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-transparent">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-extrabold text-foreground tracking-tight">Shop by Brand</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground rounded-full flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-foreground rounded-full flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Brands Grid */}
        <motion.div
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              className="shrink-0 snap-start flex flex-col items-center group"
            >
              <Link href={`/brand/${brand.slug}`} className="outline-none">
                {/* Image Container Card */}
                <div className="relative w-32 h-20 sm:w-40 sm:h-24 rounded-xl bg-white dark:bg-gray-800
                                border border-gray-100 dark:border-gray-700
                                flex items-center justify-center p-4
                                shadow-sm transition-all duration-300 
                                group-hover:scale-105 group-hover:shadow-lg group-hover:border-[#00d4aa]/30">
                  
                  {brand.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} Logo`}
                        fill
                        className="object-contain filter dark:brightness-200 dark:contrast-200 opacity-80 group-hover:opacity-100 transition-opacity"
                        sizes="(max-width: 640px) 128px, 160px"
                      />
                    </div>
                  ) : (
                    <span className="font-bold text-gray-400 dark:text-gray-500 text-center text-sm group-hover:text-[#00d4aa] transition-colors line-clamp-1">
                      {brand.name}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
