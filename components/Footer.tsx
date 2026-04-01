"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
  Headphones,
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Games", href: "/games" },
    { name: "Software", href: "/software" },
    { name: "Gift Cards", href: "/gift-cards" },
    { name: "Best Deals", href: "/best-deals" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Best Selling", href: "/best-selling" },
  ],
  categories: [
    { name: "Steam Keys", href: "/steam-keys" },
    { name: "Xbox Live Keys", href: "/xbox-keys" },
    { name: "PlayStation Keys", href: "/playstation-keys" },
    { name: "Nintendo Keys", href: "/nintendo" },
    { name: "Windows", href: "/windows" },
    { name: "Microsoft Office", href: "/microsoft-office" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Track Order", href: "/track-order" },
    { name: "Returns", href: "/returns" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Affiliates", href: "/affiliates" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "DMCA", href: "/dmca" },
  ],
};

const paymentMethods = [
  "Visa",
  "Mastercard",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Crypto",
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Trust Badges */}
      <div className="border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a]">Secure Shopping</h4>
                <p className="text-sm text-gray-500">
                  256-bit SSL encryption
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
                <CreditCard className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a]">Secure Payments</h4>
                <p className="text-sm text-gray-500">
                  Multiple payment options
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#00d4aa]/10 rounded-full flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6 text-[#00d4aa]" />
              </div>
              <div>
                <h4 className="font-semibold text-[#1a1a1a]">24/7 Support</h4>
                <p className="text-sm text-gray-500">
                  Dedicated customer service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#00d4aa] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CD</span>
              </div>
              <span className="text-xl font-bold text-[#1a1a1a]">
                CDKey<span className="text-[#00d4aa]">Deals</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Your trusted source for game keys, software licenses, and gift
              cards at unbeatable prices.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-gray-200 hover:bg-[#00d4aa] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-200 hover:bg-[#00d4aa] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-200 hover:bg-[#00d4aa] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-200 hover:bg-[#00d4aa] text-gray-600 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#00d4aa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#00d4aa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#00d4aa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#00d4aa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-[#1a1a1a] mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-[#00d4aa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} CDKeyDeals. All rights reserved.
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500 mr-2">We accept:</span>
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center"
                >
                  <span className="text-[8px] text-gray-600 font-medium">
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
