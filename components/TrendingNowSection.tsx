"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import QuickViewModal from "./QuickViewModal";
import { Product } from "@/types/product";

// Product type for the Trending Now component
interface TrendingProduct {
  id: number;
  title: string;
  slug?: string;
  category?: string;
  price: number;
  originalPrice?: number;
  currency?: string;
  image?: string;
  badge?: string;
  stockStatus?: "in-stock" | "low-stock" | "out-of-stock";
  stockLabel?: string;
  onQuickView?: () => void;
}

interface TrendingNowProps {
  title?: string;
  products?: TrendingProduct[];
  viewAllLink?: string;
}

// Default trending products data
const defaultTrendingProducts: TrendingProduct[] = [
  {
    id: 101,
    title: "Microsoft Office 2024 Professional Plus",
    slug: "microsoft-office-2024-professional-plus",
    category: "Office Keys",
    price: 2499,
    originalPrice: 4999,
    currency: "Tk",
    image: "https://placehold.co/400x500/1e40af/ffffff?text=Office+2024",
    badge: "Hot Sale",
    stockStatus: "in-stock",
    stockLabel: "In Stock",
  },
  {
    id: 102,
    title: "Windows 11 Pro Digital License",
    slug: "windows-11-pro-digital-license",
    category: "Best Seller",
    price: 1899,
    originalPrice: 3499,
    currency: "Tk",
    image: "https://placehold.co/400x500/0ea5e9/ffffff?text=Windows+11",
    badge: "Best Seller",
    stockStatus: "in-stock",
    stockLabel: "In Stock",
  },
  {
    id: 103,
    title: "Adobe Creative Cloud 2024",
    slug: "adobe-creative-cloud-2024",
    category: "Design",
    price: 3299,
    originalPrice: 5999,
    currency: "Tk",
    image: "https://placehold.co/400x500/dc2626/ffffff?text=Adobe+CC",
    badge: "Hot Sale",
    stockStatus: "low-stock",
    stockLabel: "1 Last Item",
  },
  {
    id: 104,
    title: "Microsoft Windows 10 Pro",
    slug: "microsoft-windows-10-pro",
    category: "Office Keys",
    price: 1299,
    originalPrice: 2499,
    currency: "Tk",
    image: "https://placehold.co/400x500/3b82f6/ffffff?text=Windows+10",
    badge: "Office Keys",
    stockStatus: "in-stock",
    stockLabel: "In Stock",
  },
  {
    id: 105,
    title: "Steam Wallet $50 Gift Card",
    slug: "steam-wallet-50-gift-card",
    category: "Gaming",
    price: 4599,
    currency: "Tk",
    image: "https://placehold.co/400x500/1f2937/ffffff?text=Steam+$50",
    badge: "Best Seller",
    stockStatus: "in-stock",
    stockLabel: "In Stock",
  },
  {
    id: 106,
    title: "Antivirus Pro 2024 License",
    slug: "antivirus-pro-2024-license",
    category: "Security",
    price: 899,
    originalPrice: 1999,
    currency: "Tk",
    image: "https://placehold.co/400x500/10b981/ffffff?text=Antivirus",
    badge: "Hot Sale",
    stockStatus: "in-stock",
    stockLabel: "In Stock",
  },
];

// Individual Product Card Component
function TrendingProductCard({
  id,
  title,
  slug,
  category = "General",
  price,
  originalPrice,
  currency = "Tk",
  image,
  badge,
  stockStatus = "in-stock",
  stockLabel = "In Stock",
  onQuickView,
}: TrendingProduct) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, getItemQuantity } = useCart();
  const itemQuantity = getItemQuantity(id);

  const isOutOfStock = stockStatus === "out-of-stock";
  const isLowStock = stockStatus === "low-stock";

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addToCart({ id, title, price, currency, image });
      toast.success(`${title} added to cart!`);
    }
  };

  const handleQuickView = () => {
    if (onQuickView) onQuickView();
  };

  const productSlug = slug || id.toString();

  return (
    <div
      className="group relative bg-white dark:bg-[#2A2A2A] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden
        hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-300 ease-out
        hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link
        href={`/product/${productSlug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-[#1A1A1A]"
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}

        {/* Quick View */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleQuickView();
          }}
          className={`absolute top-3 right-3 w-9 h-9 bg-black/80 dark:bg-[#1E1E1E]/90 text-white rounded-full flex items-center justify-center transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Eye className="w-4 h-4" />
        </button>
      </Link>

      {/* Info */}
      <div className="p-4 space-y-3 text-black dark:text-white">
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
          {category}
        </span>

        <Link href={`/product/${productSlug}`}>
          <h3 className="text-sm font-semibold hover:text-blue-500 dark:hover:text-blue-400 line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold">
            {currency} {price.toLocaleString()}
          </span>

          {originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {currency} {originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isOutOfStock
                ? "bg-red-500"
                : isLowStock
                ? "bg-orange-500"
                : "bg-green-500"
            }`}
          />
          <span className="text-xs text-gray-600 dark:text-gray-300">
            {stockLabel}
          </span>
        </div>

        {/* Actions */}
        <div
          className={`space-y-2 transition-all duration-300 ${
            isHovered
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <Button
            className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {isOutOfStock
              ? "Out of Stock"
              : itemQuantity > 0
              ? `In Cart (${itemQuantity})`
              : "Add to Cart"}
          </Button>

          <Button
            variant="outline"
            className="w-full border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={handleQuickView}
          >
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main Section
export default function TrendingNowSection({
  title = "Trending Now",
  products: externalProducts,
  viewAllLink,
}: TrendingNowProps) {
  const products = externalProducts || defaultTrendingProducts;

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setSelectedProduct(product as Product);
      setIsQuickViewOpen(true);
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Products that are gaining popularity
            </p>
          </div>

          {viewAllLink && (
            <Link href={viewAllLink} className="text-blue-500 dark:text-blue-400">
              View All →
            </Link>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <TrendingProductCard
              key={product.id}
              {...product}
              onQuickView={() => handleQuickView(product.id)}
            />
          ))}
        </div>

        {/* Modal */}
        <QuickViewModal
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
        />
      </div>
    </section>
  );
}