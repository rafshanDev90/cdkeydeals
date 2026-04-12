"use client";

import Image from "next/image";
import PriceDisplay from "@/components/ui/PriceDisplay";
import { useCurrency } from "@/context/CurrencyContext";

/**
 * Example Product Card Component with Currency Support
 * 
 * This is a TEMPLATE showing how to implement currency conversion
 * in any product card component. Copy this pattern to your other
 * product card components.
 * 
 * IMPORTANT: All prices should be stored in USD in your database.
 * The CurrencyContext will automatically convert to the selected currency.
 */

interface ExampleProduct {
  id: string | number;
  title: string;
  priceUSD: number;           // Base price in USD
  originalPriceUSD?: number;  // Original price in USD (for discounts)
  image: string;
  description?: string;
}

interface ExampleProductCardProps {
  product: ExampleProduct;
}

export default function ExampleProductCard({ product }: ExampleProductCardProps) {
  // Access currency context for additional formatting if needed
  const { selectedCurrency, formatPrice } = useCurrency();

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
          {product.title}
        </h3>

        {/* Description (optional) */}
        {product.description && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price - Using PriceDisplay Component */}
        <PriceDisplay
          price={product.priceUSD}
          originalPrice={product.originalPriceUSD}
          priceClassName="text-lg font-bold text-gray-900 dark:text-white"
          originalPriceClassName="text-sm text-gray-500 dark:text-gray-400 line-through"
          discountBadgeClassName="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded"
        />

        {/* Alternative: Manual Price Formatting */}
        {/*
        <div className="mt-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Current Currency: {selectedCurrency.code} {selectedCurrency.symbol}
          </p>
          <p className="text-lg font-bold">
            {formatPrice(product.priceUSD)}
          </p>
        </div>
        */}

        {/* Add to Cart Button */}
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/**
 * USAGE EXAMPLE:
 * 
 * // In your page or parent component:
 * 
 * const products = [
 *   {
 *     id: 1,
 *     title: "Windows 11 Pro License",
 *     priceUSD: 29.99,
 *     originalPriceUSD: 99.99,
 *     image: "/images/windows-11.jpg",
 *     description: "Genuine Windows 11 Pro digital license key"
 *   },
 *   {
 *     id: 2,
 *     title: "Microsoft Office 2024",
 *     priceUSD: 34.99,
 *     originalPriceUSD: 79.99,
 *     image: "/images/office-2024.jpg",
 *   }
 * ];
 * 
 * // Then in your JSX:
 * {products.map(product => (
 *   <ExampleProductCard key={product.id} product={product} />
 * ))}
 */
