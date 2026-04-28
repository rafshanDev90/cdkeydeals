"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft, Monitor, ShieldCheck, Globe, Laptop, Timer, CheckCircle } from "lucide-react";
import { Product } from "@/types/product";
import { useWishlist, productToWishlistItem } from "@/context/WishlistContext";

// Atomic Components
import ProductGallery from "./ui/ProductGallery";
import ProductMeta from "./ui/ProductMeta";
import AddToCartFlow from "./ui/AddToCartFlow";
import ProductDescription from "./ui/ProductDescription";
import TechnicalSpecs from "./ui/TechnicalSpecs";
import ProductFaq from "./ui/ProductFaq";
import MobileActionToolbar from "./ui/MobileActionToolbar";

interface ProductDetailsProps {
  product: Product;
  relatedProducts?: Product[];
}

export default function ProductDetails({ product, relatedProducts = [] }: ProductDetailsProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);

  const handleWishlistToggle = () => {
    toggleWishlist(productToWishlistItem(product));
  };

  // Build specs from product data
  const technicalSpecs = [
    { label: "Developer", value: product.platform || "Unknown" },
    { label: "Publisher", value: product.platform || "Unknown" },
    { label: "Category", value: product.category || "General" },
    { label: "License Type", value: "Retail (Full Version)" },
    { label: "Devices", value: "1 PC" },
    { label: "Region", value: product.region || "Global Activation" },
    ...(product.specifications
      ? Object.entries(product.specifications).map(([label, value]) => ({ label, value }))
      : []),
  ];

  // Product meta info grid
  const metaItems = [
    { icon: <Monitor className="w-5 h-5" />, label: "Platform", value: product.platform || "Software" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Version", value: "Retail" },
    { icon: <Globe className="w-5 h-5" />, label: "Region", value: product.region || "Global" },
    { icon: <Laptop className="w-5 h-5" />, label: "Devices", value: "1 PC" },
    { icon: <Timer className="w-5 h-5" />, label: "Duration", value: "Life-time" },
  ];

  return (
    <div className="pb-24 lg:pb-8 bg-[#0b0b0b] dark:bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ───────── Breadcrumb ───────── */}
        <nav className="flex items-center text-xs font-medium text-zinc-500 dark:text-zinc-500 mb-6 space-x-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link href="/" className="hover:text-zinc-50 dark:hover:text-zinc-50 transition-colors shrink-0">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0 text-zinc-600 dark:text-zinc-600" />
          <Link href="/collections" className="hover:text-zinc-50 dark:hover:text-zinc-50 transition-colors shrink-0">Shop</Link>
          {product.category && (
            <>
              <ChevronRight className="w-3 h-3 shrink-0 text-zinc-600 dark:text-zinc-600" />
              <Link
                href={`/collections?category=${encodeURIComponent(product.category)}`}
                className="hover:text-zinc-50 dark:hover:text-zinc-50 transition-colors shrink-0"
              >
                {product.category}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3 shrink-0 text-zinc-600 dark:text-zinc-600" />
          <span className="text-primary font-bold truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* Mobile Back */}
        <Link
          href="/collections"
          className="inline-flex items-center text-sm text-zinc-500 dark:text-zinc-500 hover:text-zinc-50 dark:hover:text-zinc-50 mb-4 lg:hidden transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        {/* ───────── Hero Section (2-col grid) ───────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Gallery */}
          <div className="lg:col-span-5">
            <ProductGallery
            title={product.title}
            image={product.image}
            images={product.images}
            badge={product.badge}
            badgeColor={product.badgeColor}
            discountPercent={product.discount}
            isNew={product.isNew}
            inWishlist={isInWishlist(product.id)}
              onWishlistToggle={handleWishlistToggle}
            />
          </div>

          {/* Right: Info + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {product.category && (
                <span className="bg-[#1a1a1a] dark:bg-[#1a1a1a] text-zinc-300 dark:text-zinc-300 border border-zinc-800 dark:border-zinc-700 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              )}
              <span className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary border border-primary/20 dark:border-primary/30 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Lifetime License
              </span>
            </div>

            {/* Title & Meta */}
            <ProductMeta
              title={product.title}
              category={product.category}
              platform={product.platform}
              rating={product.rating}
              reviewCount={product.reviewCount}
              soldCount={product.soldCount}
            />

            {/* AddToCart flow (price, qty, CTA) */}
            <AddToCartFlow product={product} />

            {/* Brand / Category / Status strip */}
            <div className="grid grid-cols-3 gap-2 py-4 border-y border-zinc-800 dark:border-zinc-700 bg-[#1a1a1a] dark:bg-[#1a1a1a] rounded-lg px-4">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Brand</p>
                <p className="font-bold text-sm text-zinc-50 dark:text-zinc-50">{product.platform || "CDKeyDeals"}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Category</p>
                <p className="font-bold text-sm text-zinc-50 dark:text-zinc-50">{product.category || "General"}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-1">Status</p>
                <p className={`font-bold text-sm ${product.stock === 0 ? "text-red-500" : "text-green-500 dark:text-green-500"}`}>
                  {product.stock === 0 ? "Out of Stock" : "In Stock"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Meta Info Grid (5 cols) ───────── */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {metaItems.map((item, i) => (
            <div
              key={i}
              className={`bg-[#1a1a1a] dark:bg-[#1a1a1a] border border-zinc-800 dark:border-zinc-700 p-4 rounded-xl text-center ${
                i === metaItems.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex justify-center text-primary mb-2">{item.icon}</div>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-tighter">{item.label}</p>
              <p className="text-sm font-bold text-zinc-50 dark:text-zinc-50">{item.value}</p>
            </div>
          ))}
        </section>

        {/* ───────── Product Description (Enhanced) ───────── */}
        <ProductDescription product={product} />

        {/* ───────── Technical Specifications ───────── */}
        <TechnicalSpecs specs={technicalSpecs} />

        {/* ───────── FAQ ───────── */}
        <ProductFaq />

        {/* ───────── Related Products ───────── */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-zinc-50 dark:text-zinc-50 font-headline">You May Also Like</h2>
              <Link href="/collections" className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                View All
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedProducts.slice(0, 6).map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/product/${relatedProduct.slug || relatedProduct.id}`}
                  className="bg-[#1a1a1a] dark:bg-[#1a1a1a] border border-zinc-800 dark:border-zinc-700 rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer group"
                >
                  <div className="relative h-32 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] flex items-center justify-center p-3 overflow-hidden">
                    {relatedProduct.image ? (
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-10 h-12 bg-[#1a1a1a] rounded animate-pulse" />
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-bold text-zinc-50 dark:text-zinc-50 line-clamp-2 min-h-[2rem] group-hover:text-primary transition-colors">
                      {relatedProduct.title}
                    </h4>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-sm font-bold text-zinc-50 dark:text-zinc-50">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      {relatedProduct.originalPrice && relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-xs text-zinc-500 dark:text-zinc-500 line-through">
                          ${relatedProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ───────── Mobile Fixed Bottom Bar ───────── */}
      <MobileActionToolbar product={product} quantity={quantity} />
    </div>
  );
}
