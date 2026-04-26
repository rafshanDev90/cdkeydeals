"use client";

/**
 * HeaderClient — the fully interactive header shell.
 *
 * Receives `navData` (plain serializable JSON) from the DynamicHeader Server
 * Component. All event handlers (onClick, onToggle, onHover …) are created
 * here, inside the Client Component boundary.
 *
 * ✅ No functions ever cross the Server→Client boundary.
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Moon, Sun, Flame } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import AccountDropdown from "./AccountDropdown";
import CartIcon from "@/components/cart/CartIcon";
import GiftCardsDropdown from "./GiftCardsDropdown";
import BestDealsDropdown from "./BestDealsDropdown";
import BlogDropdown from "./BlogDropdown";
import GamesDropdown from "./GamesDropdown";
import SoftwareDropdown from "./SoftwareDropdown";
import MoreDropdown from "./MoreDropdown";
import FAQDropdown from "./FAQDropdown";
import MobileMegaMenu from "./MobileMegaMenu";
import MenuDropdown from "./MenuDropdown";
import CurrencyDropdown from "./CurrencyDropdown";
import type { HeaderNavData } from "@/lib/nav-data";

// ─── Props ───────────────────────────────────────────────────────────────────

interface HeaderClientProps {
  /** Fully serializable nav data produced by the Server Component. */
  navData: HeaderNavData;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function HeaderClient({ navData }: HeaderClientProps) {
  const { gameItems, softwareItems, giftCardItems } = navData;

  // ── Theme ──────────────────────────────────────────────────────────────────
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // ── Sticky header ──────────────────────────────────────────────────────────
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = 0;
    const threshold = 300;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > threshold) {
        setIsSticky(true);
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsSticky(false);
        setIsVisible(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Dropdown state ─────────────────────────────────────────────────────────
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isGamesOpen, setIsGamesOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const [isGiftCardsOpen, setIsGiftCardsOpen] = useState(false);
  const [isBestDealsOpen, setIsBestDealsOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // ── Handlers (defined once, stable references via useCallback) ─────────────
  const handleDarkModeToggle = useCallback(
    () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    [resolvedTheme, setTheme],
  );

  // Closing all dropdowns when clicking outside or pressing Escape is handled
  // inside each child dropdown component using their own useEffect hooks.
  // HeaderClient only manages the open/close boolean states.

  return (
    <>
      {/* ── Main Header ──────────────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className={`w-full bg-white dark:bg-[#1E1E1E] shadow-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300 z-50 ${isSticky ? "fixed top-0 left-0 right-0 shadow-lg animate-slide-in-header" : "relative"
          }`}
        style={{ animationDuration: "300ms" }}
      >
        <div className="max-w-7xl mx-auto py-2">
          <div className="flex items-center justify-between h-16">
            {/* Logo + Hamburger */}
            <div className="flex items-center gap-8">
              <Logo width={240} height={40} />
              <button
                ref={menuButtonRef}
                id="menu-toggle"
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setIsMegaMenuOpen(prev => !prev);
                  } else {
                    setIsMenuDropdownOpen(prev => !prev);
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 ml-2"
                aria-label={(isMegaMenuOpen || isMenuDropdownOpen) ? "Close menu" : "Toggle menu"}
                aria-expanded={isMegaMenuOpen || isMenuDropdownOpen}
              >
                {(isMegaMenuOpen || isMenuDropdownOpen) ? <X className="w-4 h-8" /> : <Menu className="w-4 h-8" />}
                <span>{(isMegaMenuOpen || isMenuDropdownOpen) ? "Close" : "Menu"}</span>
              </button>
            </div>

            {/* Search */}
            <div className="hidden md:block flex-1 max-w-4xl mx-8">
              <SearchBar />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <AccountDropdown />
              <CartIcon />
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <SearchBar />
          </div>

        </div>

        {/* ── Desktop Dynamic Mega Menu ───────────────────────────────────── */}
        <MenuDropdown
          isOpen={isMenuDropdownOpen}
          onClose={() => setIsMenuDropdownOpen(false)}
          buttonRef={menuButtonRef}
          menuTree={navData.menuTree}
        />
      </header>

      {/* ── Navigation Bar ────────────────────────────────────────────────── */}
      <div
        className={`hidden lg:block w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1E1E1E] relative transition-all duration-300 ${isSticky ? "opacity-0 pointer-events-none h-0 overflow-hidden border-0" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto py-2">
          <div className="flex items-center justify-between h-[52px]">
            {/* Nav Links */}
            <nav className="flex items-center gap-6" aria-label="Main navigation">
              {/* Sale */}
              <Link
                href="/sale"
                className="flex items-center bg-[#FFD700] px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#f2cc00] transition-colors group"
              >
                <Flame className="w-4 h-4 mr-1.5 fill-black" />
                <span className="text-sm font-bold text-black tracking-tight">Sale</span>
              </Link>

              {/* Games — receives live WooCommerce items */}
              <GamesDropdown
                isOpen={isGamesOpen}
                onToggle={() => setIsGamesOpen(prev => !prev)}
                onClose={() => setIsGamesOpen(false)}
                dynamicItems={gameItems}
              />

              {/* Software — receives live WooCommerce items */}
              <SoftwareDropdown
                isOpen={isSoftwareOpen}
                onToggle={() => setIsSoftwareOpen(prev => !prev)}
                onClose={() => setIsSoftwareOpen(false)}
                dynamicItems={softwareItems}
              />

              {/* Gift Cards — receives live WooCommerce items */}
              <GiftCardsDropdown
                isOpen={isGiftCardsOpen}
                onToggle={() => setIsGiftCardsOpen(prev => !prev)}
                onClose={() => setIsGiftCardsOpen(false)}
                dynamicItems={giftCardItems}
              />

              {/* Best Deals */}
              <BestDealsDropdown
                isOpen={isBestDealsOpen}
                onToggle={() => setIsBestDealsOpen(prev => !prev)}
                onClose={() => setIsBestDealsOpen(false)}
              />

              {/* Best Seller */}
              <Link
                href="/collections/best-seller"
                className="flex items-center gap-1 cursor-pointer group py-2"
              >
                <span className="text-[14.5px] font-semibold text-[#1a1a1a] dark:text-gray-200 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  Best Seller
                </span>
              </Link>

              {/* FAQ */}
              <FAQDropdown
                isOpen={isFAQOpen}
                onToggle={() => setIsFAQOpen(prev => !prev)}
                onClose={() => setIsFAQOpen(false)}
              />

              {/* Blog */}
              <BlogDropdown
                isOpen={isBlogOpen}
                onHover={() => setIsBlogOpen(true)}
                onLeave={() => setIsBlogOpen(false)}
              />

              {/* More */}
              <MoreDropdown
                isOpen={isMoreOpen}
                onHover={() => setIsMoreOpen(true)}
                onLeave={() => setIsMoreOpen(false)}
              />
            </nav>

            {/* Utilities */}
            <div className="flex items-center gap-8">
              <CurrencyDropdown />

              {mounted && (
                <button
                  id="dark-mode-toggle"
                  onClick={handleDarkModeToggle}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
                >
                  <span>{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-500" />
                  ) : (
                    <Moon className="w-4 h-4 text-gray-600" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hamburger Mega Menu (mobile / all-categories trigger) ─────────── */}
      <MobileMegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        navData={navData}
      />
    </>
  );
}
