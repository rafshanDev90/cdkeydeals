"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import CategoryDropdown from "./CategoryDropdown";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All products");

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
        placeholder="Search for anything..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1 h-12 bg-gray-50 dark:bg-[#2C2C2C] border border-gray-200 dark:border-gray-600 rounded-r-lg pl-4 sm:pl-5 pr-12 sm:pr-14 text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 dark:focus:ring-indigo-400/20 transition-all sm:border-l-0"
      />
      <button className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200">
        <Search className="w-5 h-5 stroke-2" />
      </button>
    </div>
  );
}
