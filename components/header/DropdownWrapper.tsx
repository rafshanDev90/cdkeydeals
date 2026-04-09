"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

interface DropdownWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * DropdownWrapper - Provides properly positioned dropdown container
 * 
 * This component solves the dropdown positioning issue by:
 * 1. Using absolute positioning relative to the navigation bar
 * 2. Positioning exactly below the header (top-full)
 * 3. Providing full-width design with proper z-index
 * 4. Ensuring dropdown sits on top of main content
 */
export default function DropdownWrapper({ 
  isOpen, 
  onClose, 
  children, 
  className = "" 
}: DropdownWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle escape key and outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const header = document.querySelector('header');
      if (
        wrapperRef.current && 
        !wrapperRef.current.contains(target) &&
        header && 
        !header.contains(target)
      ) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={wrapperRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className={`absolute left-0 right-0 top-full z-50 -mt-[20px] ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
