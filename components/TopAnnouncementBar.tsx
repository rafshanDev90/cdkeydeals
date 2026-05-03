'use client'

import React, { useState, useEffect } from 'react'
import { X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const TopAnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const isClosed = localStorage.getItem('announcement-closed')
    if (!isClosed) {
      setIsVisible(true)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('announcement-closed', 'true')
  }

  if (!isMounted || !isVisible) {
    return null
  }

  return (
    <div className="relative text-white bg-gradient-to-r from-[#7fa8c9] to-[#c87d5e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-1.5">
          <div className="flex items-center space-x-2 sm:space-x-3 text-center">
            
            <span className="text-xs sm:text-sm font-medium">
              Get 26% OFF on Windows 11 Pro and Microsoft Office 2024 Pro Plus using{' '}
              <span className="font-bold text-yellow-300">MEGA26</span> promo!
            </span>

            <Link
              href="/collections"
              className="inline-flex items-center space-x-1 text-yellow-300 text-xs sm:text-sm font-semibold hover:text-yellow-100 transition-colors duration-200 focus:outline-none"
              aria-label="Shop now for 26% discount"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>

          </div>
        </div>
      </div>

      <button
        onClick={handleClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
        aria-label="Close announcement banner"
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  )
}

export default TopAnnouncementBar