"use client";

import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist, productToWishlistItem } from "@/context/WishlistContext";

interface MobileActionToolbarProps {
  product: Product;
  quantity: number;
}

export default function MobileActionToolbar({ product, quantity }: MobileActionToolbarProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isOutOfStock = product.stock === 0;
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    const { id, title, price, originalPrice, currency = "USD", badge, badgeColor, discount, image, category } = product;
    for (let i = 0; i < quantity; i++) {
      addToCart({ id, title, price, originalPrice, currency, badge, badgeColor, discount, image, category });
    }
  };

  const handleWishlist = () => {
    toggleWishlist(productToWishlistItem(product));
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-background/95 backdrop-blur-xl border-t border-border rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.08)] flex justify-between items-center px-6 py-4">
        {/* Save for Later */}
        <button
          onClick={handleWishlist}
          className={`flex flex-col items-center justify-center px-6 py-3 transition-all active:scale-95 ${
            inWishlist ? "text-red-500" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Heart className={`w-6 h-6 mb-1 ${inWishlist ? "fill-current" : ""}`} />
          <span className="text-[10px] font-semibold uppercase tracking-widest">
            {inWishlist ? "Saved" : "Save"}
          </span>
        </button>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={`flex items-center gap-3 rounded-2xl px-8 py-4 font-semibold text-sm uppercase tracking-widest transition-all active:scale-95 hover:opacity-90 ${
            isOutOfStock
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-gradient-to-r from-primary/90 to-primary text-primary-foreground shadow-lg shadow-primary/20"
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>{isOutOfStock ? "Out of Stock" : "Add to Cart"}</span>
        </button>
      </div>
    </div>
  );
}
