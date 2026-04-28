(function() {
  try {
    // Set CSS custom properties to prevent flash
    var html = document.documentElement;
    html.style.setProperty('color-scheme', 'light');
    
    var theme = localStorage.getItem('cdkeydeals-theme') || 'system';
    var resolvedTheme = theme;
    
    if (theme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    if (resolvedTheme === 'dark') {
      html.classList.add('dark');
      html.style.setProperty('color-scheme', 'dark');
    } else {
      html.classList.remove('dark');
      html.style.setProperty('color-scheme', 'light');
    }
    
    // Remove the style after a short delay to allow CSS transitions to work normally
    setTimeout(function() {
      html.style.removeProperty('color-scheme');
    }, 100);
  } catch (e) {}
})();
