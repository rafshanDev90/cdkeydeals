"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency, currencies, Currency } from "@/context/CurrencyContext";

// Country flags mapping
const countryFlags: Record<string, string> = {
  USD: "🇺🇸",
  BDT: "🇧🇩",
  EUR: "🇩🇪",
  GBP: "🇬🇧",
  AED: "🇦🇪",
};

interface CurrencyDropdownProps {
  onSelect?: (currency: Currency) => void;
}

export default function CurrencyDropdown({ onSelect }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedCurrency, setCurrency } = useCurrency();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle currency selection
  const handleSelect = (currency: Currency) => {
    setCurrency(currency);
    setIsOpen(false);
    
    // Call the optional callback to pass selection to parent
    if (onSelect) {
      onSelect(currency);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="text-lg">{countryFlags[selectedCurrency.code]}</span>
        <span>
          {selectedCurrency.code} ({selectedCurrency.symbol})
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in-0 zoom-in-95"
          role="listbox"
        >
          <div className="max-h-80 overflow-y-auto">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleSelect(currency)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  selectedCurrency.code === currency.code
                    ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
                role="option"
                aria-selected={selectedCurrency.code === currency.code}
              >
                <span className="text-xl">{countryFlags[currency.code]}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">
                    {currency.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {currency.code} {currency.symbol} • 1 USD = {currency.exchangeRate} {currency.code}
                  </div>
                </div>
                {selectedCurrency.code === currency.code && (
                  <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
