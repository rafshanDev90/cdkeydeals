import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/gift-cards/Breadcrumb';
import GiftCardProduct from '@/components/gift-cards/GiftCardProduct';
import { giftCardData } from '@/data/giftCardData';

export const metadata: Metadata = {
  title: 'Xbox Gift Cards - CDKeyDeals',
  description: 'Buy Xbox gift cards at best prices. Instant delivery, secure payment.',
};

export default function XboxGiftCardsPage() {
  const xboxProducts = giftCardData.filter(product => product.platform === 'Xbox');
  
  const breadcrumbItems = [
    { label: "Gift Cards", href: "/gift-cards" },
    { label: "Xbox Gift Cards" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/40">
              <span className="text-2xl">🎮</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">
                Xbox Gift Cards
              </h1>
              <p className="text-green-100 text-lg">
                Top up your Xbox account with instant delivery
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {xboxProducts.map((product) => (
            <GiftCardProduct key={product.id} product={product} />
          ))}
        </div>

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
