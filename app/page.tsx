import HeroSlider from "@/components/HeroSlider";
import CategoryTile from "@/components/CategoryTile";
import NewProductsSection from "@/components/NewProductsSection";
import TopProducts from "@/components/TopProducts";
import PromoBanner from "@/components/PromoBanner";
import DealsSection from "@/components/DealsSection";
import SaleBanner from "@/components/SaleBanner";
import BrandCarousel from "@/components/BrandCarousel";
import BestOffersSection from "@/components/BestOffersSection";
import PromoCarouselSection from "@/components/home/PromoCarouselSection";
import MostPopular from "@/components/MostPopular";
import TrendingNowSection from "@/components/TrendingNowSection";
import ServicesSection from "@/components/ServicesSection";
import SupportFaqSection from "@/components/SupportFaqSection";
import Newsletter from "@/components/Newsletter";
import ErrorBoundary from "@/components/ErrorBoundary";
import { getProducts, getProductTags } from "@/lib/wordpress";
import { getHomepageCategoryTiles } from "@/lib/nav-data";
import ClientOnly from "@/components/ClientOnly";

// ─── Brand image fallback mapping ──────────────────────────────────────────────
// Maps WooCommerce tag slugs → images in /public/images/brands/.
// Drop a matching .png file and it appears automatically — no code change needed.
const BRAND_IMAGE_MAP: Record<string, string> = {
  microsoft: "/images/brands/microsoft.png",
  steam: "/images/brands/steam.png",
  xbox: "/images/brands/xbox.png",
  playstation: "/images/brands/playstation.png",
  nintendo: "/images/brands/nintendo.png",
  "ea-sports": "/images/brands/ea-sports.png",
  adobe: "/images/brands/adobe.png",
  "epic-games": "/images/brands/epic-games.png",
  ubisoft: "/images/brands/ubisoft.png",
  apple: "/images/brands/apple.png",
};

// ─── Category fallback (used when WC API is unavailable) ──────────────────────
const FALLBACK_CATEGORIES = [
  { id: 1, name: "Steam Keys", icon: "steam", slug: "steam-keys", href: "/collections/steam-keys", count: 0, image: null },
  { id: 2, name: "Xbox Live Keys", icon: "xbox", slug: "xbox-keys", href: "/collections/xbox", count: 0, image: null },
  { id: 3, name: "Gift Cards", icon: "gift-card", slug: "gift-cards", href: "/collections/gift-cards", count: 0, image: null },
  { id: 4, name: "PlayStation Keys", icon: "playstation", slug: "playstation-keys", href: "/collections/playstation", count: 0, image: null },
  { id: 5, name: "UPlay", icon: "uplay", slug: "uplay", href: "/collections/game-keys", count: 0, image: null },
  { id: 6, name: "Epic Games", icon: "epic", slug: "epic-games", href: "/collections/epic-games", count: 0, image: null },
  { id: 7, name: "Nintendo", icon: "nintendo", slug: "nintendo", href: "/collections/nintendo", count: 0, image: null },
];

export default async function Home() {
  // ── Parallel data fetch for performance ──────────────────────────────────────
  const [liveProducts, liveCategories, liveTags] = await Promise.all([
    getProducts({ per_page: 20 }),
    getHomepageCategoryTiles(8),
    getProductTags({ per_page: 20 }),
  ]);

  // ── Derived display data ──────────────────────────────────────────────────────
  const displayNewProducts = liveProducts.slice(0, 8);
  const displayTopProducts = liveProducts.slice(0, 8);

  // Live WC tags → brand items; falls back to the static image map if empty.
  const brands = liveTags.length > 0
    ? liveTags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        slug: tag.slug,
        image: BRAND_IMAGE_MAP[tag.slug] ?? `/images/brands/${tag.slug}.png`,
      }))
    : Object.entries(BRAND_IMAGE_MAP).map(([slug, image], idx) => ({
        id: idx + 1,
        name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        slug,
        image,
      }));

  // Live WC categories → category tiles; falls back to static list if empty.
  const categories = liveCategories.length > 0 ? liveCategories : FALLBACK_CATEGORIES;

  return (
    <ClientOnly
      fallback={
        <div className="min-h-screen bg-background">
          <div className="max-w-7xl mx-auto bg-background">
            <div className="animate-pulse">
              <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto bg-background">
          <main>
            {/* Hero Slider */}
            <HeroSlider />

            {/* Shop by Category — live from WooCommerce */}
            <ErrorBoundary section="ShopByCategory">
              <CategoryTile categories={categories} />
            </ErrorBoundary>

            {/* New Products Section */}
            <ErrorBoundary section="NewProductsSection">
              <NewProductsSection products={displayNewProducts} />
            </ErrorBoundary>

            {/* Top Products Grid */}
            <ErrorBoundary section="TopProducts">
              <TopProducts
                title="Top Products"
                products={displayTopProducts}
                viewAllLink="/best-selling"
              />
            </ErrorBoundary>

            {/* Promo Banners */}
            <PromoBanner />

            {/* Hot Deals Section */}
            <ErrorBoundary section="DealsSection">
              <DealsSection />
            </ErrorBoundary>

            {/* Sale Marquee Banner */}
            <SaleBanner />

            {/* Shop by Brand — live from WooCommerce tags */}
            <ErrorBoundary section="BrandCarousel">
              <BrandCarousel brands={brands} />
            </ErrorBoundary>

            {/* Best Offers Section */}
            <BestOffersSection />

            {/* Promo Banner + Product Carousel Section */}
            <PromoCarouselSection />

            {/* Most Popular Section */}
            <MostPopular />

            {/* Trending Now Section */}
            <TrendingNowSection
              title="Trending Now"
              viewAllLink="/collections/trending"
            />

            {/* Services Section */}
            <ServicesSection />

            {/* Support & FAQ Section */}
            <SupportFaqSection />

            {/* Newsletter */}
            <Newsletter />
          </main>
        </div>
      </div>
    </ClientOnly>
  );
}
