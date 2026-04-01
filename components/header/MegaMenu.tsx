"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Gamepad2, Monitor, Gift, Tag, Star, TrendingUp, Clock, Shield, ChevronDown, ChevronUp } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories = [
  {
    title: "Games",
    icon: Gamepad2,
    items: [
      { name: "Steam Keys", href: "/games/steam", badge: "Popular" },
      { name: "Xbox Live Keys", href: "/games/xbox" },
      { name: "PlayStation Keys", href: "/games/playstation" },
      { name: "Nintendo Keys", href: "/games/nintendo" },
      { name: "Epic Games Keys", href: "/games/epic" },
      { name: "UPlay Keys", href: "/games/uplay" },
      { name: "Origin Keys", href: "/games/origin" },
      { name: "Battle.net Keys", href: "/games/battle-net" },
    ]
  },
  {
    title: "Software",
    icon: Monitor,
    items: [
      { name: "Windows", href: "/software/windows" },
      { name: "Microsoft Office", href: "/software/office" },
      { name: "Adobe Software", href: "/software/adobe" },
      { name: "Antivirus", href: "/software/antivirus" },
      { name: "VPN Services", href: "/software/vpn" },
      { name: "Security", href: "/software/security" },
    ]
  },
  {
    title: "Gift Cards",
    icon: Gift,
    items: [
      { name: "Steam Wallet", href: "/gift-cards/steam", badge: "Hot" },
      { name: "PlayStation Store", href: "/gift-cards/psn" },
      { name: "Xbox Gift Cards", href: "/gift-cards/xbox" },
      { name: "Nintendo eShop", href: "/gift-cards/nintendo" },
      { name: "iTunes Cards", href: "/gift-cards/itunes" },
      { name: "Google Play", href: "/gift-cards/google-play" },
      { name: "Amazon", href: "/gift-cards/amazon" },
      { name: "Spotify", href: "/gift-cards/spotify" },
    ]
  },
  {
    title: "Deals",
    icon: Tag,
    items: [
      { name: "Flash Sales", href: "/deals/flash", badge: "Limited" },
      { name: "Weekly Deals", href: "/deals/weekly" },
      { name: "Clearance", href: "/deals/clearance" },
      { name: "Bundle Deals", href: "/deals/bundles" },
      { name: "Seasonal Sales", href: "/deals/seasonal" },
    ]
  },
  {
    title: "Features",
    icon: Star,
    items: [
      { name: "New Arrivals", href: "/features/new" },
      { name: "Best Sellers", href: "/features/best-sellers" },
      { name: "Pre-orders", href: "/features/pre-orders" },
      { name: "Free Games", href: "/features/free" },
    ]
  },
  {
    title: "Support",
    icon: Shield,
    items: [
      { name: "Help Center", href: "/support/help" },
      { name: "Contact Us", href: "/support/contact" },
      { name: "FAQ", href: "/support/faq" },
      { name: "Refund Policy", href: "/support/refunds" },
    ]
  }
];

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-mega-menu]')) {
        onClose();
      }
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      checkMobile();
      window.addEventListener('resize', checkMobile);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('resize', checkMobile);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const toggleCategory = (title: string) => {
    if (isMobile) {
      setExpandedCategory(expandedCategory === title ? null : title);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Mega Menu */}
          <motion.div
            data-mega-menu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 bg-white shadow-2xl z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="py-6">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Menu Grid - Desktop */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                  {menuCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="space-y-4"
                    >
                      {/* Category Header */}
                      <div className="flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-indigo-600" />
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                          {category.title}
                        </h3>
                      </div>

                      {/* Category Items */}
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className="group flex items-center justify-between text-sm text-gray-600 hover:text-indigo-600 transition-all duration-200 hover:translate-x-1"
                              onClick={onClose}
                            >
                              <span className="group-hover:font-medium">{item.name}</span>
                              {item.badge && (
                                <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Accordion */}
                <div className="md:hidden space-y-2">
                  {menuCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="w-5 h-5 text-indigo-600" />
                          <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                            {category.title}
                          </h3>
                        </div>
                        {expandedCategory === category.title ? (
                          <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                      </button>

                      {/* Category Items */}
                      <AnimatePresence>
                        {expandedCategory === category.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="p-4 bg-white space-y-2">
                              {category.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200"
                                  onClick={onClose}
                                >
                                  <span>{item.name}</span>
                                  {item.badge && (
                                    <span className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-700 rounded-full">
                                      {item.badge}
                                    </span>
                                  )}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span>Daily Deals</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span>Flash Sales</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-600" />
                        <span>Secure Shopping</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-center">
                        View All Categories
                      </button>
                      <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 hover:scale-105 active:scale-95 text-center">
                        Browse Deals
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
