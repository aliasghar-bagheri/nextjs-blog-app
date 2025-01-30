'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'dark' | 'light';

interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const existTheme = localStorage.getItem('theme');

    if (existTheme && existTheme === 'light') {
      document.documentElement.classList.add('light');
      setTheme(existTheme);
    } else {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme should be used within ThemeProvider.');

  return context;
}
