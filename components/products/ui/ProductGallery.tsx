"use client";

/**
 * ProductGallery — Atomic Molecule
 * Handles the main product image with graceful fallback + thumbnail strip.
 * Respects rule: "If an image is missing, show a branded placeholder."
 */

import { useState } from "react";
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
      <div className="relative bg-gradient-to-br from-muted to-muted/80 rounded-2xl p-8 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
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
              inWishlist ? "bg-red-500 text-white" : "bg-background hover:bg-muted text-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
          </button>
          <button
            className="w-10 h-10 rounded-full bg-background hover:bg-muted text-foreground flex items-center justify-center transition-all duration-300 shadow-md"
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
          <img
            src={activeImage}
            alt={title}
            className="max-w-full max-h-[400px] lg:max-h-[450px] object-contain"
            onError={handleImageError}
          />
        ) : (
          <div className="w-48 h-60 bg-gradient-to-br from-muted to-muted/60 rounded-lg shadow-xl flex items-center justify-center">
            <Package className="w-20 h-24 text-muted-foreground" />
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
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                activeImage === img ? "border-primary" : "border-transparent hover:border-muted-foreground/40"
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
