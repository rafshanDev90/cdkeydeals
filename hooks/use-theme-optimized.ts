'use client';

import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function useThemeOptimized() {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Add theme transition class to prevent flicker
  const handleThemeChange = (newTheme: string) => {
    const html = document.documentElement;
    html.classList.add('theme-transitioning');
    
    setTheme(newTheme);
    
    // Remove the class after a short delay
    setTimeout(() => {
      html.classList.remove('theme-transitioning');
    }, 150);
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    handleThemeChange(newTheme);
  };

  return {
    theme: mounted ? theme : 'system',
    setTheme: handleThemeChange,
    resolvedTheme: mounted ? resolvedTheme : 'light',
    systemTheme,
    mounted,
    toggleTheme,
    isDark: mounted ? resolvedTheme === 'dark' : false,
    isLight: mounted ? resolvedTheme === 'light' : true,
  };
}
