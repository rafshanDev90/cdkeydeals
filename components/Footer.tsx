"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/cdkeydealsofficial/",
    icon: <Facebook size={18} fill="currentColor" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/cdkeydealsofficial/",
    icon: <Instagram size={18} />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/cdkeydealss",
    icon: <Twitter size={18} fill="currentColor" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/cdkeydeals/about/",
    icon: <Linkedin size={18} fill="currentColor" />,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/cdkeydealsofficial/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.739.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

const footerSections: FooterSection[] = [
  {
    title: "By Platform",
    links: [
      { name: "Steam Keys", href: "/collections/steam-keys" },
      { name: "Epic Games", href: "/collections/epic-games" },
      { name: "PlayStation (PSN)", href: "/collections/playstation" },
      { name: "Xbox", href: "/collections/xbox" },
      { name: "Nintendo Switch", href: "/collections/nintendo" },
      { name: "EA App", href: "/collections/ea-app" },
      { name: "Ubisoft Connect", href: "/collections/ubisoft" },
      { name: "Battle.net", href: "/collections/battle-net" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "Epic Games", href: "/collections/epic-games" },
      { name: "Gaming Gift Cards", href: "/collections/gift-cards" },
      { name: "PlayStation Keys", href: "/collections/ps-keys" },
      { name: "Steam Keys", href: "/collections/steam-keys" },
      { name: "UPlay", href: "/collections/ubisoft" },
      { name: "Xbox Live Keys", href: "/collections/xbox-live" },
    ],
  },
  {
    title: "Get to Know Us",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Help & Support", href: "/support" },
      { name: "Terms and Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Instant Digital Delivery", href: "/instant-delivery" },
      { name: "Safe & Secure Checkout", href: "/safe-secure-checkout" },
    ],
  },
  {
    title: "Let Us Help You",
    links: [
      { name: "FAQs", href: "/faq" },
      { name: "Your Account", href: "/account" },
      { name: "Your Orders", href: "/account/orders" },
      { name: "Shipping Policy", href: "/shipping-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

// Accordion Section Component for Mobile
function AccordionSection({
  section,
  isOpen,
  onToggle,
}: {
  section: FooterSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 lg:border-none">
      {/* Mobile: Clickable Header with Chevron */}
      <button
        onClick={onToggle}
        className="lg:hidden flex items-center justify-between w-full py-4 text-left group"
        aria-expanded={isOpen}
      >
        <h4 className="font-bold text-[#1a1a1a] text-[15px]">{section.title}</h4>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop: Static Header */}
      <h4 className="hidden lg:block font-bold text-[#1a1a1a] mb-5 text-[15px]">
        {section.title}
      </h4>

      {/* Collapsible Content */}
      <div
        className={`lg:block overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
        }`}
      >
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-[#666666] text-[14px] hover:text-[#6343D8] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  // State to track which accordion sections are open on mobile
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <footer className="bg-white pt-12 pb-6 font-sans border-t border-gray-100 relative">
      {/* 1. Social Media Bar (Top Center) */}
      <div className="flex justify-center gap-3 mb-12">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#6343D8] hover:scale-110 transition-all duration-300 ease-in-out"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* 2. Logo & Description Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              {/* Custom Logo based on image */}
              <div className="text-[#6343D8] flex items-center gap-1">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-[-10deg]"
                >
                  <path d="M12 2a10 10 0 1 0 10 10" />
                  <path d="M12 2a10 10 0 1 1-10 10" />
                </svg>
                <span className="text-2xl font-bold tracking-tight">
                  cdkey<span className="font-medium">Deals</span>
                </span>
              </div>
            </div>
            <p className="text-[#666666] text-[14px] leading-relaxed max-w-xs">
              Save more on games and software with CDKeyDeals. Buy authentic
              digital keys and gift cards with instant email delivery and secure
              checkout.
            </p>
          </div>

          {/* Accordion Sections - Mobile: Stacked with accordion / Desktop: Grid */}
          <div className="lg:col-span-4">
            {/* Mobile: Vertical Accordion Layout */}
            <div className="lg:hidden">
              {footerSections.map((section) => (
                <AccordionSection
                  key={section.title}
                  section={section}
                  isOpen={openSections.includes(section.title)}
                  onToggle={() => toggleSection(section.title)}
                />
              ))}
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-bold text-[#1a1a1a] mb-5 text-[15px]">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-[#666666] text-[14px] hover:text-[#6343D8] transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-[#666666] text-[13px] text-center sm:text-left">
            <span>© 2026 cdkeydeals.com. Powered by Shopify</span>
            <div className="flex items-center gap-1 font-medium text-black">
               <span>Bangladesh (BDT ৳)</span>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[#666666] text-[13px]">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/refund-policy" className="hover:underline">Refund Policy</Link>
            <Link href="/terms" className="hover:underline">Terms Of Service</Link>
            <Link href="/shipping-policy" className="hover:underline">Shipping Policy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#6343D8] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform relative">
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">1</span>
        </button>
      </div>
    </footer>
  );
}