import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Gift, Filter, ChevronDown } from "lucide-react";
import Link from "next/link";

const giftCardCategories = [
  { name: "Steam Wallet", slug: "steam-wallet", count: 25 },
  { name: "PlayStation Store", slug: "psn-cards", count: 30 },
  { name: "Xbox Gift Cards", slug: "xbox-gift-cards", count: 28 },
  { name: "Nintendo eShop", slug: "nintendo-eshop", count: 22 },
  { name: "iTunes / Apple", slug: "itunes", count: 35 },
  { name: "Google Play", slug: "google-play", count: 20 },
  { name: "Amazon", slug: "amazon", count: 15 },
  { name: "Spotify", slug: "spotify", count: 8 },
  { name: "Netflix", slug: "netflix", count: 10 },
  { name: "Roblox", slug: "roblox", count: 12 },
];

const giftCardProducts = [
  {
    id: 1,
    title: "Apple iTunes Gift Card $40 USD Key UNITED STATES",
    price: 37.74,
    originalPrice: 40.0,
    currency: "GBP",
    badge: "Best Seller",
    badgeColor: "orange",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 2,
    title: "Amazon Gift Card 10 USD Key - UNITED STATES",
    price: 8.99,
    originalPrice: 10.0,
    currency: "GBP",
    badge: "Amazon",
    badgeColor: "yellow",
    stock: 1,
    stockLabel: "1 Last Items",
  },
  {
    id: 3,
    title: "Steam Wallet Gift Card 50 EUR - Europe",
    price: 44.99,
    originalPrice: 50.0,
    currency: "GBP",
    badge: "Steam",
    badgeColor: "blue",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 4,
    title: "PlayStation Store Gift Card 25 GBP - UK",
    price: 23.99,
    originalPrice: 25.0,
    currency: "GBP",
    badge: "PSN",
    badgeColor: "blue",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 5,
    title: "Xbox Gift Card 50 USD - United States",
    price: 44.99,
    originalPrice: 50.0,
    currency: "GBP",
    badge: "Xbox",
    badgeColor: "green",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 6,
    title: "Spotify Premium 12 Months ACCOUNT",
    price: 24.99,
    originalPrice: 26.99,
    currency: "GBP",
    discount: 5,
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 7,
    title: "Roblox Gift Card 25 USD - Global",
    price: 22.99,
    originalPrice: 25.0,
    currency: "GBP",
    badge: "Roblox",
    badgeColor: "red",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 8,
    title: "Google Play Gift Card 50 USD - US",
    price: 46.99,
    originalPrice: 50.0,
    currency: "GBP",
    badge: "Google",
    badgeColor: "cyan",
    stock: 100,
    stockLabel: "In stock",
  },
];

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Page Header */}
        <div className="bg-gradient-to-r from-green-500/10 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">
                  Gift Cards
                </h1>
                <p className="text-gray-500">
                  Digital gift cards for all platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                <h3 className="font-semibold text-[#1a1a1a] mb-4">Categories</h3>
                <ul className="space-y-2">
                  {giftCardCategories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/${category.slug}`}
                        className="flex items-center justify-between py-2 px-3 rounded-lg text-gray-600 hover:text-[#00d4aa] hover:bg-gray-100 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Products */}
            <div className="lg:col-span-3">
              {/* Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] rounded-lg transition-colors">
                    <Filter className="w-4 h-4" />
                    Filters
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] rounded-lg transition-colors">
                    Platform
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] rounded-lg transition-colors">
                    Region
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Sort by:</span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#1a1a1a] rounded-lg transition-colors">
                    Best Selling
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <p className="text-gray-500 mb-6">
                Showing{" "}
                <span className="text-[#1a1a1a] font-medium">{giftCardProducts.length}</span>{" "}
                gift cards
              </p>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                {giftCardProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
