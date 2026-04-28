'use client';

import { Moon, Sun } from 'lucide-react';
import { useThemeOptimized } from '@/hooks/use-theme-optimized';

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'minimal' | 'icon-only';
}

export function ThemeSwitcher({ 
  className = '',
  showLabel = true,
  variant = 'default'
}: ThemeSwitcherProps) {
  const { resolvedTheme, mounted, toggleTheme } = useThemeOptimized();

  if (!mounted) {
    // Render placeholder to prevent layout shift
    return (
      <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${className}`}>
        {showLabel && <span className="opacity-0">Theme</span>}
        <div className="w-4 h-4 opacity-0" />
      </div>
    );
  }

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Light Mode' : 'Dark Mode';
  const Icon = isDark ? Sun : Moon;

  if (variant === 'icon-only') {
    return (
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${className}`}
        aria-label={label}
        title={label}
      >
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
    );
  }

  if (variant === 'minimal') {
    return (
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${className}`}
        aria-label={label}
      >
        <Icon className="w-4 h-4 text-amber-500 dark:text-gray-400" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${className}`}
      aria-label={label}
    >
      {showLabel && <span>{label}</span>}
      <Icon className="w-4 h-4 text-amber-500 dark:text-gray-400" />
    </button>
  );
}
