"use client";

import { useState } from "react";
import { 
  Monitor, 
  Palette, 
  Shield, 
  Download, 
  ChevronRight,
  X
} from "lucide-react";
import MegaMenuWrapper from "./MegaMenuWrapper";

interface MobileMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  submenu: string[];
}

const softwareCategories: Category[] = [
  {
    id: "microsoft",
    title: "Microsoft Software",
    icon: Monitor,
    submenu: ["Windows Keys", "Office Keys", "Project & Visio", "SQL Server", "Microsoft Server"]
  },
  {
    id: "creative",
    title: "Creative & Productivity",
    icon: Palette,
    submenu: ["Adobe Creative Suite", "Graphics Design", "Video Editing", "Photo Editing", "Office Tools"]
  },
  {
    id: "security",
    title: "Security Software",
    icon: Shield,
    submenu: ["Antivirus", "Firewall", "VPN Services", "Password Managers", "Encryption Tools"]
  },
  {
    id: "utilities",
    title: "Utilities & Download Tools",
    icon: Download,
    submenu: ["System Utilities", "File Managers", "Download Managers", "Backup Tools", "Recovery Software"]
  }
];

export default function MobileMegaMenu({ isOpen, onClose }: MobileMegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const getActiveCategoryData = () => {
    if (!activeCategory) return null;
    return softwareCategories.find(cat => cat.id === activeCategory) || null;
  };

  return (
    <MegaMenuWrapper isOpen={isOpen} onClose={onClose}>
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="p-4">
          <div className="space-y-2">
            {softwareCategories.map((category) => (
              <div
                key={category.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => handleCategoryHover(category.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                    activeCategory === category.id 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <category.icon className={`w-5 h-5 transition-colors duration-200 ${
                    activeCategory === category.id ? 'text-blue-600' : 'text-gray-500'
                  }`} />
                  <span className={`font-medium transition-colors duration-200 text-sm ${
                    activeCategory === category.id ? 'text-blue-600' : 'text-gray-700'
                  }`}>
                    {category.title}
                  </span>
                  <ChevronRight className={`w-4 h-4 ml-auto transition-colors duration-200 ${
                    activeCategory === category.id ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </button>
                
                {/* Submenu */}
                {activeCategory === category.id && (
                  <div className="bg-gray-50 p-4 space-y-1">
                    {category.submenu.map((submenuItem, index) => (
                      <a
                        key={submenuItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-200"
                        onClick={onClose}
                      >
                        {submenuItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
