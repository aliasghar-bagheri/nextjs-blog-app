'use client';

import ButtonIcon from '@/components/ui/ButtonIcon';
import { useTheme } from './ThemeProvider';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useCallback, useEffect, useState } from 'react';

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  const themeToggle = useCallback(() => {
    const themeChange = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', themeChange);
    setTheme(themeChange);
  }, [theme, setTheme]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <ButtonIcon onClick={themeToggle}>{theme === 'dark' ? <SunIcon /> : <MoonIcon />}</ButtonIcon>
  ) : null;
}
