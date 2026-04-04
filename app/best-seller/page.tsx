import { Metadata } from 'next';
import BestSellerClient from './BestSellerClient';

export const metadata: Metadata = {
  title: 'Best Seller Deals | CDKeyDeals Software, Games & Gift Cards',
  description: 'Shop the Best Seller collection at CDKeyDeals: top-selling software, games, gift cards, productivity & graphics tools. Trusted picks, great prices.',
  keywords: 'best seller, top deals, software deals, game keys, gift cards, cdkeydeals',
  openGraph: {
    title: 'Best Seller Deals | CDKeyDeals',
    description: 'Shop the Best Seller collection at CDKeyDeals: top-selling software, games, gift cards, productivity & graphics tools. Trusted picks, great prices.',
    type: 'website',
  },
};

export default function BestSellerPage() {
  return <BestSellerClient />;
}
