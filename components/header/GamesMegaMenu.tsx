"use client";

import { useState } from "react";
import { 
  Gamepad2, 
  Grid3X3, 
  Globe, 
  Star,
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Tv,
  Puzzle,
  Sword,
  Heart,
  Brain,
  MapPin,
  Package
} from "lucide-react";
import DropdownWrapper from "./DropdownWrapper";

interface GamesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  submenu: string[];
}

const gamesCategories: Category[] = [
  {
    id: "platform",
    title: "By Platform",
    icon: Monitor,
    submenu: [
      "PC Games", 
      "PlayStation", 
      "Xbox", 
      "Nintendo Switch", 
      "Mobile Games"
    ]
  },
  {
    id: "category",
    title: "By Category", 
    icon: Grid3X3,
    submenu: [
      "Action",
      "Adventure",
      "RPG",
      "Strategy",
      "Sports",
      "Racing",
      "Puzzle",
      "Simulation"
    ]
  },
  {
    id: "region",
    title: "By Region",
    icon: Globe,
    submenu: [
      "North America",
      "Europe",
      "Asia",
      "South America",
      "Africa",
      "Oceania"
    ]
  },
  {
    id: "extras",
    title: "Extras",
    icon: Star,
    submenu: [
      "DLC Content",
      "Season Passes",
      "Game Bundles",
      "Virtual Currency",
      "Gift Cards"
    ]
  }
];

const platformIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "PC Games": Monitor,
  "PlayStation": Tv,
  "Xbox": Tv,
  "Nintendo Switch": Gamepad2,
  "Mobile Games": Smartphone
};

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "Action": Sword,
  "Adventure": Heart,
  "RPG": Star,
  "Strategy": Brain,
  "Sports": Heart,
  "Racing": Monitor,
  "Puzzle": Puzzle,
  "Simulation": Monitor
};

export default function GamesMegaMenu({ isOpen, onClose }: GamesMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const getActiveCategoryData = () => {
    if (!activeCategory) return null;
    return gamesCategories.find(cat => cat.id === activeCategory) || null;
  };

  const getItemIcon = (itemTitle: string, categoryId: string) => {
    if (categoryId === "platform") {
      return platformIcons[itemTitle] || Monitor;
    } else if (categoryId === "category") {
      return categoryIcons[itemTitle] || Grid3X3;
    } else if (categoryId === "region") {
      return MapPin;
    } else {
      return Package;
    }
  };

  return (
    <DropdownWrapper isOpen={isOpen} onClose={onClose}>
      <div className="rounded-xl overflow-hidden">
        <div className="flex h-[450px]">
          {/* Left Column - Menu Items */}
          <div className="w-1/3 bg-slate-50 dark:bg-[#1E1E1E] p-6 border-r border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              {gamesCategories.map((category) => (
                <div
                  key={category.id}
                  className="group"
                  onMouseEnter={() => handleCategoryHover(category.id)}
                >
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-white dark:bg-[#2A2A2A] text-purple-600 dark:text-purple-400 shadow-sm'
                        : 'hover:bg-white dark:hover:bg-[#2A2A2A] hover:text-purple-600 dark:hover:text-purple-400 text-slate-700 dark:text-gray-300'
                    }`}
                  >
                    <category.icon className={`w-5 h-5 transition-colors duration-200 ${
                      activeCategory === category.id ? 'text-purple-600 dark:text-purple-400' : 'text-slate-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`} />
                    <span className={`font-medium transition-colors duration-200 text-sm ${
                      activeCategory === category.id ? 'text-purple-600 dark:text-purple-400' : 'text-slate-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`}>
                      {category.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-colors duration-200 ${
                      activeCategory === category.id ? 'text-purple-600 dark:text-purple-400' : 'text-slate-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Dynamic Content */}
          <div className="flex-1 bg-white dark:bg-[#1E1E1E] p-6">
            {getActiveCategoryData() ? (
              <div className="h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100 mb-3">
                    {getActiveCategoryData()?.title}
                  </h3>
                  <div className="w-12 h-1 bg-purple-600 rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {getActiveCategoryData()?.submenu.map((submenuItem, index) => {
                    const ItemIcon = getItemIcon(submenuItem, activeCategory!);
                    return (
                      <a
                        key={submenuItem}
                        href="#"
                        className="flex items-center px-4 py-3 text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-all duration-200 group"
                        onClick={onClose}
                      >
                        <ItemIcon className="w-4 h-4 mr-3 text-slate-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200" />
                        <span className="text-sm font-medium">{submenuItem}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gamepad2 className="w-10 h-10 text-purple-400 dark:text-purple-500" />
                  </div>
                  <p className="text-slate-500 dark:text-gray-400 text-sm font-medium mb-2">Explore Games by Category</p>
                  <p className="text-slate-400 dark:text-gray-500 text-xs">Browse by Platform, Category, Region, or Extras</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DropdownWrapper>
  );
}
