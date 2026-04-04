'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Games',
    href: '/games',
    dropdown: [
      { name: 'Steam Games', href: '/games/steam' },
      { name: 'Xbox Games', href: '/games/xbox' },
      { name: 'PlayStation Games', href: '/games/playstation' },
      { name: 'Nintendo Games', href: '/games/nintendo' },
    ],
  },
  {
    name: 'Software',
    href: '/software',
    dropdown: [
      { name: 'Windows Keys', href: '/software/windows' },
      { name: 'Office Keys', href: '/software/office' },
      { name: 'Antivirus', href: '/software/antivirus' },
      { name: 'Productivity', href: '/software/productivity' },
    ],
  },
  {
    name: 'Gift Cards',
    href: '/gift-cards',
    dropdown: [
      { name: 'Steam Gift Cards', href: '/gift-cards/steam' },
      { name: 'PlayStation Network', href: '/gift-cards/playstation' },
      { name: 'Xbox Gift Cards', href: '/gift-cards/xbox' },
      { name: 'iTunes Cards', href: '/gift-cards/itunes' },
    ],
  },
  {
    name: 'Best Sellers',
    href: '/best-seller',
  },
  {
    name: 'Deals',
    href: '/deals',
  },
  {
    name: 'Support',
    href: '/support',
  },
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                            pathname === dropdownItem.href
                              ? 'text-blue-600 bg-blue-50'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation - Simple version */}
          <div className="md:hidden flex items-center space-x-2 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  )
}
