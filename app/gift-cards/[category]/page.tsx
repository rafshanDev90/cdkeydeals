import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/gift-cards/Breadcrumb';
import GiftCardProduct from '@/components/gift-cards/GiftCardProduct';
import { giftCardData } from '@/data/giftCardData';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryInfo: Record<string, { name: string; color: string; description: string }> = {
  nintendo: {
    name: "Nintendo Gift Cards",
    color: "from-red-600 via-red-700 to-red-800",
    description: "Top up your Nintendo eShop account with instant delivery"
  },
  'google-play': {
    name: "Google Play Gift Cards",
    color: "from-green-500 via-green-600 to-green-700",
    description: "Get Google Play credit for apps, games, and entertainment"
  },
  netflix: {
    name: "Netflix Gift Cards",
    color: "from-red-700 via-red-800 to-red-900",
    description: "Gift Netflix subscriptions for endless entertainment"
  },
  spotify: {
    name: "Spotify Gift Cards",
    color: "from-green-600 via-green-700 to-green-800",
    description: "Premium music streaming with Spotify gift cards"
  },
  amazon: {
    name: "Amazon Gift Cards",
    color: "from-orange-500 via-orange-600 to-orange-700",
    description: "Shop millions of products with Amazon gift cards"
  },
  apple: {
    name: "Apple Gift Cards",
    color: "from-gray-700 via-gray-800 to-gray-900",
    description: "Get apps, music, movies and more with Apple gift cards"
  }
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = params.category;
  const info = categoryInfo[category];
  
  if (!info) {
    return {
      title: 'Category Not Found - CDKeyDeals',
    };
  }

  return {
    title: `${info.name} - CDKeyDeals`,
    description: `Buy ${info.name.toLowerCase()} at best prices. Instant delivery, secure payment.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category;
  const info = categoryInfo[category];

  if (!info) {
    notFound();
  }

  // Filter products by platform name
  const platformMap: Record<string, string> = {
    nintendo: 'Nintendo',
    'google-play': 'Google Play',
    netflix: 'Netflix',
    spotify: 'Spotify',
    amazon: 'Amazon',
    apple: 'Apple'
  };

  const platformName = platformMap[category];
  const categoryProducts = giftCardData.filter(product => 
    product.platform === platformName
  );
  
  const breadcrumbItems = [
    { label: "Gift Cards", href: "/gift-cards" },
    { label: info.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-r ${info.color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/40">
              <span className="text-2xl">🎁</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                {info.name}
              </h1>
              <p className="text-white/80 text-lg">
                {info.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {categoryProducts.map((product) => (
              <GiftCardProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">
              No products available for this category yet.
            </div>
            <p className="text-gray-400">
              Check back soon or browse our other gift card categories.
            </p>
          </div>
        )}

        {/* Back to all gift cards */}
        <div className="text-center">
          <Link 
            href="/gift-cards"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            ← Back to All Gift Cards
          </Link>
        </div>
      </div>
    </div>
  );
}
