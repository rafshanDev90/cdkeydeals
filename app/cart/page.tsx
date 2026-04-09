"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight,
  Truck,
  Shield,
  Clock
} from "lucide-react";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart } = useCart();

  const currencySymbol =
    state.items[0]?.currency === "BDT"
      ? "৳"
      : state.items[0]?.currency === "GBP"
      ? "£"
      : state.items[0]?.currency === "EUR"
      ? "€"
      : "$";

  // Calculate totals
  const subtotal = state.totalPrice;
  const shipping: number = 0; // Free shipping
  const total = subtotal + shipping;

  // Empty cart state
  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-foreground mb-4">
              Your cart is empty
            </h1>
            <p className="text-gray-600 dark:text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like you haven&apos;t added anything to your cart yet. Start shopping to fill it up!
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium rounded-lg transition-all"
            >
              Continue Shopping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-card">
      {/* Header */}
      <header className="bg-white dark:bg-card border-b border-gray-200 dark:border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="text-sm">Continue Shopping</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900 dark:text-foreground">
              Shopping Cart
            </h1>
            <div className="flex items-center text-gray-600 dark:text-muted-foreground">
              <ShoppingBag className="w-4 h-4 mr-1" />
              <span className="text-sm">{state.totalItems} items</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-8">
            {/* Free Shipping Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <Truck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Congratulations! You qualify for free shipping on this order.
              </span>
            </div>

            {/* Cart Items List */}
            <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-gray-200 dark:border-border overflow-hidden">
              {/* Header Row - Desktop */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 dark:bg-muted text-sm font-medium text-gray-600 dark:text-muted-foreground">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200 dark:divide-border">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center"
                  >
                    {/* Product Info */}
                    <div className="col-span-6 flex gap-4 mb-4 md:mb-0">
                      <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <ShoppingBag className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 dark:text-foreground line-clamp-2">
                          {item.title}
                        </h3>
                        {item.category && (
                          <p className="text-sm text-gray-500 dark:text-muted-foreground mt-0.5">
                            {item.category}
                          </p>
                        )}
                        {item.badge && (
                          <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded ${item.badgeColor || 'bg-purple-100 text-purple-700'}`}>
                            {item.badge}
                          </span>
                        )}
                        {/* Mobile Price */}
                        <p className="md:hidden text-sm font-medium text-gray-900 dark:text-foreground mt-2">
                          {currencySymbol}{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Price - Desktop */}
                    <div className="hidden md:block col-span-2 text-center">
                      <span className="text-gray-900 dark:text-foreground font-medium">
                        {currencySymbol}{item.price.toFixed(2)}
                      </span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <span className="block text-sm text-gray-500 line-through">
                          {currencySymbol}{item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-2 flex items-center justify-center gap-2 mb-4 md:mb-0">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg border border-gray-300 dark:border-border flex items-center justify-center text-gray-600 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-medium text-gray-900 dark:text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg border border-gray-300 dark:border-border flex items-center justify-center text-gray-600 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Total & Remove */}
                    <div className="col-span-2 flex items-center justify-between md:justify-end gap-4">
                      <div className="text-right">
                        <span className="font-semibold text-gray-900 dark:text-foreground">
                          {currencySymbol}{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clear Cart Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearCart}
                className="text-sm text-gray-500 hover:text-red-500 flex items-center gap-1.5 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-gray-200 dark:border-border p-6 lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground mb-6">
                Order Summary
              </h2>

              {/* Summary Lines */}
              <div className="space-y-3 pb-6 border-b border-gray-200 dark:border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-muted-foreground">Subtotal</span>
                  <span className="font-medium text-gray-900 dark:text-foreground">
                    {currencySymbol}{subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-muted-foreground">Shipping</span>
                  <span className="font-medium text-green-600">
                    {shipping === 0 ? "Free" : `${currencySymbol}${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center py-6 border-b border-gray-200 dark:border-border">
                <span className="text-base font-semibold text-gray-900 dark:text-foreground">Total</span>
                <span className="text-2xl font-bold text-gray-900 dark:text-foreground">
                  {currencySymbol}{total.toFixed(2)}
                </span>
              </div>

              {/* Benefits */}
              <div className="py-6 space-y-3 border-b border-gray-200 dark:border-border">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                  <Shield className="w-4 h-4 text-purple-600" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                  <Truck className="w-4 h-4 text-purple-600" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span>Instant Delivery</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link href="/checkout" className="block mt-6">
                <Button className="w-full h-12 text-base font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-200">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              {/* Continue Shopping Link */}
              <Link
                href="/"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-purple-600 font-medium mt-4 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
