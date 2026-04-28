"use client";

/**
 * AddToCartFlow — Atomic Molecule
 * Quantity picker, total price display, add-to-cart button, wishlist button.
 * Wraps centralized CartContext to prevent hydration mismatches.
 */

import { useState } from "react";
import { ShoppingCart, Heart, Minus, Plus, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist, productToWishlistItem } from "@/context/WishlistContext";
import { useCurrency } from "@/context/CurrencyContext";
import logger from "@/lib/logger";

interface AddToCartFlowProps {
  product: Product;
}

export default function AddToCartFlow({ product }: AddToCartFlowProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, getItemQuantity } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { formatPriceWithOriginal, convertPrice, selectedCurrency } = useCurrency();

  const {
    id,
    title,
    price,
    originalPrice,
    currency = "USD",
    badge,
    badgeColor,
    discount,
    image,
    category,
    stock,
    stockLabel,
  } = product;

  const isOutOfStock = stock === 0;
  const isLowStock = stock !== undefined && stock <= 5 && stock > 0;
  const inWishlist = isInWishlist(id);
  const itemQuantity = getItemQuantity(id);

  const discountPercent =
    discount ||
    (originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0);

  const { current: currentPrice, original: originalPriceFormatted, hasDiscount, discountPercentage } =
    formatPriceWithOriginal(price, originalPrice);

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    // Inventory validation — refuse if quantity exceeds stock
    if (stock !== undefined && quantity > stock) {
      logger.warn("Attempted to add more than available stock", {
        component: "AddToCartFlow",
        key: String(id),
        requested: quantity,
        available: stock,
      });
      return;
    }

    try {
      for (let i = 0; i < quantity; i++) {
        addToCart({ id, title, price, originalPrice, currency, badge, badgeColor, discount: discountPercent, image, category });
      }
      logger.info(`Added ${quantity}× "${title}" to cart`, { component: "AddToCartFlow", key: String(id) });
    } catch (err) {
      logger.error("Failed to add item to cart", {
        component: "AddToCartFlow",
        key: String(id),
        message: (err as Error).message,
      });
    }
  };

  const handleWishlist = () => toggleWishlist(productToWishlistItem(product));

  return (
    <div className="space-y-5">
      {/* Price Block */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-3xl lg:text-4xl font-bold text-zinc-50 dark:text-zinc-50">{currentPrice}</span>
        {hasDiscount && originalPriceFormatted && (
          <>
            <span className="text-xl text-zinc-500 dark:text-zinc-500 line-through">{originalPriceFormatted}</span>
            <span className="text-sm font-bold text-red-500 bg-red-950/50 dark:bg-red-950/50 border border-red-800/50 dark:border-red-800/50 px-2 py-1 rounded">
              Save {discountPercentage}%
            </span>
          </>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${isOutOfStock ? "bg-red-500" : isLowStock ? "bg-orange-500" : "bg-green-500"}`} />
        <span className={`font-medium ${isOutOfStock ? "text-red-600 dark:text-red-400" : isLowStock ? "text-orange-600 dark:text-orange-400" : "text-green-600 dark:text-green-400"}`}>
          {stockLabel || (isOutOfStock ? "Out of Stock" : isLowStock ? `Only ${stock} left!` : "In Stock")}
        </span>
      </div>

      {/* Quantity Picker */}
      <div className="flex items-center gap-4">
        <span className="font-medium text-zinc-50 dark:text-zinc-50">Quantity:</span>
        <div className="flex items-center border border-zinc-700 dark:border-zinc-700 rounded-lg overflow-hidden bg-[#1a1a1a] dark:bg-[#1a1a1a]">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="p-3 hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors disabled:opacity-40 text-zinc-50 dark:text-zinc-50"
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-6 py-3 font-medium min-w-[4rem] text-center text-zinc-50 dark:text-zinc-50">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (stock !== undefined ? Math.min(prev + 1, stock) : prev + 1))}
            className="p-3 hover:bg-zinc-800 dark:hover:bg-zinc-800 transition-colors disabled:opacity-40 text-zinc-50 dark:text-zinc-50"
            disabled={isOutOfStock || (stock !== undefined && quantity >= stock)}
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between p-4 bg-[#1a1a1a] dark:bg-[#1a1a1a] border border-zinc-800 dark:border-zinc-700 rounded-xl">
        <span className="font-medium text-zinc-50 dark:text-zinc-50">Total:</span>
        <span className="text-2xl font-bold text-zinc-50 dark:text-zinc-50">
          {new Intl.NumberFormat(selectedCurrency.locale, {
            style: "currency",
            currency: selectedCurrency.code,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(convertPrice(price * quantity))}
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant={isOutOfStock ? "secondary" : "default"}
          size="lg"
          className="flex-1 bg-gray-900 hover:bg-gray-800 text-white h-14 text-lg"
          disabled={isOutOfStock}
          onClick={handleAddToCart}
          id={`add-to-cart-${id}`}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {isOutOfStock
            ? "Out of Stock"
            : itemQuantity > 0
            ? `Add More (${itemQuantity} in cart)`
            : "Add to Cart"}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className={`flex-1 h-14 text-lg ${inWishlist ? "border-red-500 text-red-500" : ""}`}
          onClick={handleWishlist}
          id={`wishlist-${id}`}
        >
          <Heart className={`w-5 h-5 mr-2 ${inWishlist ? "fill-current" : ""}`} />
          {inWishlist ? "In Wishlist" : "Add to Wishlist"}
        </Button>
      </div>

      {/* SSL Badge */}
      <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
        <ShieldCheck className="w-4 h-4" />
        <span>256-bit SSL Encrypted Secure Checkout</span>
      </div>
    </div>
  );
}
