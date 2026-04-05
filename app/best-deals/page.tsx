"use client";

import { useState } from "react";
import CategoryCard from "@/components/best-deals/CategoryCard";

// Category data with icons and titles
const categories = [
  { id: 1, icon: "🎮", title: "PlayStation Keys", href: "/playstation-keys" },
  { id: 2, icon: "🔐", title: "Password Manager", href: "/password-manager" },
  { id: 3, icon: "🎴", title: "PSN Gift Cards", href: "/psn-gift-cards" },
  { id: 4, icon: "📄", title: "PDF Editor", href: "/pdf-editor" },
  { id: 5, icon: "📊", title: "Office Utilities", href: "/office-utilities" },
  { id: 6, icon: "🔑", title: "Office Keys", href: "/office-keys" },
  { id: 7, icon: "🎮", title: "Nintendo Gift Cards", href: "/nintendo-gift-cards" },
  { id: 8, icon: "🎯", title: "Nintendo", href: "/nintendo" },
  { id: 9, icon: "✨", title: "New Releases", href: "/new-releases" },
  { id: 10, icon: "🎬", title: "Netflix", href: "/netflix" },
  { id: 11, icon: "🖥️", title: "Microsoft Server", href: "/microsoft-server" },
  { id: 12, icon: "🛡️", title: "Malware Removal", href: "/malware-removal" },
  { id: 13, icon: "⬇️", title: "Internet Download Manager", href: "/idm" },
  { id: 14, icon: "🔧", title: "IDM and Utilities", href: "/idm-utilities" },
  { id: 15, icon: "🔥", title: "Hot Sale", href: "/hot-sale" },
  { id: 16, icon: "🎨", title: "Graphic Design Tools", href: "/graphic-design" },
  { id: 17, icon: "📱", title: "Google Play", href: "/google-play" },
  { id: 18, icon: "🌍", title: "Global", href: "/global" },
  { id: 19, icon: "🎁", title: "Gift Cards", href: "/gift-cards" },
  { id: 20, icon: "🎮", title: "Gaming Gift Cards", href: "/gaming-gift-cards" },
  { id: 21, icon: "🎲", title: "Games", href: "/games" },
];

export default function BestDealsPage() {
  const [displayedCategories, setDisplayedCategories] = useState(categories.slice(0, 12));
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const currentLength = displayedCategories.length;
      const nextBatch = categories.slice(currentLength, currentLength + 9);
      setDisplayedCategories([...displayedCategories, ...nextBatch]);
      setIsLoading(false);
    }, 500);
  };

  const hasMore = displayedCategories.length < categories.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best Deals
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover amazing deals on games, software, and gift cards. Save big on your favorite digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 md:gap-8">
          {displayedCategories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              href={category.href}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className={`
                px-8 py-3 text-base font-medium text-gray-700 
                border border-gray-300 rounded-lg
                hover:border-gray-400 hover:text-gray-900
                hover:bg-gray-50
                transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                disabled:opacity-50 disabled:cursor-not-allowed
                ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                'Load More'
              )}
            </button>
          </div>
        )}

        {/* No more categories message */}
        {!hasMore && displayedCategories.length > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              You've reached the end of our categories. Check back soon for new deals!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
