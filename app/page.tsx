"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/header/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CategoryTile from "@/components/CategoryTile";
import NewProductsSection from "@/components/NewProductsSection";
import ProductGrid from "@/components/ProductGrid";
import PromoBanner from "@/components/PromoBanner";
import DealsSection from "@/components/DealsSection";
import SaleBanner from "@/components/SaleBanner";
import BrandCarousel from "@/components/BrandCarousel";
import BestOffersSection from "@/components/BestOffersSection";
import TrendingNow from "@/components/TrendingNow";
import MostPopular from "@/components/MostPopular";
import ServicesSection from "@/components/ServicesSection";
import CustomerAssistanceFAQ from "@/components/CustomerAssistanceFAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Static data for the UI
const categories = [
  { id: 1, name: "Steam Keys", icon: "steam", slug: "steam-keys" },
  { id: 2, name: "Xbox Live Keys", icon: "xbox", slug: "xbox-keys" },
  { id: 3, name: "Gaming Gift Cards", icon: "gift-card", slug: "gift-cards" },
  { id: 4, name: "PlayStation Keys", icon: "playstation", slug: "playstation-keys" },
  { id: 5, name: "UPlay", icon: "uplay", slug: "uplay" },
  { id: 6, name: "Epic Games", icon: "epic", slug: "epic-games" },
  { id: 7, name: "Nintendo", icon: "nintendo", slug: "nintendo" },
];

const newProducts = [
  {
    id: 11,
    title: "YouTube Premium 12 Months Subscription",
    price: 29.99,
    originalPrice: 40.99,
    currency: "GBP",
    discount: 26,
  },
  {
    id: 12,
    title: "Xbox Game Pass Ultimate - 1 Month Non-Stackable",
    price: 8.99,
    originalPrice: 13.99,
    currency: "GBP",
    discount: 35,
  },
  {
    id: 13,
    title: "Microsoft Office 2024 Pro Plus LTSC",
    price: 34.99,
    originalPrice: 79.99,
    currency: "GBP",
    badge: "Best Seller",
  },
  {
    id: 14,
    title: "Xbox Game Pass Core (Essential) 3 Months",
    price: 14.99,
    originalPrice: 19.99,
    currency: "GBP",
    discount: 25,
  },
  {
    id: 15,
    title: "Spotify Premium 12 Months ACCOUNT",
    price: 24.99,
    originalPrice: 26.99,
    currency: "GBP",
    discount: 5,
  },
  {
    id: 16,
    title: "Microsoft Windows 11 Pro 1 pc Key",
    price: 12.99,
    originalPrice: 99.99,
    currency: "GBP",
    discount: 87,
  },
  {
    id: 17,
    title: "EA SPORTS FC 26 - 5900 FC Points (Xbox One / Xbox Series X|S)",
    price: 39.99,
    originalPrice: 42.99,
    currency: "GBP",
    discount: 5,
    badge: "Xbox Live",
  },
  {
    id: 18,
    title: "Old School RuneScape 1 Month Membership (PC)",
    price: 6.99,
    originalPrice: 10.99,
    currency: "GBP",
    badge: "Mega Sale",
  },
];

const topProducts = [
  {
    id: 1,
    title: "MS Office 2024 Pro Plus & Windows 11 Pro Combo",
    price: 39.99,
    originalPrice: 89.99,
    currency: "GBP",
    badge: "Hot Sale",
    badgeColor: "red",
    stock: 1,
    stockLabel: "1 Last Items",
  },
  {
    id: 2,
    title: "PUBG Mobile 60 UC Official Website Key Global",
    price: 1.84,
    originalPrice: 2.99,
    currency: "GBP",
    badge: "Under 10 Dollar",
    badgeColor: "green",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 3,
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
    id: 4,
    title: "Age of Empires II: Definitive Edition Dynasties of India Global Key",
    price: 9.48,
    originalPrice: 14.99,
    currency: "GBP",
    badge: "Games",
    badgeColor: "blue",
    stock: 1,
    stockLabel: "1 Last Items",
  },
  {
    id: 5,
    title: "Adobe Creative Cloud All Apps 100GB for 1 year Personal Upgrade",
    price: 80.99,
    originalPrice: 129.99,
    currency: "GBP",
    badge: "Adobe Software",
    badgeColor: "purple",
    stock: 100,
    stockLabel: "In stock",
  },
  {
    id: 6,
    title: "EA SPORTS FC 26 1050 FC Points Key - Xbox One / Xbox Series X|S Global",
    price: 7.7,
    originalPrice: 9.99,
    currency: "GBP",
    badge: "Under 10 Dollar",
    badgeColor: "green",
    stock: 1,
    stockLabel: "1 Last Items",
  },
  {
    id: 7,
    title: "ARC Raiders Steam key Instant Delivery",
    price: 23.1,
    originalPrice: 34.99,
    currency: "GBP",
    badge: "Games",
    badgeColor: "blue",
    stock: 1,
    stockLabel: "1 Last Items",
  },
  {
    id: 8,
    title: "Amazon Gift Card 10 USD Key - UNITED STATES",
    price: 8.99,
    originalPrice: 10.0,
    currency: "GBP",
    badge: "Amazon",
    badgeColor: "yellow",
    stock: 1,
    stockLabel: "1 Last Items",
  },
];

