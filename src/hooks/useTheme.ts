import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../lib/theme';
import { 
  getStoredTheme, 
  setStoredTheme, 
  applyTheme, 
  getSystemTheme 
} from '../lib/theme';

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>(() => getStoredTheme());
  const [isDark, setIsDark] = useState(() => {
    const stored = getStoredTheme();
    return stored === 'system' ? getSystemTheme() === 'dark' : stored === 'dark';
  });

  // Initialize theme after mount to avoid hydration mismatch
  useEffect(() => {
    const stored = getStoredTheme();
    applyTheme(stored);
    
    // Use requestAnimationFrame to avoid setState in render warning
    requestAnimationFrame(() => {
      setMounted(true);
    });
  }, []);

  // Update isDark when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const updateDarkMode = () => {
      const dark = theme === 'system' ? getSystemTheme() === 'dark' : theme === 'dark';
      setIsDark(dark);
    };
    
    updateDarkMode();
  }, [theme, mounted]);

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        setIsDark(getSystemTheme() === 'dark');
        applyTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    setStoredTheme(newTheme);
    applyTheme(newTheme);
    setIsDark(newTheme === 'system' ? getSystemTheme() === 'dark' : newTheme === 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const currentEffective = theme === 'system' ? getSystemTheme() : theme;
    const newTheme = currentEffective === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
    isDark
  };
}
