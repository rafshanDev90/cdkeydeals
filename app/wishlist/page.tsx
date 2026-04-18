"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingCart, ArrowRight, ShoppingBag } from "lucide-react";
import { useWishlist, WishlistItem } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const { state, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: WishlistItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      originalPrice: item.originalPrice,
      currency: item.currency || "USD",
      badge: item.badge,
      badgeColor: item.badgeColor,
      image: item.image,
      category: item.category,
    });
  };

  const handleMoveAllToCart = () => {
    state.items.forEach((item) => handleAddToCart(item));
  };

  // Empty state
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Your Wishlist is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Save items you love for later. Browse our collection and tap the heart icon to add products here.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">My Wishlist</h1>
              <p className="text-sm text-muted-foreground">{state.totalItems} item{state.totalItems !== 1 ? "s" : ""}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleMoveAllToCart}
                className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1.5 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Add All to Cart
              </button>
              <button
                onClick={clearWishlist}
                className="text-sm text-muted-foreground hover:text-red-500 flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200 group relative"
            >
              {/* Remove button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              {/* Image */}
              <Link href={`/product/${item.id}`}>
                <div className="relative h-44 bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center p-4 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  )}
                </div>
              </Link>

              {/* Info */}
              <div className="p-4">
                <Link href={`/product/${item.id}`}>
                  <h4 className="text-sm font-bold text-foreground line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </Link>

                {item.category && (
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                )}

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</span>
                  {item.originalPrice && item.originalPrice > item.price && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="w-full mt-3 bg-primary text-primary-foreground hover:opacity-90"
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
