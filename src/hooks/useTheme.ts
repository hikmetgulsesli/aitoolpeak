import { useState, useEffect, useCallback, useSyncExternalStore } from 'react';
import type { Theme } from '../lib/theme.js';
import { 
  getStoredTheme, 
  setStoredTheme, 
  applyTheme, 
  getSystemTheme 
} from '../lib/theme.js';

function getServerSnapshot() {
  return 'system' as Theme;
}

function getClientSnapshot() {
  return getStoredTheme();
}

function subscribe(callback: () => void) {
  const handler = () => callback();
  window.addEventListener('storage', handler);
  return () => window.removeEventListener('storage', handler);
}

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const theme = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [isDark, setIsDark] = useState(false);

  // Initialize theme after mount to avoid hydration mismatch
  useEffect(() => {
    const stored = getStoredTheme();
    const dark = stored === 'system' ? getSystemTheme() === 'dark' : stored === 'dark';
    applyTheme(stored);
    // Batch state updates to avoid cascading renders
    const timer = setTimeout(() => {
      setIsDark(dark);
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
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
