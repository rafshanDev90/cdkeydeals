"use client";

import Link from "next/link";

interface Props {
  id: number;
  title: string;
  category: string;
  price: number;
  currency?: string;
  image?: string;
  stockLabel?: string;
  badge?: string;
}

export default function MostPopularProductCard({
  id,
  title,
  category,
  price,
  currency = "Tk",
  image,
  stockLabel,
  badge
}: Props) {
  return (
    <div className="group flex flex-col bg-white transition-all duration-300">
      {/* Product Image Container */}
      <Link href={`/product/${id}`} className="relative block aspect-[4/5] overflow-hidden rounded-xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
        {/* Placeholder for your actual images from screenshot */}
        <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center p-0">
           {/* এখানে <img src={image} /> ব্যবহার করবেন */}
           <div className="text-gray-300">Product Image</div> 
        </div>

        {/* Promo Badge like 'Spring Promo' */}
        {badge && (
          <div className="absolute top-4 right-0 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-l-md shadow-lg">
            {badge}
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="mt-4 flex flex-col space-y-1">
        <span className="text-xs text-gray-500 font-medium">{category}</span>
        
        <Link href={`/product/${id}`}>
          <h3 className="text-[15px] font-bold text-gray-900 leading-snug hover:text-blue-600 line-clamp-2 min-h-[40px]">
            {title}
          </h3>
        </Link>

        <div className="flex flex-col pt-1">
          <span className="text-lg font-extrabold text-gray-900">
            {currency} {price.toLocaleString()}.00 BDT
          </span>
        </div>

        {/* Stock Status Indicator */}
        {stockLabel && (
          <div className="flex items-center gap-1.5 mt-2">
            <span className={`w-2 h-2 rounded-full ${stockLabel.includes('Last') ? 'bg-red-500' : 'bg-green-500'}`}></span>
            <span className={`text-xs font-semibold ${stockLabel.includes('Last') ? 'text-red-600' : 'text-green-600'}`}>
              {stockLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}