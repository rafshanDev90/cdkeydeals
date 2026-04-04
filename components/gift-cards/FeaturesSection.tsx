"use client";

import { features } from "@/data/giftCardData";
import Link from "next/link";
import { 
  RotateCcw, 
  Package, 
  Headphones, 
  Tag,
  ArrowRight
} from "lucide-react";

const iconMap = {
  RotateCcw,
  Package,
  Headphones,
  Tag,
};

export default function FeaturesSection() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
          
          return (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
                {IconComponent && (
                  <IconComponent className="w-6 h-6 text-indigo-600" />
                )}
              </div>
              
              {/* Feature Content */}
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {feature.description}
              </p>
              
              {/* Learn More Link */}
              <Link
                href={feature.link}
                className="inline-flex items-center gap-1 text-indigo-600 text-sm font-medium hover:text-indigo-700 transition-colors group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
