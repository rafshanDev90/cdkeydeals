import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

interface ActionButtonsProps {
  cartCount?: number;
  showMobileSearch?: boolean;
  onMobileSearchClick?: () => void;
}

export default function ActionButtons({ 
  cartCount = 0, 
  showMobileSearch = false,
  onMobileSearchClick 
}: ActionButtonsProps) {
  return (
    <div className="flex items-center gap-1">
      {/* Search Icon (Mobile) */}
      {showMobileSearch && (
        <button 
          onClick={onMobileSearchClick}
          className="md:hidden p-2.5 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <Search className="w-5 h-5" />
        </button>
      )}

      {/* Login */}
      <Link
        href="/login"
        className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105"
      >
        <User className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">Login</span>
      </Link>

      {/* Cart */}
      <Link
        href="/cart"
        className="relative flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105"
      >
        <ShoppingCart className="w-5 h-5" />
        {cartCount > 0 && (
          <span className="absolute top-0.5 right-0.5 w-5 h-5 bg-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            {cartCount}
          </span>
        )}
      </Link>
    </div>
  );
}
