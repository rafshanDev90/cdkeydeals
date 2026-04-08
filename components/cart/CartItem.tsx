"use client";

import { X, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/context/CartContext';

interface CartItemComponentProps {
  item: CartItem;
}

export default function CartItemComponent({ item }: CartItemComponentProps) {
  const { updateQuantity, removeFromCart } = useCart();
  
  const currencySymbol = item.currency === 'BDT' ? '৳' : item.currency === 'GBP' ? '£' : item.currency === 'EUR' ? '€' : '$';

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="flex gap-3 p-3 sm:p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
      {/* Product Image */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="64px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="w-8 h-10 bg-gray-400 rounded-sm"></div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h4 className="text-sm sm:text-base font-medium text-gray-900 line-clamp-2 leading-tight mb-1">
          {item.title}
        </h4>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm sm:text-base font-bold text-gray-900">
            {currencySymbol}
            {item.price.toFixed(2)}
          </span>
          {item.originalPrice && item.originalPrice > item.price && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">
              {currencySymbol}
              {item.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-2 sm:p-1 hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4 sm:w-3 sm:h-3 text-gray-600" />
            </button>
            <span className="px-3 sm:px-2 py-1 text-sm sm:text-base font-medium text-gray-900 min-w-[48px] sm:min-w-[40px] text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-2 sm:p-1 hover:bg-gray-100 transition-colors touch-manipulation"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4 sm:w-3 sm:h-3 text-gray-600" />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={handleRemove}
            className="p-2 sm:p-1 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors touch-manipulation"
            aria-label="Remove item"
          >
            <X className="w-5 h-5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      {/* Item Total */}
      <div className="text-right flex-shrink-0 hidden sm:block">
        <p className="text-sm sm:text-base font-bold text-gray-900">
          {currencySymbol}
          {(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
