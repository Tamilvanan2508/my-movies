// components/ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  mode: ThemeMode;
  toggleMode: () => void;
} | undefined>(undefined);

const themes: Record<ThemeMode, Theme> = {
  light: {
    primaryColor: '#3498db',
    secondaryColor: '#2ecc71',
  },
  dark: {
    primaryColor: '#e74c3c',
    secondaryColor: '#f39c12',
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [theme, setTheme] = useState<Theme>(themes.light);

  const toggleMode = () => {
    const newMode: ThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    setTheme(themes[newMode]);
  };

  useEffect(() => {
    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial theme based on user preference
    setMode(prefersDarkMode ? 'dark' : 'light');
    setTheme(prefersDarkMode ? themes.dark : themes.light);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
