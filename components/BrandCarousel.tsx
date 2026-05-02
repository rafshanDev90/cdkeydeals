"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Brand {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate brands for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  // manual scroll buttons (optional future use)
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // 🔥 AUTO SCROLL (RIGHT → LEFT LOOP)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      console.log('❌ Container ref is null');
      return;
    }

    console.log('✅ Container found:', container);
    console.log('📏 scrollWidth:', container.scrollWidth, 'clientWidth:', container.clientWidth);

    let scrollSpeed = 0.5; // pixels per frame
    let animationId: number;
    let isScrolling = true;

    const scroll = () => {
      if (!container || !isScrolling) return;

      // Check if we have content to scroll
      if (container.scrollWidth <= container.clientWidth) {
        console.log('⚠️ Not enough content to scroll');
        return;
      }

      // When reaching halfway point, reset to start for seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        console.log('🔄 Reset to start');
      } else {
        container.scrollLeft += scrollSpeed;
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Wait for content to load and measurements to be available
    const timeoutId = setTimeout(() => {
      console.log('🚀 Starting scroll animation');
      console.log('📐 Final measurements - scrollWidth:', container.scrollWidth, 'clientWidth:', container.clientWidth);
      scroll();
    }, 500);

    return () => {
      isScrolling = false;
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [duplicatedBrands.length]); // Add dependency to re-run when brands change

  if (!brands || brands.length === 0) return null;

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">Shop by Brand</h2>
        <Link
          href="/categories"
          className="flex items-center gap-1 text-[#00d4aa] hover:text-[#00b894] font-medium text-sm transition-colors"
        >
          Shop All
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Brand Scroller */}
      <motion.div
        ref={scrollRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex gap-6 overflow-x-auto pb-10 scrollbar-hide flex-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedBrands.map((brand, index) => (
          <motion.div
            key={`${brand.id}-${index}`}
            variants={itemVariants}
            className="shrink-0"
          >
            <div className="block outline-none">
              {/* Brand Card */}
              <div
                className="relative w-36 h-28 sm:w-44 sm:h-32 bg-white dark:bg-[#242424]
              border border-gray-100 dark:border-zinc-800
              rounded-2xl flex items-center justify-center p-6
              shadow-none transition-none"
              >
                {brand.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Logo`}
                      fill
                      className="object-contain filter grayscale opacity-60
                               dark:brightness-200 dark:contrast-150"
                      sizes="(max-width: 640px) 144px, 176px"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="font-black text-gray-400 dark:text-gray-600 text-xs uppercase tracking-widest">
                      {brand.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}