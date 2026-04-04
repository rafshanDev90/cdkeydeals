import Link from "next/link";

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Orders</span>
        </nav>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Your Orders
        </h1>
        
        {/* Sub-headline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-12">
          Track and manage your CDKeyDeals purchases
        </h2>

        {/* Content */}
        <div className="space-y-8">
          <section>
            <p className="text-gray-600 leading-relaxed mb-6">
              View your order history, track deliveries, and manage your digital products all in one place.
            </p>
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Sign In Required</h3>
              <p className="text-gray-600 mb-6">
                Please sign in to view your order history and manage your purchases.
              </p>
              <Link 
                href="/signin"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
              >
                Sign In
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
