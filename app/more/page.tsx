import Link from "next/link";

export default function MorePage() {
  const menuItems = [
    { label: "Stories", href: "/stories", description: "Read our latest stories" },
    { label: "About Us", href: "/about", description: "Learn more about our company" },
    { label: "Support", href: "/support", description: "Get help and support" },
    { label: "Contact Us", href: "/contact", description: "Get in touch with us" },
    { label: "Orders", href: "/orders", description: "Track and manage your orders" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          More
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.label}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
