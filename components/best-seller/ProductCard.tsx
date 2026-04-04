"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Star, Package } from "lucide-react";

export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  category: string;
  badge?: string;
  badgeColor?: string;
  stock: number;
  stockLabel: string;
  image: string;
  rating?: number;
  soldCount?: number;
}

interface ProductCardProps {
  product: Product;
}

const badgeColors = {
  red: "bg-red-500",
  orange: "bg-orange-500", 
  green: "bg-green-500",
  blue: "bg-blue-500",
  purple: "bg-purple-500",
  yellow: "bg-yellow-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
  cyan: "bg-cyan-500",
  gray: "bg-gray-500"
};

const categoryColors = {
  "Office Keys": "bg-blue-100 text-blue-700 border-blue-200",
  "Software": "bg-green-100 text-green-700 border-green-200", 
  "Games": "bg-purple-100 text-purple-700 border-purple-200",
  "Gaming": "bg-purple-100 text-purple-700 border-purple-200",
  "Gift Cards": "bg-yellow-100 text-yellow-700 border-yellow-200",
  "Antivirus": "bg-red-100 text-red-700 border-red-200",
  "VPN": "bg-teal-100 text-teal-700 border-teal-200",
  "Adobe Software": "bg-orange-100 text-orange-700 border-orange-200",
  "Project & Visio": "bg-indigo-100 text-indigo-700 border-indigo-200"
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const currencySymbol = product.currency === "GBP" ? "£" : product.currency === "EUR" ? "€" : "$";
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100) : 0;
  const badgeColorClass = product.badgeColor ? badgeColors[product.badgeColor as keyof typeof badgeColors] : "bg-orange-500";
  const categoryColorClass = categoryColors[product.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <div
      className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {/* Main Badge */}
        {product.badge && (
          <div className={`${badgeColorClass} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
            {product.badge}
          </div>
        )}
        
        {/* Discount Badge */}
        {hasDiscount && (
          <div className="bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-lg">
            -{discountPercentage}%
          </div>
        )}
      </div>

      {/* Quick View Button */}
      <button
        className={`absolute top-3 right-3 z-10 w-10 h-10 bg-white/95 hover:bg-gray-900 text-gray-700 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        aria-label="Quick view"
      >
        <Eye className="w-4 h-4" />
      </button>

      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          {/* Image or Placeholder */}
          {!imageError && product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`} />
          
          {/* Quick View Button on Hover */}
          <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg">
              <Eye className="w-4 h-4" />
              Quick View
            </button>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category Tag */}
        <div className="mb-3">
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColorClass}`}>
            {product.category}
          </span>
        </div>

        {/* Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 min-h-[40px]">
            {product.title}
          </h3>
        </Link>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.rating})</span>
            {product.soldCount && (
              <span className="text-xs text-gray-500">({product.soldCount.toLocaleString()} sold)</span>
            )}
          </div>
        )}

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4">
          {hasDiscount && (
            <span className="text-gray-400 line-through text-sm">
              {currencySymbol}{product.originalPrice!.toFixed(2)}
            </span>
          )}
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-gray-900">
              {currencySymbol}{product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${
            product.stock > 10 ? 'bg-green-500' : product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
          }`} />
          <span className={`text-xs font-medium ${
            product.stock > 10 ? 'text-green-700' : product.stock > 0 ? 'text-yellow-700' : 'text-red-700'
          }`}>
            {product.stockLabel}
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
          
          <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
