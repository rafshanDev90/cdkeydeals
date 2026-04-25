"use client";

import { useState, useEffect } from "react";
import { 
  Monitor, 
  Gamepad2, 
  Gift,
  ChevronRight,
  X,
  Flame,
  ShoppingBag,
  Tag,
  Clock,
  LayoutGrid
} from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import Link from "next/link";
import type { HeaderNavData } from "@/lib/nav-data";

interface MobileMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navData?: HeaderNavData;
}

// Icon mapping helper
const getCategoryIcon = (slug: string) => {
  if (slug.includes('game')) return Gamepad2;
  if (slug.includes('software')) return Monitor;
  if (slug.includes('gift')) return Gift;
  return LayoutGrid;
};

const bestDealsCategories = [
  {
    id: "shop-offer",
    title: "Shop Offer",
    icon: ShoppingBag,
    items: [
      { name: "Steam Keys", href: "/collections/games" },
      { name: "Epic Games", href: "/collections/games" },
      { name: "PlayStation (PSN)", href: "/collections/games" },
      { name: "Xbox", href: "/collections/games" },
      { name: "Nintendo Switch", href: "/collections/games" },
    ]
  },
  {
    id: "best-deal",
    title: "Best Deal",
    icon: Tag,
    items: [
      { name: "Under 10 Dollar", href: "/best-deals" },
      { name: "Best Discounts", href: "/best-deals" },
      { name: "Clearance Sale", href: "/sale" },
    ]
  }
];

export default function MobileMegaMenu({ isOpen, onClose, navData }: MobileMegaMenuProps) {
  const [activeTab, setActiveTab] = useState<string>('best-deals');
  const [activeSubId, setActiveSubId] = useState<number | string | null>(null);

  // Set initial active sub-category when tab changes
  useEffect(() => {
    if (activeTab === 'best-deals') {
      setActiveSubId('shop-offer');
    } else {
      const parentId = parseInt(activeTab);
      const parent = navData?.menuTree.find(p => p.id === parentId);
      if (parent && parent.children.length > 0) {
        setActiveSubId(parent.children[0].id);
      } else {
        setActiveSubId(null);
      }
    }
  }, [activeTab, navData]);

  const menuTree = navData?.menuTree || [];

  return (
    <MegaMenuWrapper isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col h-full bg-white dark:bg-[#1E1E1E]">
        
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800 bg-indigo-600">
          <h2 className="text-white font-bold">Categories</h2>
          <button
            onClick={onClose}
            className="p-1.5 bg-white/10 text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Layout: Left Sidebar for Tabs, Right for content */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Sidebar - Tabs */}
          <div className="w-[100px] border-r border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-[#161616] overflow-y-auto pb-20">
            <div className="flex flex-col">
              
              {/* Best Deals Tab */}
              <button
                onClick={() => setActiveTab('best-deals')}
                className={`p-4 flex flex-col items-center gap-1 transition-all border-b border-gray-100 dark:border-gray-800 ${
                  activeTab === 'best-deals' 
                    ? "bg-white dark:bg-[#1E1E1E] text-orange-600" 
                    : "text-gray-500"
                }`}
              >
                <Flame className={`w-6 h-6 ${activeTab === 'best-deals' ? "animate-pulse" : ""}`} />
                <span className="text-[10px] font-black uppercase text-center leading-tight">Deals</span>
              </button>

              {/* Dynamic Tabs from menuTree */}
              {menuTree.map((category) => {
                const Icon = getCategoryIcon(category.slug);
                const isActive = activeTab === category.id.toString();
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id.toString())}
                    className={`p-4 flex flex-col items-center gap-1 transition-all border-b border-gray-100 dark:border-gray-800 ${
                      isActive 
                        ? "bg-white dark:bg-[#1E1E1E] text-indigo-600 border-r-2 border-r-indigo-600" 
                        : "text-gray-500"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-[10px] font-black uppercase text-center leading-tight truncate w-full">
                      {category.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 overflow-y-auto pb-20 p-4">
            
            {activeTab === 'best-deals' ? (
              <div className="space-y-6">
                {bestDealsCategories.map(section => (
                  <div key={section.id}>
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <section.icon className="w-3 h-3" /> {section.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {section.items.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 text-sm font-semibold transition-colors"
                        >
                          {item.name}
                          <ChevronRight className="w-4 h-4 text-gray-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {(() => {
                  const parentId = parseInt(activeTab);
                  const parent = menuTree.find(p => p.id === parentId);
                  if (!parent) return null;
                  return (
                    <>
                      <div className="mb-6">
                        <Link 
                          href={parent.href} 
                          onClick={onClose}
                          className="flex items-center justify-between p-4 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                        >
                          <div>
                            <p className="text-[10px] font-black uppercase opacity-60">View All</p>
                            <p className="text-lg font-black">{parent.name}</p>
                          </div>
                          <LayoutGrid className="w-6 h-6 opacity-40" />
                        </Link>
                      </div>

                      <div>
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Sub-Categories</h3>
                        <div className="grid grid-cols-1 gap-2">
                          {parent.children.length > 0 ? (
                            parent.children.map(child => (
                              <Link
                                key={child.id}
                                href={child.href}
                                onClick={onClose}
                                className="flex items-center justify-between p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-900 text-sm font-semibold transition-colors"
                              >
                                <span>{child.name}</span>
                                <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-500">{child.count}</span>
                              </Link>
                            ))
                          ) : (
                            <p className="text-xs text-gray-400 italic text-center py-10">No sub-categories available.</p>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
