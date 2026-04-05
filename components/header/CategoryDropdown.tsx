"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "All Categories",
  "Electronics",
  "Apparel",
  "Books",
  "Games",
  "Software",
  "Gift Cards",
  "Home & Garden",
  "Sports",
  "Toys",
  "Beauty",
  "Automotive"
];

interface CategoryDropdownProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryDropdown({ selectedCategory, onCategoryChange }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 h-10 px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all min-w-[160px]"
      >
        <span className="truncate">{selectedCategory}</span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-[300px] overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                  selectedCategory === category 
                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                    : 'text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
