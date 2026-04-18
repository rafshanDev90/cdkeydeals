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
    <div className="pb-24 lg:pb-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ───────── Breadcrumb ───────── */}
        <nav className="flex items-center text-xs font-medium text-muted-foreground mb-6 space-x-2 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide">
          <Link href="/" className="hover:text-foreground transition-colors shrink-0">Home</Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/collections" className="hover:text-foreground transition-colors shrink-0">Shop</Link>
          {product.category && (
            <>
              <ChevronRight className="w-3 h-3 shrink-0" />
              <Link
                href={`/collections?category=${encodeURIComponent(product.category)}`}
                className="hover:text-foreground transition-colors shrink-0"
              >
                {product.category}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3 shrink-0" />
          <span className="text-primary font-bold truncate max-w-[200px]">{product.title}</span>
        </nav>

        {/* Mobile Back */}
        <Link
          href="/collections"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 lg:hidden transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Products
        </Link>

        {/* ───────── Hero Section (2-col grid) ───────── */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Left: Gallery */}
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

          {/* Right: Info + CTA */}
          <div className="flex flex-col justify-center space-y-5">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {product.category && (
                <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {product.category}
                </span>
              )}
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
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
            <div className="grid grid-cols-3 gap-2 py-4 border-y border-border">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Brand</p>
                <p className="font-bold text-sm text-foreground">{product.platform || "CDKeyDeals"}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Category</p>
                <p className="font-bold text-sm text-foreground">{product.category || "General"}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Status</p>
                <p className={`font-bold text-sm ${product.stock === 0 ? "text-red-500" : "text-green-600"}`}>
                  {product.stock === 0 ? "Out of Stock" : "Active"}
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
              className={`bg-muted/40 dark:bg-muted/30 p-4 rounded-xl text-center ${
                i === metaItems.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="flex justify-center text-primary mb-2">{item.icon}</div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-tighter">{item.label}</p>
              <p className="text-sm font-bold text-foreground">{item.value}</p>
            </div>
          ))}
        </section>

        {/* ───────── Product Description (Editorial) ───────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground font-headline">
            <div className="w-2 h-8 bg-primary rounded-full" />
            Product Description
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {product.description ? (
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            ) : (
              <p className="text-lg">No description available for this product.</p>
            )}

            {/* Feature Highlight Box */}
            {product.features && product.features.length > 0 && (
              <div className="bg-muted/60 dark:bg-muted/40 p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Key Features</h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ───────── Technical Specifications ───────── */}
        <TechnicalSpecs specs={technicalSpecs} />

        {/* ───────── FAQ ───────── */}
        <ProductFaq />

        {/* ───────── Related Products ───────── */}
        {relatedProducts.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground font-headline">You May Also Like</h2>
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
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer group"
                >
                  <div className="relative h-32 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center p-3 overflow-hidden">
                    {relatedProduct.image ? (
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-10 h-12 bg-muted rounded animate-pulse" />
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-bold text-foreground line-clamp-2 min-h-[2rem] group-hover:text-primary transition-colors">
                      {relatedProduct.title}
                    </h4>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-sm font-bold text-foreground">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      {relatedProduct.originalPrice && relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="text-xs text-muted-foreground line-through">
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
