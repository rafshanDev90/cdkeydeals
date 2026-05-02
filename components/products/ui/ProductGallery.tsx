"use client";

/**
 * ProductGallery — Atomic Molecule
 * Handles the main product image with graceful fallback + thumbnail strip.
 * Respects rule: "If an image is missing, show a branded placeholder."
 */

import { useState } from "react";
import Image from "next/image";
import { Package, Heart, Share2 } from "lucide-react";
import { BadgeColor } from "@/types/product";
import logger from "@/lib/logger";

const badgeColors: Record<BadgeColor, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500 text-gray-900",
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  teal: "bg-teal-500",
  cyan: "bg-[#00d4aa] text-white",
};

interface ProductGalleryProps {
  title: string;
  image?: string;
  images?: string[];
  badge?: string;
  badgeColor?: BadgeColor;
  discountPercent?: number;
  isNew?: boolean;
  inWishlist: boolean;
  onWishlistToggle: () => void;
}

export default function ProductGallery({
  title,
  image,
  images = [],
  badge,
  badgeColor = "cyan",
  discountPercent = 0,
  isNew,
  inWishlist,
  onWishlistToggle,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(image ?? "");
  const [imageError, setImageError] = useState(false);

  const allImages = [image, ...images].filter((img): img is string => !!img);

  const handleImageError = () => {
    logger.warn("Product image failed to load — showing placeholder", {
      component: "ProductGallery",
      key: activeImage,
    });
    setImageError(true);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-700" style={{ aspectRatio: '1/1' }}>
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {badge && (
            <span className={`inline-block px-3 py-1 text-white text-sm font-bold rounded-full shadow-sm ${badgeColors[badgeColor] || badgeColors.cyan}`}>
              {badge}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full shadow-sm">
              -{discountPercent}% OFF
            </span>
          )}
          {isNew && (
            <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full shadow-sm">
              New
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            onClick={onWishlistToggle}
            aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              inWishlist ? "bg-red-500 text-white" : "bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-50 border border-gray-300 dark:border-zinc-600"
            }`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-zinc-50 flex items-center justify-center transition-all duration-300 shadow-md border border-gray-300 dark:border-zinc-600"
            aria-label="Share product"
            onClick={() => {
              if (typeof window !== "undefined") {
                navigator.share?.({ title, url: window.location.href });
              }
            }}
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Main image or fallback */}
        {activeImage && !imageError ? (
          <div className="relative w-full h-full">
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover"
              onError={handleImageError}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] flex items-center justify-center">
            <Package className="w-20 h-24 text-gray-400 dark:text-zinc-600" />
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {allImages.slice(0, 5).map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveImage(img);
                setImageError(false);
              }}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors bg-white dark:bg-[#1a1a1a] ${
                activeImage === img ? "border-blue-500 dark:border-primary" : "border-gray-300 dark:border-zinc-700 hover:border-gray-400 dark:hover:border-zinc-600"
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img src={img} alt={`${title} — view ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
