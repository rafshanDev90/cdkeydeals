"use client";

import { Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductMetaProps {
  title: string;
  category?: string;
  platform?: string;
  rating?: number;
  reviewCount?: number;
  soldCount?: number;
}

export default function ProductMeta({
  title,
  category,
  platform,
  rating,
  reviewCount,
  soldCount,
}: ProductMetaProps) {
  const renderRating = (ratingValue: number) => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-muted-foreground/30" />);
      }
    }
    return stars;
  };

  return (
    <div className="space-y-4">
      {/* Platform & Category */}
      <div className="flex items-center gap-3 flex-wrap">
        {platform && (
          <Badge variant="secondary" className="text-blue-600 bg-blue-50">
            {platform}
          </Badge>
        )}
        {category && (
          <Badge variant="outline" className="text-gray-600">
            {category}
          </Badge>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-zinc-50 leading-tight">
        {title}
      </h1>

      {/* Rating & Sold */}
      <div className="flex items-center gap-4 flex-wrap">
        {rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center">{renderRating(rating)}</div>
            <span className="font-medium text-gray-700 dark:text-zinc-50">{rating.toFixed(1)}</span>
            {reviewCount && (
              <span className="text-sm text-gray-500 dark:text-zinc-400">
                ({reviewCount.toLocaleString()} reviews)
              </span>
            )}
          </div>
        )}
        {soldCount && (
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-zinc-400">
            <Zap className="w-4 h-4 text-orange-500" />
            <span>{soldCount.toLocaleString()} sold</span>
          </div>
        )}
      </div>
    </div>
  );
}
