"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CategoryDropdown from "./CategoryDropdown";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="relative flex">
      {/* Category Dropdown - hidden on mobile for space */}
      <div className="hidden sm:block">
        <CategoryDropdown 
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 h-12 sm:h-12 bg-gray-50 dark:bg-[#2C2C2C] border border-gray-200 dark:border-gray-600 rounded-lg sm:rounded-r-lg pl-4 sm:pl-5 pr-12 sm:pr-14 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all"
      />
      <button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200">
        <Search className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
