"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Product } from "@/types/product";
import { useState } from "react";

interface CategoryPageClientProps {
  categoryName: string;
  slug: string;
  products: Product[];
}

type SortOption = "default" | "price-asc" | "price-desc" | "name-asc";

export default function CategoryPageClient({ categoryName, slug, products }: CategoryPageClientProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-xs font-medium text-muted-foreground mb-6 space-x-2">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/collections" className="hover:text-foreground transition-colors">Categories</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-bold">{categoryName}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/collections"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            All Categories
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{categoryName}</h1>
              <p className="text-muted-foreground mt-1">
                {products.length} product{products.length !== 1 ? "s" : ""} available
              </p>
            </div>

            {/* Sort selector */}
            {products.length > 0 && (
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-card border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="default">Sort: Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">No products in this category</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              We don&apos;t have any {categoryName} products right now. Browse other categories!
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {/* Products Grid */}
        {sortedProducts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sortedProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug || product.id}`}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="relative h-36 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center p-4 overflow-hidden">
                  {product.discount && product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      -{product.discount}%
                    </span>
                  )}
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-10 h-12 bg-muted rounded animate-pulse" />
                  )}
                </div>
                <div className="p-3">
                  <h4 className="text-xs font-bold text-foreground line-clamp-2 min-h-[2rem] group-hover:text-primary transition-colors">
                    {product.title}
                  </h4>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-sm font-bold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-xs text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
