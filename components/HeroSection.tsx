"use client";

import { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

// =====================================================
// TYPES & INTERFACES
// =====================================================

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  badge?: string;
  discount?: string;
  image: string;
  imageAlt: string;
}

// =====================================================
// SLIDE DATA - Using encoded URLs for images with spaces
// =====================================================

const slides: SlideData[] = [
  {
    id: 1,
    title: "Call of Duty: Modern Warfare II",
    subtitle: "Experience the ultimate blockbuster action. Get instant delivery on all platforms.",
    cta: "Shop Now",
    href: "/collections",
    badge: "New Release",
    discount: "30% OFF",
    image: "/images/Call Of Duty 2.jpg",
    imageAlt: "Call of Duty Modern Warfare II - Action-packed gaming experience",
  },
  {
    id: 2,
    title: "Escape from Tarkov",
    subtitle: "Hardcore tactical shooter with intense PvPvE gameplay. Steam key instant delivery.",
    cta: "Get It Now",
    href: "/product/escape-from-tarkov-steam",
    badge: "Best Seller",
    image: "/images/Escape from Tarkov – Steam.jpg",
    imageAlt: "Escape from Tarkov Steam Key - Tactical shooter game",
  },
  {
    id: 3,
    title: "Xbox Game Pass Ultimate",
    subtitle: "Ready for play! Access 100+ games, online multiplayer & exclusive member deals.",
    cta: "Subscribe Now",
    href: "/product/xbox-game-pass-ultimate",
    badge: "Limited Offer",
    discount: "Save 40%",
    image: "/images/Ready for Play on Xbox Game Pass!.jpg",
    imageAlt: "Xbox Game Pass Ultimate - Premium gaming subscription service",
  },
];

// =====================================================
// ANIMATION VARIANTS
// =====================================================

const fadeInUp = {
  initial: { opacity: 0, transform: "translateY(30px)" },
  animate: { opacity: 1, transform: "translateY(0)" },
  exit: { opacity: 0, transform: "translateY(-20px)" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// =====================================================
// HERO SECTION COMPONENT
// =====================================================

export default function HeroSection() {
  // Embla Carousel setup with Autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 25 },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true, // Pause on hover
      }),
    ]
  );

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [count, setCount] = useState(0);

  // Get slide count
  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    setCurrent(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setCurrent(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  return (
    <section
      className="relative w-full h-[calc(42vh-15px)] sm:h-[calc(45vh-15px)] md:h-[calc(48vh-15px)] lg:h-[calc(51vh-15px)] xl:h-[calc(54vh-15px)] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Featured Products Carousel"
    >
      {/* Embla Carousel Container */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              {/* Background Image with Next.js Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  className={cn(
                    "object-cover transition-transform duration-[6000ms] ease-out",
                    index === current && "scale-105"
                  )}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARBAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEEAgIDAAAAAAAAAAAAAQIDAAQRIQUSBjFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8A0bjvJbSySSSTEnkXYq7Fj7VKM2SCSTJJJIkXY//9k="
                />
              </div>

              {/* Gradient Overlay - Dark for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative h-full flex items-center px-4 sm:px-8 lg:px-16">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  {/* Badge */}
                  {slide.badge && (
                    <div
                      className={cn(
                        "inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs sm:text-sm font-semibold transition-all duration-700",
                        index === current
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{ animationDelay: "100ms" }}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {slide.badge}
                    </div>
                  )}

                  {/* Discount Badge */}
                  {slide.discount && (
                    <div
                      className={cn(
                        "inline-block px-4 py-2 bg-yellow-400 text-black rounded-lg text-sm sm:text-base font-bold transition-all duration-700",
                        index === current
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      )}
                      style={{ animationDelay: "200ms" }}
                    >
                      {slide.discount}
                    </div>
                  )}

                  {/* Title */}
                  <h1
                    className={cn(
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight transition-all duration-700",
                      index === current
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ animationDelay: "300ms" }}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className={cn(
                      "text-sm sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed transition-all duration-700",
                      index === current
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ animationDelay: "400ms" }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div
                    className={cn(
                      "pt-2 transition-all duration-700",
                      index === current
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                    style={{ animationDelay: "500ms" }}
                  >
                    <Link
                      href={slide.href}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-red-500/25"
                    >
                      {slide.cta}
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className={cn(
          "absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        )}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={scrollNext}
        className={cn(
          "absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        )}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === current
                ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-white"
                : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : "false"}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-300"
          style={{ width: `${((current + 1) / count) * 100}%` }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}
