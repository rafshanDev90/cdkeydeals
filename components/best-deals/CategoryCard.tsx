"use client";

import { useState } from "react";
import Link from "next/link";

interface CategoryCardProps {
  icon: string;
  title: string;
  href?: string;
}

export default function CategoryCard({ icon, title, href = "#" }: CategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <div
        className="flex flex-col items-center justify-center p-4 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Circular Icon Container */}
        <div
          className={`
            w-16 h-16 md:w-20 md:h-20 rounded-full 
            flex items-center justify-center 
            bg-gradient-to-br from-gray-50 to-gray-100 
            shadow-sm 
            transition-all duration-300 ease-out
            group-hover:shadow-lg
            group-hover:scale-105
            ${isHovered ? 'shadow-lg scale-105' : ''}
          `}
        >
          <span className="text-2xl md:text-3xl">{icon}</span>
        </div>
        
        {/* Category Title */}
        <span className="mt-3 text-xs md:text-sm text-center text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
          {title}
        </span>
      </div>
    </Link>
  );
}
