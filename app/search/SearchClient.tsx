"use client";

import Link from "next/link";
import { Search, ShoppingBag, ArrowLeft } from "lucide-react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchClientProps {
  query: string;
  initialResults: Product[];
}

export default function SearchClient({ query, initialResults }: SearchClientProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(query);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back nav */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for games, software, gift cards..."
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-lg"
              autoFocus
            />
          </div>
        </form>

        {/* Results Header */}
        {query && (
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              {initialResults.length > 0
                ? `${initialResults.length} result${initialResults.length !== 1 ? "s" : ""} for "${query}"`
                : `No results for "${query}"`}
            </h1>
          </div>
        )}

        {/* No query state */}
        {!query && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Search CDKeyDeals</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Type a product name, category, or platform to find the best deals.
            </p>
          </div>
        )}

        {/* No results */}
        {query && initialResults.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">No products found</h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Try a different search term or browse our collections.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Browse All Products
            </Link>
          </div>
        )}

        {/* Results Grid */}
        {initialResults.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {initialResults.map((product) => (
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
                  {product.category && (
                    <p className="text-[10px] text-muted-foreground mt-1">{product.category}</p>
                  )}
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
