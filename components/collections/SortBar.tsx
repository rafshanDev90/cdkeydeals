"use client";

import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  Grid,
  List,
  ChevronDown,
  LayoutGrid,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SortOption, ViewMode } from "@/types/product";

interface SortBarProps {
  totalProducts: number;
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  onFilterToggle: () => void;
  isMobileFilterOpen: boolean;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "best-selling", label: "Best Selling" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest First" },
  { value: "name-a-z", label: "Name: A to Z" },
  { value: "name-z-a", label: "Name: Z to A" },
];

export default function SortBar({
  totalProducts,
  currentSort,
  onSortChange,
  currentView,
  onViewChange,
  onFilterToggle,
  isMobileFilterOpen,
}: SortBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 bg-card rounded-xl border border-border p-4"
    >
      {/* Left Section - Product Count & Mobile Filter */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        {/* Mobile Filter Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onFilterToggle}
          className="lg:hidden flex items-center gap-2"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </Button>

        {/* Product Count */}
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{totalProducts}</span> {" "}
          {totalProducts === 1 ? "product" : "products"} found
        </div>
      </div>

      {/* Right Section - Sort & View */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        {/* Sort Dropdown */}
        <div className="flex-1 sm:flex-none">
          <Select value={currentSort} onValueChange={(value) => onSortChange(value as SortOption)}>
            <SelectTrigger className="w-full sm:w-[180px] h-9 text-sm">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange("grid")}
            className={`rounded-none h-9 px-3 ${
              currentView === "grid"
                ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onViewChange("list")}
            className={`rounded-none h-9 px-3 ${
              currentView === "list"
                ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
