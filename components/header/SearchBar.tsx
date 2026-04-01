"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative flex">
      <input
        type="text"
        placeholder="Search for games, software, gift cards..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full h-10 bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-12 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
}
