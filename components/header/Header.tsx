"use client";

import { useState, useEffect } from "react";
import { Menu, Heart, MapPin, Moon, Flame, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MegaMenu from "./MegaMenu";
import AccountDropdown from "./AccountDropdown";
import CartIcon from "@/components/cart/CartIcon";
import GiftCardsDropdown from "./GiftCardsDropdown";
import BlogDropdown from "./BlogDropdown";
import GamesMegaMenu from "./GamesMegaMenu";
import MoreDropdown from "./MoreDropdown";
import FAQDropdown from "./FAQDropdown";
import MobileMegaMenu from "./MobileMegaMenu";

function HeaderContent() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGiftCardsDropdownOpen, setIsGiftCardsDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isGamesMegaMenuOpen, setIsGamesMegaMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isFAQDropdownOpen, setIsFAQDropdownOpen] = useState(false);

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
      {/* Main Header — NOT sticky */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Left Side: Logo + Hamburger Menu Button */}
            <div className="flex items-center gap-3">
              {/* Logo */}
              <Logo />

              {/* Hamburger Menu Button with "Menu" label */}
              <button
                onClick={handleMenuToggle}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  isMegaMenuOpen
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
                aria-label="Toggle menu"
              >
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </button>
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
              <CartIcon />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <div className="hidden lg:block w-full border-b border-gray-200 bg-white relative">
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
                <Link href="/best-deals" className="flex items-center gap-1 cursor-pointer group py-2">
                  <span className="text-[14.5px] font-semibold text-[#1a1a1a] transition-colors group-hover:text-indigo-600">
                    Best Deals
                  </span>
                </Link>
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
            className="relative"
            onMouseEnter={() => setIsGamesMegaMenuOpen(true)}
            onMouseLeave={() => setIsGamesMegaMenuOpen(false)}
          >
            <GamesMegaMenu isOpen={isGamesMegaMenuOpen} onClose={() => setIsGamesMegaMenuOpen(false)} />
          </div>

          {/* Software Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
          </div>

        </div>
      </div>

      {/* Hamburger Mega Menu (mobile / hamburger trigger) */}
      <MobileMegaMenu isOpen={isMegaMenuOpen} onClose={handleMenuClose} />
    </>
  );
}

// Main Header component
export default function Header() {
  return <HeaderContent />;
}

/**
 * Reusable NavItem component
 */
function NavItem({
  title,
  hasDropdown,
  onMouseEnter,
  onMouseLeave,
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
      <span
        className={`text-[14.5px] font-semibold text-[#1a1a1a] transition-colors ${
          isGames ? "group-hover:text-purple-600" : "group-hover:text-indigo-600"
        }`}
      >
        {title}
      </span>
      {hasDropdown && (
        <ChevronDown
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180 ${
            isGames ? "group-hover:text-purple-600" : "group-hover:text-indigo-600"
          }`}
        />
      )}
    </div>
  );
}