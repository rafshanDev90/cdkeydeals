import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CollectionSlugClient from './CollectionSlugClient';
import { getProducts, getCategoryBySlug, getProductsByCategory } from '@/lib/wordpress';
import { Platform } from '@/types/product';

// Platform slug to display name mapping (Legacy fallback)
export const platformSlugMap: Record<string, { name: string; platform: Platform | string }> = {
  'steam-keys': { name: 'Steam Keys', platform: 'Steam' },
  'steam': { name: 'Steam', platform: 'Steam' },
  'xbox': { name: 'Xbox', platform: 'Xbox' },
  'xbox-live': { name: 'Xbox Live', platform: 'Xbox' },
  'playstation': { name: 'PlayStation', platform: 'PlayStation' },
  'ps-keys': { name: 'PlayStation Keys', platform: 'PlayStation' },
  'nintendo': { name: 'Nintendo', platform: 'Nintendo' },
  'nintendo-switch': { name: 'Nintendo Switch', platform: 'Nintendo' },
  'epic-games': { name: 'Epic Games', platform: 'Epic Games' },
  'epic': { name: 'Epic Games', platform: 'Epic Games' },
  'ea-app': { name: 'EA App', platform: 'Other' },
  'ubisoft': { name: 'Ubisoft Connect', platform: 'Other' },
  'battle-net': { name: 'Battle.net', platform: 'Other' },
  'microsoft': { name: 'Microsoft', platform: 'Microsoft' },
  'apple': { name: 'Apple', platform: 'Apple' },
  'google-play': { name: 'Google Play', platform: 'Google Play' },
  'netflix': { name: 'Netflix', platform: 'Netflix' },
  'spotify': { name: 'Spotify', platform: 'Spotify' },
  'adobe': { name: 'Adobe', platform: 'Adobe' },
  'gift-cards': { name: 'Gift Cards', platform: 'Gift Cards' },
  'software': { name: 'Software', platform: 'Software' },
  'subscriptions': { name: 'Subscriptions', platform: 'Subscriptions' },
  'game-keys': { name: 'Game Keys', platform: 'Game Keys' },
};

// Generate dynamic metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // 1. Try to find dynamic category in WooCommerce
  const wcCategory = await getCategoryBySlug(slug);
  
  if (wcCategory) {
    return {
      title: `${wcCategory.name} - Buy Cheap ${wcCategory.name} Deals | CDKeyDeals`,
      description: `Browse ${wcCategory.count}+ ${wcCategory.name} deals at unbeatable prices. Instant delivery, secure checkout, and 24/7 customer support.`,
      openGraph: {
        title: `${wcCategory.name} - Buy Cheap ${wcCategory.name} Deals | CDKeyDeals`,
        description: `Browse ${wcCategory.count}+ ${wcCategory.name} deals at unbeatable prices. Instant delivery and secure checkout.`,
        type: 'website',
        url: `https://cdkeydeals.com/collections/${slug}`,
      },
    };
  }

  // 2. Fallback to legacy map
  const platformInfo = platformSlugMap[slug];
  if (platformInfo) {
    return {
      title: `${platformInfo.name} - Buy Cheap ${platformInfo.name} Deals | CDKeyDeals`,
      description: `Browse ${platformInfo.name} deals at unbeatable prices. Instant delivery, secure checkout, and 24/7 customer support.`,
    };
  }

  return {
    title: 'Collection Not Found | CDKeyDeals',
  };
}

export default async function CollectionSlugPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. Try to fetch dynamic category from WooCommerce
  const wcCategory = await getCategoryBySlug(slug);
  
  if (wcCategory) {
    const products = await getProductsByCategory(wcCategory.id, { per_page: 50 });
    
    return (
      <CollectionSlugClient 
        slug={slug}
        platformName={wcCategory.name}
        platform={wcCategory.name} // Using category name as platform for filter labels
        initialProducts={products}
      />
    );
  }

  // 2. Legacy Fallback: check hardcoded map
  const platformInfo = platformSlugMap[slug];
  
  if (platformInfo) {
    const allProducts = await getProducts({ maxProducts: 500 });
    const platformProducts = allProducts.filter(
      (product: any) => product.platform === platformInfo.platform
    );

    return (
      <CollectionSlugClient 
        slug={slug}
        platformName={platformInfo.name}
        platform={platformInfo.platform}
        initialProducts={platformProducts}
      />
    );
  }

  // 3. If still nothing found, return 404
  notFound();
}
