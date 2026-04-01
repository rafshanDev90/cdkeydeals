"use client";

import { useState, useEffect } from "react";
import { Menu, ShoppingCart, Heart } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import AccountDropdown from "./AccountDropdown";
import SideCart, { CartProvider, useCart } from "@/components/cart/SideCart";

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
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
