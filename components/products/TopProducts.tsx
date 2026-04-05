"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import EmptyState from './EmptyState';
import { TopProductsProps, Product } from '@/types/product';

export default function TopProducts({ 
  title = "Top Products", 
  products, 
  viewAllLink,
  loading = false 
}: TopProductsProps) {
  if (loading) {
    return (
      <section className="py-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-8">
            <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-6 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-12">
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto">
          <EmptyState 
            title="No products available"
            description="Check back later for new products."
            actionLabel="Browse All Products"
            actionHref="/products"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50/30">
      <div className="px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 font-['Inter',system-ui,sans-serif]">
              {title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              Discover our most popular digital products and software keys
            </p>
          </div>
          {viewAllLink && (
            <Link href={viewAllLink}>
              <Button variant="outline" size="md" className="group">
                Shop All
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product}
              onAddToCart={(id) => console.log('Add to cart:', id)}
              onQuickView={(id) => console.log('Quick view:', id)}
            />
          ))}
        </div>

        {/* View All Button for Mobile */}
        {viewAllLink && (
          <div className="mt-8 text-center lg:hidden">
            <Link href={viewAllLink}>
              <Button variant="accent" size="lg" className="group">
                View All Products
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
