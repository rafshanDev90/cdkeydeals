"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface MegaMenuWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * MegaMenuWrapper - Provides full-width dropdown container
 * 
 * This component solves the dropdown layout issue by:
 * 1. Using fixed positioning to break out of container constraints
 * 2. Calculating proper top position based on navbar element
 * 3. Providing full viewport width with internal content alignment
 * 4. Handling proper z-index and overflow management
 */
export default function MegaMenuWrapper({ 
  isOpen, 
  onClose, 
  children, 
  className = "" 
}: MegaMenuWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle escape key and outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Prevent body scroll when dropdown is open
    const preventScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.addEventListener('touchmove', preventScroll, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Full-width dropdown container */}
          <motion.div
            ref={wrapperRef}
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
              scale: { type: "spring", stiffness: 300, damping: 25 }
            }}
            className={`fixed left-0 right-0 top-[52px] z-50 ${className}`}
            style={{
              maxHeight: 'calc(100vh - 52px)',
              overflowY: 'auto'
            }}
          >
            {/* Content container with proper alignment */}
            <div className="w-full bg-[#1E1E1E] shadow-2xl">
              <div className="max-w-screen-2xl mx-auto">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
