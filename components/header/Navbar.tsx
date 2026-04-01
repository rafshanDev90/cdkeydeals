import { MapPin, Moon, TrendingUp, HelpCircle, BookOpen, MoreHorizontal, Flame, ChevronDown } from "lucide-react";
import { NavItem } from "./Dropdown";

interface NavbarProps {
  isDarkMode: boolean;
  onDarkModeToggle: () => void;
  navCategories: {
    games: NavItem[];
    software: NavItem[];
    giftCards: NavItem[];
    bestDeals: NavItem[];
    more: NavItem[];
  };
}

export default function Navbar({ isDarkMode, onDarkModeToggle, navCategories }: NavbarProps) {
  return (
    <div className="hidden lg:block w-full border-b border-gray-200 bg-white">
      {/* Container e max-w না দিয়ে w-full এবং px-6 ব্যবহার করা হয়েছে মেনুগুলোকে দুই সাইডে সরানোর জন্য */}
      <div className="w-full px-6">
        <div className="flex items-center justify-between h-[52px]">
          
          {/* LEFT SIDE: Navigation Links */}
          <nav className="flex items-center gap-6">
            {/* Sale Badge - স্ক্রিনশটের মতো হলুদ ব্যাকগ্রাউন্ড */}
            <div className="flex items-center bg-[#FFD700] px-3 py-1.5 rounded-md cursor-pointer hover:bg-[#f2cc00] transition-colors group">
              <Flame className="w-4 h-4 mr-1.5 fill-black" />
              <span className="text-[14px] font-bold text-black tracking-tight">Sale</span>
            </div>

            {/* Menu Items with Arrows */}
            <div className="flex items-center gap-5">
              <NavItem title="Games" hasDropdown />
              <NavItem title="Software" hasDropdown />
              <NavItem title="Gift Cards" hasDropdown />
              <NavItem title="Best Deals" hasDropdown />
              <NavItem title="Best Seller" />
              <NavItem title="FAQ" hasDropdown />
              <NavItem title="Blog" hasDropdown />
              <NavItem title="More" hasDropdown />
            </div>
          </nav>

          {/* RIGHT SIDE: Utilities */}
          <div className="flex items-center gap-8">
            {/* Currency/Region Selector */}
            <button className="flex items-center gap-2 text-[14px] font-medium text-gray-700 hover:text-indigo-600 transition-colors">
              <span>Bangladesh (BDT ৳)</span>
              <MapPin className="w-4 h-4 text-gray-500" />
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={onDarkModeToggle}
              className="flex items-center gap-2 text-[14px] font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              <span>Dark Mode</span>
              <Moon className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable NavItem component to keep the code clean
 */
function NavItem({ title, hasDropdown }: { title: string; hasDropdown?: boolean }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer group">
      <span className="text-[14.5px] font-semibold text-[#1a1a1a] group-hover:text-indigo-600 transition-colors">
        {title}
      </span>
      {hasDropdown && (
        <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-indigo-600 transition-transform group-hover:rotate-180" />
      )}
    </div>
  );
}