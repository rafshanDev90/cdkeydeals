"use client";

import { useState } from "react";
import { ChevronDown, Grid, List } from "lucide-react";

interface SortingBarProps {
  resultCount: number;
  onSortChange?: (sortValue: string) => void;
  onViewChange?: (viewType: 'grid' | 'list') => void;
}

export default function SortingBar({ 
  resultCount, 
  onSortChange, 
  onViewChange 
}: SortingBarProps) {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState("featured");
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "name-asc", label: "Name: A to Z" },
    { value: "name-desc", label: "Name: Z to A" },
    { value: "availability", label: "Availability" },
  ];

  const handleSortChange = (value: string) => {
    setCurrentSort(value);
    setIsSortDropdownOpen(false);
    onSortChange?.(value);
  };

  const handleViewChange = (type: 'grid' | 'list') => {
    setViewType(type);
    onViewChange?.(type);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Results Count */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Showing</span>
          <span className="font-semibold text-gray-900">{resultCount}</span>
          <span className="text-gray-600 text-sm">Results</span>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => handleViewChange('grid')}
              className={`p-2 rounded transition-colors ${
                viewType === 'grid' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleViewChange('list')}
              className={`p-2 rounded transition-colors ${
                viewType === 'list' 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Sort By:</span>
              <span className="text-indigo-600">
                {sortOptions.find(option => option.value === currentSort)?.label}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${
                isSortDropdownOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        currentSort === option.value
                          ? 'bg-indigo-50 text-indigo-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
