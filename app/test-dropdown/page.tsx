"use client";

import { useState } from "react";
import MoreDropdown from "@/components/header/MoreDropdown";

export default function TestDropdown() {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">More Dropdown Test</h1>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Navbar Simulation</h2>
          <div className="flex items-center gap-6">
            <span className="text-gray-600">Games</span>
            <span className="text-gray-600">Software</span>
            <span className="text-gray-600">Best Deals</span>
            <MoreDropdown 
              isOpen={isMoreDropdownOpen}
              onHover={() => setIsMoreDropdownOpen(true)}
              onLeave={() => setIsMoreDropdownOpen(false)}
            />
            <span className="text-gray-600">FAQ</span>
          </div>
        </div>

        <div className="mt-8 bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Instructions</h2>
          <p className="text-gray-600">Hover over the "More" link to test the dropdown menu.</p>
          <p className="text-gray-600 mt-2">Expected behavior:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Dropdown appears on hover</li>
            <li>Smooth animation with Framer Motion</li>
            <li>Chevron icon rotates when dropdown is open</li>
            <li>Menu items have hover states (gray background)</li>
            <li>Dropdown stays open when moving mouse to menu items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
