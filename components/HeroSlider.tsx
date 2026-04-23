"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import ShopNowButton from "./ShopNowButton";

// =====================================================
// TYPES & INTERFACES
// =====================================================

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  cta?: string;
  productSlug: string;
  badge?: string;
  discount?: string;
  image: string;
  buttonVariant?: "primary" | "secondary" | "accent" | "dark" | "custom";
}

// =====================================================
// SLIDE DATA
// =====================================================

const defaultSlides: SlideData[] = [
  {
    id: 1,
    title: "Call of Duty 2",
    subtitle: "Experience the intense WWII combat in this classic first-person shooter. Relive historic battles with stunning graphics and immersive gameplay.",
    cta: "Shop Now",
    productSlug: "call-of-duty-2",
    badge: "Save Up to",
    discount: "20%",
    image: "/images/Call Of Duty 2.jpg",
    buttonVariant: "primary",
  },
  {
    id: 2,
    title: "Escape from Tarkov",
    subtitle: "Hardcore and realistic online first-person action RPG with MMO features. Survive in the war-torn city of Tarkov.",
    cta: "Shop Now",
    productSlug: "escape-from-tarkov-steam",
    badge: "Save Up to",
    discount: "15%",
    image: "/images/Escape from Tarkov – Steam.jpg",
    buttonVariant: "primary",
  },
  {
    id: 3,
    title: "Xbox Game Pass",
    subtitle: "Ready for Play on Xbox Game Pass! Get instant access to over 100 high-quality games on console, PC, and cloud.",
    cta: "Shop Now",
    productSlug: "xbox-game-pass-ultimate",
    badge: "Save Up to",
    discount: "25%",
    image: "/images/Ready for Play on Xbox Game Pass!.jpg",
    buttonVariant: "primary",
  },
];

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      if (diff > 0) {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / (1000 * 60)) % 60),
          s: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-white text-sm">
      <span>⏱ {timeLeft.d}d : {timeLeft.h}h : {timeLeft.m}m : {timeLeft.s}s</span>
    </div>
  );
}

import { Product } from "@/types/product";

export default function HeroSlider({ products = [] }: { products?: Product[] }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Map dynamic products if available, otherwise use defaults
  const slides: SlideData[] = products.length > 0 
    ? products.slice(0, 3).map((p, index) => ({
        id: p.id,
        title: p.title,
        subtitle: p.description?.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...', // strip html
        cta: "Shop Now",
        productSlug: p.slug || p.id.toString(),
        badge: p.discount ? "Save Up to" : undefined,
        discount: p.discount ? `${p.discount}%` : undefined,
        image: p.image || defaultSlides[index]?.image || defaultSlides[0].image,
        buttonVariant: "primary",
      }))
    : defaultSlides;

  // Navigation functions with useCallback for optimization
  const goToPrevious = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-slide functionality with hover pause
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const t = setInterval(() => {
      goToNext();
    }, 4000); // 4 seconds as requested

    return () => clearInterval(t);
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  const slide = slides[current];

  return (
    <section 
      className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-visible rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* 🔥 Background Image using Next.js Image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover transition-all duration-700 pointer-events-none"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

      {/* 🔴 Red Accent Strip */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-red-600 opacity-70" />

      {/* 🎯 Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-3 sm:space-y-4">

          <CountdownTimer />

          {slide.badge && (
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">{slide.badge}</span>
              <span className="text-yellow-400 text-3xl font-bold">
                {slide.discount}
              </span>
            </div>
          )}

          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-300">{slide.subtitle}</p>

          <ShopNowButton
            slug={slide.productSlug}
            variant={slide.buttonVariant || "primary"}
            className="group"
          >
            {slide.cta || "Shop Now"}
          </ShopNowButton>
        </div>
      </div>

      {/* 💡 Floating Discount Circle */}
      {slide.discount && (
        <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-yellow-400 text-black rounded-full w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center font-bold shadow-lg">
          <span className="text-[10px] sm:text-xs">{slide.badge}</span>
          <span className="text-lg sm:text-2xl">{slide.discount}</span>
        </div>
      )}

      {/* ⏯️ Play / Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-3 right-3 bg-white/20 hover:bg-white/40 p-2 rounded-full transition-colors z-20 pointer-events-auto"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      {/* ⬅️➡️ Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-[-20px] sm:left-[-24px] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 z-30 pointer-events-auto"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-[-20px] sm:right-[-24px] top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 sm:p-4 rounded-full transition-all duration-300 z-30 pointer-events-auto"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* 🔘 Dot Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 pointer-events-auto">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-2 rounded-full transition-all pointer-events-auto ${
              i === current ? "w-6 bg-yellow-400" : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}