"use client";

import { ChevronRight, ShoppingBag, Tag, Star, Clock } from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";

interface BestDealsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Platform data for Column 1 - Updated to match requirements
const platforms = [
  { name: "Steam Keys", icon: "🎮", description: "PC Gaming Platform" },
  { name: "Epic Games", icon: "🎯", description: "Epic Store Deals" },
  { name: "PlayStation", icon: "🎮", description: "PS4 & PS5 Games" },
  { name: "Xbox", icon: "🎲", description: "Xbox Gaming" },
  { name: "Nintendo eShop", icon: "🎮", description: "Switch Games" },
  { name: "Origin", icon: "🎯", description: "EA Games Platform" },
  { name: "Uplay", icon: "🎮", description: "Ubisoft Store" },
  { name: "GOG", icon: "🎲", description: "Good Old Games" },
];

// Categories for Column 2 - Updated to match requirements
const bestDealCategories = [
  { name: "Under 10 Dollar", icon: Tag, count: "245 items" },
  { name: "Under 25 Dollar", icon: Tag, count: "189 items" },
  { name: "Best Discounts", icon: Star, count: "67 items" },
  { name: "Clearance Sale", icon: ShoppingBag, count: "123 items" },
  { name: "Bundle Deals", icon: Star, count: "45 items" },
  { name: "Seasonal Offers", icon: Clock, count: "89 items" },
];

// New arrivals for Column 3 - Updated to match requirements
const newArrivals = [
  { name: "New Releases", badge: "NEW", count: 12 },
  { name: "Today's Deals", badge: "HOT", count: 8 },
  { name: "Early Access Games", badge: "BETA", count: 15 },
  { name: "Indie Highlights", badge: "TRENDING", count: 23 },
  { name: "AAA Titles", badge: "FEATURED", count: 6 },
  { name: "Free Weekend", badge: "FREE", count: 4 },
];

// Promotional banners for Column 4
const promotionalBanners = [
  {
    title: "Windows 11 Pro",
    subtitle: "Professional Edition",
    originalPrice: "$299",
    salePrice: "$89",
    discount: "70% OFF",
    badge: "BESTSELLER",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Office 2024",
    subtitle: "Home & Business",
    originalPrice: "$499",
    salePrice: "$149",
    discount: "70% OFF",
    badge: "LIMITED",
    gradient: "from-purple-600 to-pink-600",
  },
];

export default function BestDealsMegaMenu({ isOpen, onClose }: BestDealsMegaMenuProps) {
  return (
    <MegaMenuWrapper isOpen={isOpen} onClose={onClose}>
      <div className="bg-white border-b border-gray-100 shadow-lg">
        <div className="max-w-screen-2xl mx-auto px-8 py-10">
          <div className="grid grid-cols-4 gap-8">
            {/* Column 1: Shop Offer - Platforms */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-indigo-600" />
                  Shop Offer
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
              </div>
              
              <div className="space-y-2">
                {platforms.map((platform, index) => (
                  <a
                    key={platform.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 group"
                    onClick={onClose}
                  >
                    <span className="text-2xl">{platform.icon}</span>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">
                        {platform.name}
                      </div>
                      <div className="text-xs text-gray-500">{platform.description}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Best Deal - Categories */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-green-600" />
                  Best Deal
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
              </div>
              
              <div className="space-y-2">
                {bestDealCategories.map((category, index) => (
                  <a
                    key={category.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-green-50 transition-all duration-200 group"
                    onClick={onClose}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <category.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">
                        {category.name}
                      </div>
                      <div className="text-xs text-gray-500">{category.count}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: New Arrivals */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  New Arrivals
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-full"></div>
              </div>
              
              <div className="space-y-2">
                {newArrivals.map((arrival, index) => (
                  <a
                    key={arrival.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-orange-50 transition-all duration-200 group"
                    onClick={onClose}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 text-sm group-hover:text-orange-600 transition-colors">
                          {arrival.name}
                        </span>
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                          arrival.badge === 'NEW' ? 'bg-blue-100 text-blue-700' :
                          arrival.badge === 'HOT' ? 'bg-red-100 text-red-700' :
                          arrival.badge === 'BETA' ? 'bg-purple-100 text-purple-700' :
                          arrival.badge === 'TRENDING' ? 'bg-green-100 text-green-700' :
                          arrival.badge === 'FEATURED' ? 'bg-orange-100 text-orange-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {arrival.badge}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">{arrival.count} items</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 4: Promotional Banners */}
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Promotions</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {promotionalBanners.map((banner, index) => (
                  <div
                    key={banner.title}
                    className="relative group"
                  >
                    <div className={`relative bg-gradient-to-br ${banner.gradient} p-6 rounded-2xl text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]`}>
                      {/* Badge */}
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold">
                        {banner.badge}
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h4 className="text-xl font-bold mb-1">{banner.title}</h4>
                        <p className="text-sm opacity-90 mb-3">{banner.subtitle}</p>
                        
                        {/* Pricing */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-lg line-through opacity-70">{banner.originalPrice}</span>
                          <span className="text-2xl font-bold">{banner.salePrice}</span>
                          <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">
                            {banner.discount}
                          </span>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="w-full bg-white text-gray-900 font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-sm">
                          Shop Now
                        </button>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
