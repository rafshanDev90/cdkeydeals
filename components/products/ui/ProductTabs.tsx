"use client";

import { useState } from "react";
import { Check, ShieldCheck, Zap, RotateCcw, Headphones, Truck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { Review } from "@/types/product";

interface ProductTabsProps {
  description?: string;
  features?: string[];
  specifications?: Record<string, string>;
  reviews?: Review[];
}

export default function ProductTabs({
  description,
  features = [],
  specifications = {},
  reviews = [],
}: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="mt-12">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent flex-wrap overflow-x-auto">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 sm:px-6 py-3 whitespace-nowrap"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="features"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 sm:px-6 py-3 whitespace-nowrap"
          >
            Features
          </TabsTrigger>
          <TabsTrigger
            value="specifications"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 sm:px-6 py-3 whitespace-nowrap"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-4 sm:px-6 py-3 whitespace-nowrap"
          >
            Reviews {reviews.length > 0 && `(${reviews.length})`}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-6">
          <div className="prose max-w-none prose-gray dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {description || "No description available for this product."}
            </p>
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-6">
          {features.length > 0 ? (
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No features listed for this product.</p>
          )}
        </TabsContent>

        <TabsContent value="specifications" className="mt-6">
          {Object.keys(specifications).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium text-foreground">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No specifications available for this product.</p>
          )}
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          {reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review: Review) => (
                <div key={review.id} className="p-4 bg-card border rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center font-medium text-muted-foreground shrink-0">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{review.author}</p>
                        <div className="flex items-center gap-1">{renderRating(review.rating)}</div>
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <p className="text-sm text-muted-foreground" suppressHydrationWarning>
                        {formatDate(review.date)}
                      </p>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 mt-1">
                          <Check className="w-3 h-3 mr-1 inline" />
                          Verified Purchase
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">{review.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-2">No reviews yet</p>
              <p className="text-sm text-muted-foreground/70">Be the first to review this product!</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
