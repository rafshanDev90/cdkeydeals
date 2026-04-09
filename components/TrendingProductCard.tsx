"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

interface ProductProps {
  id?: number;
  title: string;
  category?: string;
  price: number;
  image?: string;
  stockLabel?: string;
  badge?: string;
}

export default function TrendingProductCard({
  id = 0,
  title,
  category = "General",
  price,
  stockLabel,
  image = "/placeholder.jpg",
  badge,
}: ProductProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, getItemQuantity } = useCart();
  const itemQuantity = getItemQuantity(id);
  const isOutOfStock = stockLabel?.toLowerCase().includes("out of stock");

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      addToCart({ id, title, price, image });
      toast.success(`${title} added to cart!`);
    }
  };

  const handleQuickView = () => {
    toast.info(`Quick view: ${title}`);
  };

  return (
    <div
      className="group flex flex-col p-3 relative rounded-xl overflow-hidden 
      bg-card dark:bg-muted
      hover:-translate-y-1.5
      hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] 
      dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)]
      transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <Link
        href={`/product/${id}`}
        className="relative block aspect-square mb-3 overflow-hidden rounded-lg 
        bg-muted/50 dark:bg-gray-700
        transition-all duration-500"
      >
        <Image
          src={image}
          alt={title}
          fill
          className={`object-contain p-2 transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick View Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleQuickView();
          }}
          className={`absolute top-2 right-2 z-20 w-8 h-8 
          bg-white/90 dark:bg-gray-800/90 
          hover:bg-gray-900 hover:text-white 
          text-gray-700 dark:text-gray-300 
          rounded-full flex items-center justify-center 
          transition-all duration-300 shadow-md backdrop-blur-sm ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
          aria-label="Quick view"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </Link>

      {/* Product Details */}
      <div className="flex flex-col text-left flex-1 justify-between">
        <div className="space-y-1">
          <span className="text-[10px] text-muted-foreground dark:text-gray-400 font-medium uppercase tracking-tight leading-none">
            {category}
          </span>

          <h3 className="text-[13px] font-bold text-foreground leading-tight line-clamp-2 h-8 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-[14px] font-extrabold text-foreground">
            Tk {price.toLocaleString()}.00 BDT
          </p>

          {/* Stock Status */}
          <div className="flex items-center gap-1 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            <span
              className={`text-[11px] font-semibold ${
                stockLabel?.includes("Last")
                  ? "text-red-500"
                  : "text-green-600 dark:text-green-400"
              }`}
            >
              • {stockLabel || "In Stock"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          className={`mt-3 space-y-1.5 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <Button
            variant={isOutOfStock ? "secondary" : "default"}
            size="sm"
            className="w-full bg-gray-900 hover:bg-gray-800 text-white shadow-md text-xs py-1.5 px-3 h-8"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1" />
            {isOutOfStock
              ? "Out of Stock"
              : itemQuantity > 0
                ? `In Cart (${itemQuantity})`
                : "Add to Cart"}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="w-full border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs py-1.5 px-3 h-8"
            onClick={handleQuickView}
          >
            <Eye className="w-3.5 h-3.5 mr-1" />
            Quick View
          </Button>
        </div>
      </div>
    </div>
  );
}
