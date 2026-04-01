import Link from "next/link";
import { ChevronDown } from "lucide-react";

export interface NavItem {
  name: string;
  slug: string;
}

export interface DropdownProps {
  title: string;
  items: NavItem[];
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  isHighlighted?: boolean;
  highlightIcon?: React.ComponentType<{ className?: string }>;
}

export default function Dropdown({ 
  title, 
  items, 
  icon: Icon, 
  href, 
  isHighlighted = false,
  highlightIcon: HighlightIcon
}: DropdownProps) {
  if (isHighlighted && href && HighlightIcon) {
    return (
      <Link
        href={href}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 hover:scale-105 hover:shadow-md"
      >
        <HighlightIcon className="w-4 h-4" />
        {title}
      </Link>
    );
  }

  if (href && Icon) {
    return (
      <Link
        href={href}
        className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-white transition-all duration-200"
      >
        <Icon className="w-4 h-4" />
        {title}
      </Link>
    );
  }

  if (!Icon) return null;

  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-lg hover:bg-white transition-all duration-200">
        <Icon className="w-4 h-4" />
        {title}
        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
        <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-dropdown">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${title.toLowerCase().replace(' ', '-')}/${item.slug}`}
              className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
