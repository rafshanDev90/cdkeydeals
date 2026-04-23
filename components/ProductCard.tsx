"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Gamepad2 } from "lucide-react";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { useCurrency } from "@/context/CurrencyContext";

interface ProductCardProps {
  id: number;
  slug?: string;
  title: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  badge?: string;
  badgeColor?: string;
  discount?: number;
  image?: string;
  images?: string[];
  stock?: number;
  stockLabel?: string;
}

const badgeColors: Record<string, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500 text-[#1a1a1a]",
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  pink: "bg-pink-500",
  teal: "bg-teal-500",
  cyan: "bg-[#00d4aa] text-white",
};

export default function ProductCard({
  id,
  slug,
  title,
  price,
  originalPrice,
  currency = "GBP",
  badge,
  badgeColor = "cyan",
  discount,
  image,
  images,
  stock,
  stockLabel,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { formatPriceWithOriginal } = useCurrency();

  // Determine images
  // Normal image: current 'image' prop or the first element of 'images' array
  const defaultImage = image || (images && images.length > 0 ? images[0] : '');
  
  // Hover image: the second element of 'images' array if exists, otherwise same as default
  const hoverImage = images && images.length > 1 ? images[1] : defaultImage;

  const productIdentifier = slug || id.toString();
  const isLowStock = stock !== undefined && stock <= 5 && stock > 0;
  const isOutOfStock = stock === 0;

  const basePriceUSD = price;
  const baseOriginalPriceUSD = originalPrice;

  return (
    <div
      className="group relative bg-transparent dark:bg-transparent rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {(badge || discount) && (
        <div className="absolute top-3 left-3 z-10">
          {discount ? (
            <span className="inline-block px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
              -{discount}%
            </span>
          ) : badge ? (
            <span
              className={`inline-block px-2 py-1 text-white text-xs font-bold rounded ${
                badgeColors[badgeColor] || "bg-[#00d4aa] text-white"
              }`}
            >
              {badge}
            </span>
          ) : null}
        </div>
      )}

      {/* Quick View Button */}
      <button
        className={`absolute top-3 right-3 z-20 w-8 h-8 bg-[#1a1a1a]/60 hover:bg-[#00d4aa] text-white hover:text-white rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        aria-label="Quick view"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Image Container */}
      <Link href={`/product/${productIdentifier}`} className="block">
        <div className="aspect-[3/3] bg-muted/50 dark:bg-gray-700 relative overflow-hidden">
          
          {!imageError && defaultImage ? (
            <>
              {/* Normal Image (Always there, fades out on hover if hoverImage exists) */}
              <Image
                src={defaultImage}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`object-cover transition-all duration-700 ease-in-out ${
                  isHovered && hoverImage !== defaultImage ? "opacity-0 scale-105" : "opacity-100 scale-100"
                }`}
                onError={() => setImageError(true)}
              />

              {/* Hover Image (Hidden by default, fades in on hover) */}
              {hoverImage && hoverImage !== defaultImage && (
                <Image
                  src={hoverImage}
                  alt={`${title} - alternative`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-all duration-700 ease-in-out absolute inset-0 ${
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 bg-muted dark:bg-gray-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-10 h-10 text-muted-foreground dark:text-gray-400" />
              </div>
            </div>
          )}
          
          {/* Subtle Hover Overlay */}
          <div
            className={`absolute inset-0 bg-black/5 transition-opacity duration-300 pointer-events-none ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/product/${productIdentifier}`}>
          <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-[40px] hover:text-[#00d4aa] transition-colors">
            {title}
          </h3>
        </Link>

        <PriceDisplay
          price={basePriceUSD}
          originalPrice={baseOriginalPriceUSD}
          priceClassName="text-lg font-bold text-[#00d4aa]"
          originalPriceClassName="text-sm text-muted-foreground dark:text-gray-500 line-through"
          showDiscount={false}
          className="mt-3 flex items-center gap-2"
        />

        {stockLabel && (
          <div className="mt-2">
            <span
              className={`text-xs ${
                isLowStock
                  ? "text-orange-500"
                  : isOutOfStock
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {stockLabel}
            </span>
          </div>
        )}

        <button
          className={`mt-3 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg font-medium text-sm transition-colors ${
            isOutOfStock
              ? "bg-muted dark:bg-gray-700 text-muted-foreground dark:text-gray-500 cursor-not-allowed"
              : "bg-muted dark:bg-gray-700 hover:bg-[#00d4aa] text-foreground hover:text-white"
          }`}
          disabled={isOutOfStock}
        >
          <ShoppingCart className="w-4 h-4" />
          {isOutOfStock ? "Sold Out" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}