const brands = [
  { id: 1, name: "Microsoft", slug: "microsoft" },
  { id: 2, name: "Steam", slug: "steam" },
  { id: 3, name: "Xbox", slug: "xbox" },
  { id: 4, name: "PlayStation", slug: "playstation" },
  { id: 5, name: "Nintendo", slug: "nintendo" },
  { id: 6, name: "EA Sports", slug: "ea-sports" },
  { id: 7, name: "Adobe", slug: "adobe" },
  { id: 8, name: "Epic Games", slug: "epic-games" },
  { id: 9, name: "Ubisoft", slug: "ubisoft" },
  { id: 10, name: "Apple", slug: "apple" },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const navCategories = {
    games: [
      { name: "Steam Games", slug: "steam-games" },
      { name: "Xbox Games", slug: "xbox-games" },
      { name: "PlayStation Games", slug: "playstation-games" },
      { name: "Nintendo Games", slug: "nintendo-games" },
    ],
    software: [
      { name: "Microsoft Office", slug: "microsoft-office" },
      { name: "Windows OS", slug: "windows-os" },
      { name: "Adobe Creative Cloud", slug: "adobe-creative-cloud" },
      { name: "Antivirus", slug: "antivirus" },
    ],
    giftCards: [
      { name: "Steam Gift Cards", slug: "steam-gift-cards" },
      { name: "Xbox Gift Cards", slug: "xbox-gift-cards" },
      { name: "PlayStation Gift Cards", slug: "playstation-gift-cards" },
      { name: "iTunes Gift Cards", slug: "itunes-gift-cards" },
    ],
    bestDeals: [
      { name: "Today's Deals", slug: "todays-deals" },
      { name: "Weekly Deals", slug: "weekly-deals" },
      { name: "Flash Sales", slug: "flash-sales" },
      { name: "Clearance", slug: "clearance" },
    ],
    more: [
      { name: "About Us", slug: "about-us" },
      { name: "Contact", slug: "contact" },
      { name: "Support", slug: "support" },
      { name: "Terms of Service", slug: "terms-of-service" },
    ],
  };

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1320px] mx-auto bg-white">
        <Header />
        <Navbar 
          isDarkMode={isDarkMode}
          onDarkModeToggle={handleDarkModeToggle}
          navCategories={navCategories}
        />

        <main>
          {/* Hero Slider */}
          <HeroSlider />

          {/* Shop by Category */}
          <CategoryTile categories={categories} />

          {/* New Products Section (Horizontal Scroll) */}
          <NewProductsSection products={newProducts} />

          {/* Top Products Grid */}
          <ProductGrid
            title="Top Products"
            products={topProducts}
            viewAllLink="/best-selling"
            columns={4}
          />

          {/* Promo Banners */}
          <PromoBanner />

          {/* Hot Deals Section */}
          <DealsSection />

          {/* Sale Marquee Banner */}
          <SaleBanner />

          {/* Shop by Brand */}
          <BrandCarousel brands={brands} />

          {/* Best Offers Section */}
          <BestOffersSection />

          {/* Trending Now Section */}
          <TrendingNow />

          {/* Most Popular Section */}
          <MostPopular />

          {/* Services Section */}
          <ServicesSection />

          {/* Customer Assistance & FAQ Section */}
          <CustomerAssistanceFAQ />

          {/* Newsletter */}
          <Newsletter />
        </main>

        <Footer />
      </div>
    </div>
  );
}
