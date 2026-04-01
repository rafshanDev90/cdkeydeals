"use client";

import React from "react";
import { useCart } from "./SideCart";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    title: "MS Office + Windows 11 Combo",
    price: 299.99,
    image: "/api/placeholder/80/80"
  },
  {
    id: "2", 
    title: "Adobe Creative Suite",
    price: 599.99,
    image: "/api/placeholder/80/80"
  },
  {
    id: "3",
    title: "Antivirus Pro 2024",
    price: 49.99,
    image: "/api/placeholder/80/80"
  }
];

// Demo component to show how to add items to cart
export function CartDemo() {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof sampleProducts[0]) => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    });
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Cart Demo - Add Sample Products</h3>
      <div className="space-y-2">
        {sampleProducts.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
            <div>
              <h4 className="font-medium">{product.title}</h4>
              <p className="text-indigo-600 font-semibold">${product.price}</p>
            </div>
            <button
              onClick={() => handleAddToCart(product)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Click the cart icon in the header to view your cart
      </p>
    </div>
  );
}
