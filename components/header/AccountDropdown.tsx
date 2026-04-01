"use client";

import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import { SignInModal } from "@/components/auth/SignInModal";
import { useRouter } from "next/navigation";

export default function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Login Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium"
      >
        <User className="w-4 h-4" />
        <span>Login</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
          {/* Dropdown Content */}
          <div className="p-6">
            {/* Account Header */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Account</h3>
              <p className="text-sm text-gray-500">
                Sign In or Create an Account to Unlock All Access
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Create Account Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSignInModalOpen(true);
                }}
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Create Account
              </button>

              {/* Log In Button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsSignInModalOpen(true);
                }}
                className="w-full py-3 px-4 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold rounded-lg transition-all duration-200"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      <SignInModal 
        open={isSignInModalOpen} 
        onOpenChange={setIsSignInModalOpen} 
      />
    </div>
  );
}
