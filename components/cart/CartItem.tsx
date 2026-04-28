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
    <div className="flex gap-4 py-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
      {/* Product Image */}
      <div className="relative w-20 h-20 bg-gray-100 dark:bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="80px"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center">
            <div className="w-8 h-10 bg-gray-400 dark:bg-neutral-600 rounded-sm"></div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug dark:text-white mb-1">
            {item.title}
          </h4>

          {/* Price */}
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            {currencySymbol}{item.price.toFixed(2)}
          </p>
        </div>

        {/* Quantity Controls & Remove */}
        <div className="flex items-center justify-between dark:text-white mt-2">
          <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-md">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <span className="px-3 py-1 text-sm font-medium text-gray-900 min-w-[36px] dark:text-white text-center">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5 text-gray-600" />

            </button>
          </div>

          {/* Remove Link */}
          <button
            onClick={handleRemove}
            className="text-xs text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 underline underline-offset-2 transition-colors"
            aria-label="Remove item"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
