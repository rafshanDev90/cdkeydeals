import { Metadata } from "next";
import { getProducts } from "@/lib/wordpress";
import { Product } from "@/types/product";
import BrandPageClient from "./BrandPageClient";

export const dynamic = "force-dynamic";

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brandName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${brandName} Products | CDKeyDeals`,
    description: `Browse the best deals on ${brandName} products. Instant delivery, secure payments.`,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brandName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Fetch all products and filter by brand / platform / tag matching
  const allProducts = await getProducts({ per_page: 100 });
  const lowerBrand = brandName.toLowerCase();

  const brandProducts = allProducts.filter(
    (p) =>
      p.platform?.toLowerCase() === lowerBrand ||
      p.tags?.some((t) => t.toLowerCase() === lowerBrand) ||
      p.title.toLowerCase().includes(lowerBrand)
  );

  return <BrandPageClient brandName={brandName} slug={slug} products={brandProducts} />;
}
