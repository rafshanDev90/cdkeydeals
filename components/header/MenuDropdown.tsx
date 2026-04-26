"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  ChevronRight,
  Flame,
  Gamepad2,
  Gift,
  HelpCircle,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import type { NavCategoryNode } from "@/lib/nav-data";

interface MenuDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  menuTree: NavCategoryNode[];
}

// Icon mapping helper
const getCategoryIcon = (slug: string) => {
  if (slug.includes('game') || slug.includes('steam') || slug.includes('xbox') || slug.includes('playstation')) return Gamepad2;
  if (slug.includes('software') || slug.includes('windows') || slug.includes('office')) return Monitor;
  if (slug.includes('gift')) return Gift;
  return Flame;
};

// Smart grouping logic for subcategories
const groupSubcategories = (children: NavCategoryNode["children"]) => {
  const groups: Record<string, typeof children> = {
    "By Platform": [],
    "By Region": [],
    "Deals": [],
    "By Category": [],
  };

  const platformKeywords = ['steam', 'epic', 'playstation', 'psn', 'xbox', 'nintendo', 'ea', 'ubisoft', 'battle.net'];
  const regionKeywords = ['global', 'usa', 'us', 'eu', 'uk', 'europe'];
  const dealsKeywords = ['sale', 'discount', 'deal', 'offer', 'clearance', 'release'];

  children.forEach(child => {
    // Decode HTML entities in name for cleaner display
    const rawName = child.name;
    const name = rawName.replace(/&amp;/g, '&').replace(/&#038;/g, '&');
    const childNode = { ...child, name };

    const slug = childNode.slug.toLowerCase();
    const nameLower = childNode.name.toLowerCase();

    if (platformKeywords.some(kw => slug.includes(kw) || nameLower.includes(kw))) {
      groups["By Platform"].push(childNode);
    } else if (regionKeywords.some(kw => slug.includes(kw) || nameLower.includes(kw))) {
      groups["By Region"].push(childNode);
    } else if (dealsKeywords.some(kw => slug.includes(kw) || nameLower.includes(kw))) {
      groups["Deals"].push(childNode);
    } else {
      groups["By Category"].push(childNode);
    }
  });

  return groups;
};

export default function MenuDropdown({ isOpen, onClose, buttonRef, menuTree }: MenuDropdownProps) {
  const [activeParent, setActiveParent] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set first category as active by default if none is active
  useEffect(() => {
    if (isOpen && !activeParent && menuTree.length > 0) {
      const gameCat = menuTree.find(c => c.slug.includes('game')) || menuTree[0];
      if (gameCat) setActiveParent(gameCat.id);
    }
  }, [isOpen, activeParent, menuTree]);

  // Handle escape key and outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
        return;
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose, buttonRef]);

  if (!isOpen) return null;

  const activeCategory = menuTree.find(c => c.id === activeParent);
  const subcategoryGroups = activeCategory ? groupSubcategories(activeCategory.children) : null;

  // Define column order matching the screenshot
  const columnOrder = ["By Platform", "By Category", "By Region", "Deals"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.15 }}
          className="absolute left-0 right-0 top-full z-50 bg-white dark:bg-[#121212] border-t border-b border-gray-200 dark:border-gray-800 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] dark:shadow-none"
        >
          {/* Main Container constrained to max-w-7xl like the header */}
          <div className="max-w-7xl mx-auto flex h-[500px]">
            
            {/* Left Sidebar - Main Categories */}
            <div className="w-[260px] py-6 pr-6 flex flex-col gap-1">
              {menuTree.map((category) => {
                const Icon = getCategoryIcon(category.slug);
                const isActive = activeParent === category.id;
                // Decode entities
                const catName = category.name.replace(/&amp;/g, '&').replace(/&#038;/g, '&');
                
                return (
                  <button
                    key={category.id}
                    onMouseEnter={() => setActiveParent(category.id)}
                    onClick={() => {
                      window.location.href = category.href;
                      onClose();
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? "bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${category.slug.includes('deal') || category.slug.includes('sale') ? "text-orange-500" : ""}`} />
                      <span className="text-[14px]">{catName}</span>
                    </span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-gray-400 opacity-0 group-hover:opacity-100"}`} />
                  </button>
                );
              })}
              
              {/* Deals Tab - Force present if missing */}
              {!menuTree.some(c => c.slug.includes('deal') || c.slug.includes('sale')) && (
                <button
                  onMouseEnter={() => setActiveParent(-1)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeParent === -1 
                      ? "bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-[14px]">Deals</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeParent === -1 ? "text-indigo-600" : "text-gray-400"}`} />
                </button>
              )}
            </div>

            {/* Right Content Area - Subcategories & Promo */}
            <div className="flex-1 py-8 pl-12 pr-6 border-l border-gray-100 dark:border-gray-800 flex justify-between gap-12">
              
              {/* Columns Grid */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {activeParent === -1 ? (
                  // Static Deals content
                  <div className="col-span-1">
                    <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-5 tracking-tight">Hot Deals</h3>
                    <div className="flex flex-col space-y-3.5">
                      <Link href="/sale" onClick={onClose} className="text-[14px] font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Flash Sale</Link>
                      <Link href="/best-deals" onClick={onClose} className="text-[14px] font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Under $10</Link>
                      <Link href="/collections/best-seller" onClick={onClose} className="text-[14px] font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors">Top Rated</Link>
                      <Link href="/sale" onClick={onClose} className="text-[14px] font-medium text-indigo-500 hover:text-indigo-700 flex items-center gap-1 mt-2">
                        Shop All <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ) : subcategoryGroups ? (
                  // Map through predefined column order
                  columnOrder.map((groupName) => {
                    const items = subcategoryGroups[groupName];
                    if (!items || items.length === 0) return null;
                    
                    return (
                      <div key={groupName} className="col-span-1">
                        <h3 className="text-[15px] font-bold text-gray-900 dark:text-white mb-5 tracking-tight">{groupName}</h3>
                        <div className="flex flex-col space-y-3.5">
                          {items.slice(0, 8).map(item => (
                            <Link 
                              key={item.id} 
                              href={item.href} 
                              onClick={onClose}
                              className="text-[14px] font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                          
                          <Link href={activeCategory?.href || "#"} onClick={onClose} className="text-[14px] font-medium text-indigo-500 hover:text-indigo-600 flex items-center gap-1 mt-2 transition-colors">
                            Shop All <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : null}
              </div>

              {/* Far Right Area (Promo + Help Widget) */}
              <div className="w-[300px] shrink-0 flex flex-col justify-between">
                
                {/* Promo Banner matching screenshot */}
                <Link 
                  href="/collections/xbox"
                  onClick={onClose}
                  className="block rounded-xl overflow-hidden group relative h-[180px] shadow-sm"
                >
                  {/* Green Background */}
                  <div className="absolute inset-0 bg-[#0e7a0d] transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Banner Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <div className="flex items-center gap-3">
                      {/* Xbox Logo SVG */}
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.87 14.83l-2.43-3.66-2.58 3.66H2.94l3.77-5.11-3.63-4.83h2.3l2.25 3.25 2.37-3.25h2.21l-3.55 4.8 3.73 5.14h-2.26z" />
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-3xl font-light tracking-widest leading-none">XBOX</span>
                        <span className="text-[18px] font-light leading-tight opacity-90">Live Keys</span>
                      </div>
                    </div>
                    <span className="absolute bottom-4 left-4 font-bold text-sm tracking-widest">XBOX</span>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
