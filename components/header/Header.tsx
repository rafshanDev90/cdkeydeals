"use client";

import { useState, useEffect } from "react";
import { Menu, ShoppingCart, Heart, MapPin, Moon, Flame, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import AccountDropdown from "./AccountDropdown";
import SideCart, { CartProvider, useCart } from "@/components/cart/SideCart";
import BestDealsMegaMenu from "./BestDealsMegaMenu";
import GiftCardsDropdown from "./GiftCardsDropdown";
import BlogDropdown from "./BlogDropdown";
import GamesMegaMenu from "./GamesMegaMenu";
import MoreDropdown from "./MoreDropdown";
import FAQDropdown from "./FAQDropdown";

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGiftCardsDropdownOpen, setIsGiftCardsDropdownOpen] = useState(false);
  const [isBestDealsMegaMenuOpen, setIsBestDealsMegaMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isGamesMegaMenuOpen, setIsGamesMegaMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isFAQDropdownOpen, setIsFAQDropdownOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMegaMenuOpen(false);
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Side: Hamburger + Logo */}
            <div className="flex items-center gap-4">
              {/* Hamburger Menu */}
              <button
                onClick={handleMenuToggle}
                className={`relative p-2 rounded-lg transition-all duration-200 ${
                  isMegaMenuOpen 
                    ? "bg-indigo-600 text-white" 
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Logo */}
              <Logo />
            </div>

            {/* Center: Search Bar */}
            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <SearchBar />
            </div>

            {/* Right Side: Action Icons */}
            <div className="flex items-center gap-2">
              {/* Wishlist */}
              <button className="p-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Heart className="w-5 h-5" />
              </button>

              {/* Account */}
              <AccountDropdown />

              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="hidden lg:block w-full border-b border-gray-200 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 relative">
          <div className="flex items-center justify-between h-[52px]">
            
            {/* LEFT SIDE: Navigation Links */}
            <nav className="flex items-center gap-6">
              {/* Sale Badge */}
              <div className="flex items-center bg-[#FFD700] px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#f2cc00] transition-colors group">
                <Flame className="w-4 h-4 mr-1.5 fill-black" />
                <span className="text-[14px] font-bold text-black tracking-tight">Sale</span>
              </div>

              {/* Menu Items */}
              <div className="flex items-center gap-5">
                <NavItem 
                  title="Games" 
                  hasDropdown 
                  onMouseEnter={() => setIsGamesMegaMenuOpen(true)}
                  onMouseLeave={() => setIsGamesMegaMenuOpen(false)}
                />
                <NavItem 
                  title="Software" 
                  hasDropdown 
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                />
                <div 
                  onMouseEnter={() => setIsGiftCardsDropdownOpen(true)}
                  onMouseLeave={() => setIsGiftCardsDropdownOpen(false)}
                >
                  <GiftCardsDropdown 
                    isOpen={isGiftCardsDropdownOpen}
                    onToggle={() => setIsGiftCardsDropdownOpen(true)}
                    onClose={() => setIsGiftCardsDropdownOpen(false)}
                  />
                </div>
                <NavItem 
                  title="Best Deals" 
                  hasDropdown 
                  onMouseEnter={() => setIsBestDealsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsBestDealsMegaMenuOpen(false)}
                />
                <Link href="/best-seller" className="flex items-center gap-1 cursor-pointer group py-2">
                  <span className="text-[14.5px] font-semibold text-[#1a1a1a] transition-colors group-hover:text-indigo-600">
                    Best Seller
                  </span>
                </Link>
                <div 
                  onMouseEnter={() => setIsFAQDropdownOpen(true)}
                  onMouseLeave={() => setIsFAQDropdownOpen(false)}
                >
                  <FAQDropdown 
                    isOpen={isFAQDropdownOpen}
                    onToggle={() => setIsFAQDropdownOpen(true)}
                    onClose={() => setIsFAQDropdownOpen(false)}
                  />
                </div>
                <BlogDropdown 
                  isOpen={isBlogDropdownOpen}
                  onHover={() => setIsBlogDropdownOpen(true)}
                  onLeave={() => setIsBlogDropdownOpen(false)}
                />
                <MoreDropdown 
                  isOpen={isMoreDropdownOpen}
                  onHover={() => setIsMoreDropdownOpen(true)}
                  onLeave={() => setIsMoreDropdownOpen(false)}
                />
              </div>
            </nav>

            {/* RIGHT SIDE: Utilities */}
            <div className="flex items-center gap-8">
              {/* Currency/Region Selector */}
              <button className="flex items-center gap-2 text-[14px] font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                <span>Bangladesh (BDT ৳)</span>
                <MapPin className="w-4 h-4 text-gray-500" />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={handleDarkModeToggle}
                className="flex items-center gap-2 text-[14px] font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
                <Moon className={`w-4 h-4 ${isDarkMode ? "fill-indigo-600 text-indigo-600" : "text-gray-500"}`} />
              </button>
            </div>
          </div>

          {/* Games Mega Menu */}
          <div 
            onMouseEnter={() => setIsGamesMegaMenuOpen(true)}
            onMouseLeave={() => setIsGamesMegaMenuOpen(false)}
          >
            <GamesMegaMenu isOpen={isGamesMegaMenuOpen} onClose={() => setIsGamesMegaMenuOpen(false)} />
          </div>

          {/* Mega Menu */}
          <div 
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
          </div>

          {/* Best Deals Mega Menu */}
          <div 
            onMouseEnter={() => setIsBestDealsMegaMenuOpen(true)}
            onMouseLeave={() => setIsBestDealsMegaMenuOpen(false)}
          >
            <BestDealsMegaMenu isOpen={isBestDealsMegaMenuOpen} onClose={() => setIsBestDealsMegaMenuOpen(false)} />
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={handleMenuClose} />

      {/* Side Cart */}
      <SideCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

// Main Header component with CartProvider
export default function Header() {
  return (
    <CartProvider>
      <HeaderContent />
    </CartProvider>
  );
}

/**
 * Reusable NavItem component
 */
function NavItem({ 
  title, 
  hasDropdown, 
  onMouseEnter, 
  onMouseLeave 
}: { 
  title: string; 
  hasDropdown?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const isGames = title === "Games";
  
  return (
    <div 
      className="flex items-center gap-1 cursor-pointer group py-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`text-[14.5px] font-semibold text-[#1a1a1a] transition-colors ${
        isGames ? 'group-hover:text-purple-600' : 'group-hover:text-indigo-600'
      }`}>
        {title}
      </span>
      {hasDropdown && (
        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180 ${
          isGames ? 'group-hover:text-purple-600' : 'group-hover:text-indigo-600'
        }`} />
      )}
    </div>
  );
}
