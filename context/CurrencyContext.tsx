"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

// Define currency interface
export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string; // Country flag emoji
  exchangeRate: number; // Rate relative to USD (1 USD = X Currency)
  locale: string; // For Intl.NumberFormat
}

// Available currencies with exchange rates (base: USD)
export const currencies: Currency[] = [
  {
    code: "USD",
    name: "US Dollar",
    symbol: "$",
    flag: "🇺🇸",
    exchangeRate: 1.0,
    locale: "en-US",
  },
  {
    code: "BDT",
    name: "Bangladeshi Taka",
    symbol: "৳",
    flag: "🇧🇩",
    exchangeRate: 110.0,
    locale: "bn-BD",
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    flag: "🇪🇺",
    exchangeRate: 0.92,
    locale: "de-DE",
  },
  {
    code: "GBP",
    name: "British Pound",
    symbol: "£",
    flag: "🇬🇧",
    exchangeRate: 0.79,
    locale: "en-GB",
  },
  {
    code: "AED",
    name: "UAE Dirham",
    symbol: "د.إ",
    flag: "🇦🇪",
    exchangeRate: 3.67,
    locale: "ar-AE",
  },
];

// Default currency
const DEFAULT_CURRENCY = currencies[1]; // BDT as default

// Context interface
interface CurrencyContextType {
  selectedCurrency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (basePriceUSD: number) => number;
  formatPrice: (basePriceUSD: number) => string;
  formatPriceWithOriginal: (
    basePriceUSD: number,
    originalPriceUSD?: number
  ) => {
    current: string;
    original?: string;
    hasDiscount: boolean;
    discountPercentage: number;
  };
}

// Create context
const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// Custom hook to use currency context
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

// Provider component
export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize from localStorage or use default
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedCurrency");
      if (saved) {
        const found = currencies.find((c) => c.code === saved);
        if (found) return found;
      }
    }
    return DEFAULT_CURRENCY;
  });

  // Save to localStorage when currency changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCurrency", selectedCurrency.code);
    }
  }, [selectedCurrency]);

  // Set currency function
  const setCurrency = useCallback((currency: Currency) => {
    setSelectedCurrency(currency);
  }, []);

  // Convert price from USD to selected currency
  const convertPrice = useCallback(
    (basePriceUSD: number): number => {
      return basePriceUSD * selectedCurrency.exchangeRate;
    },
    [selectedCurrency.exchangeRate]
  );

  // Format price with currency symbol and locale
  const formatPrice = useCallback(
    (basePriceUSD: number): string => {
      const convertedPrice = convertPrice(basePriceUSD);
      
      // Use Intl.NumberFormat for professional formatting
      return new Intl.NumberFormat(selectedCurrency.locale, {
        style: "currency",
        currency: selectedCurrency.code,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(convertedPrice);
    },
    [convertPrice, selectedCurrency]
  );

  // Format price with original price for discounts
  const formatPriceWithOriginal = useCallback(
    (
      basePriceUSD: number,
      originalPriceUSD?: number
    ): {
      current: string;
      original?: string;
      hasDiscount: boolean;
      discountPercentage: number;
    } => {
      const currentPrice = convertPrice(basePriceUSD);
      const hasDiscount = !!originalPriceUSD && originalPriceUSD > basePriceUSD;
      
      const discountPercentage = hasDiscount
        ? Math.round(
            ((originalPriceUSD! - basePriceUSD) / originalPriceUSD!) * 100
          )
        : 0;

      return {
        current: new Intl.NumberFormat(selectedCurrency.locale, {
          style: "currency",
          currency: selectedCurrency.code,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(currentPrice),
        original:
          hasDiscount && originalPriceUSD
            ? new Intl.NumberFormat(selectedCurrency.locale, {
                style: "currency",
                currency: selectedCurrency.code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(convertPrice(originalPriceUSD))
            : undefined,
        hasDiscount,
        discountPercentage,
      };
    },
    [convertPrice, selectedCurrency]
  );

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      selectedCurrency,
      setCurrency,
      convertPrice,
      formatPrice,
      formatPriceWithOriginal,
    }),
    [selectedCurrency, setCurrency, convertPrice, formatPrice, formatPriceWithOriginal]
  );

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  );
};
