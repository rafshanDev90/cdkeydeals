import Link from "next/link";
import ProductCard, { Product } from "./ProductCard";

interface ExtraSectionsProps {
  topProducts: Product[];
  deals: Product[];
  trendingProducts: Product[];
  brands: Array<{
    id: number;
    name: string;
    logo: string;
    slug: string;
  }>;
}

export default function ExtraSections({ 
  topProducts, 
  deals, 
  trendingProducts, 
  brands 
}: ExtraSectionsProps) {
  return (
    <div className="space-y-16">
      {/* Top Products Section */}
      {topProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Products</h2>
              <p className="text-gray-600">Our most popular and highly-rated products</p>
            </div>
            <Link 
              href="/collections/top-products"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Deals Section */}
      {deals.length > 0 && (
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Hot Deals</h2>
              <p className="text-gray-600">Limited time offers you don't want to miss</p>
            </div>
            <Link 
              href="/collections/deals"
              className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
            >
              View All Deals
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Trending Now Section */}
      {trendingProducts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Trending Now</h2>
              <p className="text-gray-600">Products that are gaining popularity</p>
            </div>
            <Link 
              href="/collections/trending"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Shop by Brands Section */}
      {brands.length > 0 && (
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Shop by Brands</h2>
            <p className="text-gray-600">Find products from your favorite brands</p>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/brands/${brand.slug}`}
                  className="group flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    {/* Brand logo placeholder */}
                    <div className="w-10 h-10 bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600 uppercase">
                        {brand.name.slice(0, 2)}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {brand.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
