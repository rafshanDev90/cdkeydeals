"use client";

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { state, toggleCart } = useCart();

  return (
    <button
      onClick={() => toggleCart(true)}
      className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors group"
      aria-label="Shopping cart"
    >
      <ShoppingCart className="w-6 h-6 transition-transform group-hover:scale-110" />
      
      {/* Badge */}
      {state.totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 shadow-lg animate-pulse">
          {state.totalItems > 99 ? '99+' : state.totalItems}
        </span>
      )}
    </button>
  );
}
