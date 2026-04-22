import { getProducts } from "@/lib/wordpress";
import MostPopular from "@/components/MostPopular";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Most Popular Products - CdkeyDeals",
  description: "Discover our most popular digital game keys, software licenses, and gift cards. Shop the best-selling products at unbeatable prices.",
  openGraph: {
    title: "Most Popular Products - CdkeyDeals",
    description: "Discover our most popular digital game keys, software licenses, and gift cards. Shop the best-selling products at unbeatable prices.",
    type: "website",
  },
};

export default async function MostPopularPage() {
  // Fetch all popular products without limit
  const popularProducts = await getProducts({ 
    per_page: 100, // Get a large number to show all products
    orderby: "popularity", 
    order: "desc" 
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Most Popular Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling digital game keys, software licenses, and gift cards. 
            These are the products our customers love the most.
          </p>
        </div>

        {/* Most Popular Section - Full Product List */}
        <MostPopular
          title="All Popular Products"
          products={popularProducts}
          viewAllLink={undefined} // No "View All" button on this page
        />
      </div>
    </div>
  );
}
