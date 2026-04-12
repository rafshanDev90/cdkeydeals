"use client";

import { useCurrency, currencies } from "@/context/CurrencyContext";
import PriceDisplay from "@/components/ui/PriceDisplay";

/**
 * Currency Demo Page
 * 
 * This page demonstrates the currency conversion system in action.
 * Visit this page to test all currency features.
 * 
 * Route: /currency-demo
 */

// Sample products with USD base prices
const sampleProducts = [
  {
    id: 1,
    name: "Windows 11 Pro License",
    priceUSD: 29.99,
    originalPriceUSD: 99.99,
    description: "Genuine Windows 11 Pro digital license key with lifetime activation",
  },
  {
    id: 2,
    name: "Microsoft Office 2024 Professional",
    priceUSD: 34.99,
    originalPriceUSD: 79.99,
    description: "Complete Office suite with Word, Excel, PowerPoint, and more",
  },
  {
    id: 3,
    name: "Adobe Creative Cloud All Apps",
    priceUSD: 299.99,
    originalPriceUSD: 599.99,
    description: "Access to all Adobe apps including Photoshop, Illustrator, Premiere Pro",
  },
  {
    id: 4,
    name: "Steam Wallet Gift Card $50",
    priceUSD: 45.99,
    originalPriceUSD: 50.00,
    description: "Add funds to your Steam wallet for games and content",
  },
  {
    id: 5,
    name: "Xbox Game Pass Ultimate - 3 Months",
    priceUSD: 24.99,
    originalPriceUSD: 44.99,
    description: "Access to 100+ games with Xbox Game Pass Ultimate",
  },
  {
    id: 6,
    name: "Norton 360 Deluxe Antivirus",
    priceUSD: 14.99,
    originalPriceUSD: 39.99,
    description: "Comprehensive antivirus protection for up to 5 devices",
  },
];

export default function CurrencyDemoPage() {
  const {
    selectedCurrency,
    setCurrency,
    convertPrice,
    formatPrice,
    formatPriceWithOriginal,
  } = useCurrency();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Currency Converter Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Test the global currency conversion system
          </p>
        </div>

        {/* Current Currency Info */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Current Currency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Selected</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {selectedCurrency.flag} {selectedCurrency.name}
              </p>
              <p className="text-lg text-blue-600 dark:text-blue-400">
                {selectedCurrency.code} {selectedCurrency.symbol}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">Exchange Rate</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                1 USD = {selectedCurrency.exchangeRate} {selectedCurrency.code}
              </p>
            </div>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Switch Currency
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => setCurrency(currency)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedCurrency.code === currency.code
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-400"
                }`}
              >
                <div className="text-2xl mb-2">{currency.flag}</div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">
                  {currency.code}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {currency.symbol}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Price Conversion Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Price Conversion Examples
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    USD Price
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    Converted ({selectedCurrency.code})
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">
                    Formatted
                  </th>
                </tr>
              </thead>
              <tbody>
                {[10, 25, 50, 99.99, 199.99, 299.99].map((price) => {
                  const converted = convertPrice(price);
                  const formatted = formatPrice(price);
                  return (
                    <tr
                      key={price}
                      className="border-b border-gray-100 dark:border-gray-700"
                    >
                      <td className="py-3 px-4 text-gray-900 dark:text-white">
                        ${price.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-mono">
                        {converted.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-blue-600 dark:text-blue-400 font-bold">
                        {formatted}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Product Cards with PriceDisplay */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Product Cards (Using PriceDisplay Component)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {product.description}
                  </p>

                  {/* PriceDisplay Component */}
                  <PriceDisplay
                    price={product.priceUSD}
                    originalPrice={product.originalPriceUSD}
                    priceClassName="text-2xl font-bold text-gray-900 dark:text-white"
                    originalPriceClassName="text-base text-gray-500 dark:text-gray-400 line-through"
                    discountBadgeClassName="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full"
                  />

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Usage Example */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced Usage (Manual Formatting)
          </h2>
          <div className="space-y-4">
            {sampleProducts.slice(0, 3).map((product) => {
              const { current, original, hasDiscount, discountPercentage } =
                formatPriceWithOriginal(product.priceUSD, product.originalPriceUSD);

              return (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-3 mt-2">
                      {hasDiscount && original && (
                        <span className="text-gray-500 dark:text-gray-400 line-through">
                          {original}
                        </span>
                      )}
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {current}
                      </span>
                      {hasDiscount && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          Save {discountPercentage}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-3">
            How to Use
          </h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800 dark:text-blue-400">
            <li>Click any currency button above to switch currencies</li>
            <li>Notice how all prices update instantly</li>
            <li>Check the Header currency dropdown - it's synchronized!</li>
            <li>Refresh the page - your selection is saved in localStorage</li>
            <li>Use the PriceDisplay component in your product cards</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
