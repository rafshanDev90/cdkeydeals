"use client";

import { useState } from "react";
import MoreDropdown from "@/components/header/MoreDropdown";
import BestDealsMegaMenu from "@/components/header/BestDealsMegaMenu";

export default function TestDropdown() {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isBestDealsMegaMenuOpen, setIsBestDealsMegaMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Simulation */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[52px]">
            <div className="flex items-center gap-6">
              <span className="text-gray-600">Games</span>
              <span className="text-gray-600">Software</span>
              
              {/* Best Deals Mega Menu */}
              <div 
                onMouseEnter={() => setIsBestDealsMegaMenuOpen(true)}
                onMouseLeave={() => setIsBestDealsMegaMenuOpen(false)}
                className="flex items-center gap-1 cursor-pointer group py-2"
              >
                <span className="text-[14.5px] font-semibold text-[#1a1a1a] transition-colors group-hover:text-indigo-600">
                  Best Deals
                </span>
                <svg className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180 group-hover:text-indigo-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <MoreDropdown 
                isOpen={isMoreDropdownOpen}
                onHover={() => setIsMoreDropdownOpen(true)}
                onLeave={() => setIsMoreDropdownOpen(false)}
              />
              <span className="text-gray-600">FAQ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Best Deals Mega Menu */}
      <div 
        onMouseEnter={() => setIsBestDealsMegaMenuOpen(true)}
        onMouseLeave={() => setIsBestDealsMegaMenuOpen(false)}
      >
        <BestDealsMegaMenu isOpen={isBestDealsMegaMenuOpen} onClose={() => setIsBestDealsMegaMenuOpen(false)} />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">Mega Menu Test</h1>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Test Instructions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Deals Mega Menu</h3>
              <p className="text-gray-600">Hover over the "Best Deals" link in the navbar to test the mega menu.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Expected behavior:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Dropdown appears on hover with smooth fade-in animation</li>
                <li>4-column layout with proper spacing (px-8, py-10)</li>
                <li>Column 1: Shop Offer (Steam Keys, Epic Games, PlayStation, Xbox, etc.)</li>
                <li>Column 2: Best Deal (Under 10 Dollar, Best Discounts, etc.)</li>
                <li>Column 3: New Arrivals (New Releases, Today's Deals, etc.)</li>
                <li>Column 4: Promotions (Windows 11 Pro & Office 2024 banners)</li>
                <li>Pure white background with subtle border and shadow</li>
                <li>Professional typography with hover effects</li>
                <li>Dropdown stays open when moving mouse to menu items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
