"use client";

import { useState } from "react";
import { 
  Monitor, 
  Palette, 
  Shield, 
  Download, 
  ChevronRight 
} from "lucide-react";
import DropdownWrapper from "./DropdownWrapper";

interface MegaMenuProps {
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

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const getActiveCategoryData = () => {
    if (!activeCategory) return null;
    return softwareCategories.find(cat => cat.id === activeCategory) || null;
  };

  return (
    <DropdownWrapper isOpen={isOpen} onClose={onClose}>
      <div className="rounded-xl overflow-hidden">
        <div className="flex h-[400px]">
          {/* Left Sidebar - Category List */}
          <div className="w-1/3 bg-slate-50 p-4 border-r border-gray-100">
            <div className="space-y-1">
              {softwareCategories.map((category) => (
                <div
                  key={category.id}
                  className="group"
                  onMouseEnter={() => handleCategoryHover(category.id)}
                >
                  <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeCategory === category.id 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'hover:bg-white hover:text-blue-600 text-slate-700'
                    }`}
                  >
                    <category.icon className={`w-5 h-5 transition-colors duration-200 ${
                      activeCategory === category.id ? 'text-blue-600' : 'text-slate-500 group-hover:text-blue-600'
                    }`} />
                    <span className={`font-medium transition-colors duration-200 text-sm ${
                      activeCategory === category.id ? 'text-blue-600' : 'text-slate-700 group-hover:text-blue-600'
                    }`}>
                      {category.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-colors duration-200 ${
                      activeCategory === category.id ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content Area - Sub-menu */}
          <div className="flex-1 bg-white p-6">
            {getActiveCategoryData() ? (
              <div className="h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {getActiveCategoryData()?.title}
                  </h3>
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {getActiveCategoryData()?.submenu.map((submenuItem, index) => (
                    <a
                      key={submenuItem}
                      href="#"
                      className="flex items-center px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                      onClick={onClose}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-slate-400 group-hover:text-blue-600 transition-colors duration-200" />
                      <span className="text-sm font-medium">{submenuItem}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-10 h-10 text-slate-400" />
                  </div>
                  <p className="text-slate-500 text-sm font-medium">Hover over a category to explore software options</p>
                  <p className="text-slate-400 text-xs mt-2">Choose from Microsoft, Creative tools, Security, and Utilities</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DropdownWrapper>
  );
}
