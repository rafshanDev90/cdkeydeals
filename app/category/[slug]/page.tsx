import { Metadata } from "next";
import { getProducts, getWCCategories } from "@/lib/wordpress";
import { Product } from "@/types/product";
import CategoryPageClient from "./CategoryPageClient";

export const dynamic = "force-dynamic";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${categoryName} | CDKeyDeals`,
    description: `Browse ${categoryName} products at the best prices. Instant digital delivery, secure payments, 24/7 support.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  // Try to find the WC category by slug for precise filtering
  const wcCategories = await getWCCategories();
  const matchedCategory = wcCategories.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase()
  );

  let products: Product[] = [];

  if (matchedCategory) {
    // Fetch products for this exact WooCommerce category
    const allProducts = await getProducts({ per_page: 100 });
    products = allProducts.filter(
      (p) => p.category?.toLowerCase() === matchedCategory.name.toLowerCase()
    );
  } else {
    // Fallback: search by slug/name match
    const allProducts = await getProducts({ per_page: 100 });
    const lowerSlug = slug.toLowerCase().replace(/-/g, " ");
    products = allProducts.filter(
      (p) =>
        p.category?.toLowerCase().includes(lowerSlug) ||
        p.tags?.some((t) => t.toLowerCase().includes(lowerSlug))
    );
  }

  return (
    <CategoryPageClient
      categoryName={matchedCategory?.name || categoryName}
      slug={slug}
      products={products}
    />
  );
}
