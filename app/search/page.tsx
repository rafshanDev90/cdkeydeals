import { getProducts } from "@/lib/wordpress";
import { Product } from "@/types/product";
import SearchClient from "./SearchClient";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search Products | CDKeyDeals",
  description: "Search for the best deals on game keys, software licenses, and gift cards.",
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() || "";

  let results: Product[] = [];

  if (query) {
    // Fetch all products and filter client-side
    // WooCommerce v3 supports ?search= parameter
    const allProducts = await getProducts({ per_page: 100 });
    const lowerQuery = query.toLowerCase();
    results = allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(lowerQuery) ||
        p.category?.toLowerCase().includes(lowerQuery) ||
        p.platform?.toLowerCase().includes(lowerQuery) ||
        p.tags?.some((t) => t.toLowerCase().includes(lowerQuery))
    );
  }

  return <SearchClient query={query} initialResults={results} />;
}
