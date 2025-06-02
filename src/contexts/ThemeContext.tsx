
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ThemeType = 'night' | 'day';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  themeConfig: {
    background: string;
    accent: string;
    text: string;
    secondary: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themeConfigs = {
  night: {
    background: 'from-[#0A0A0A] via-[#1A1A1A] to-black',
    accent: '#D4AF37', // Gold
    text: '#FFFFFF',
    secondary: '#8B7355'
  },
  day: {
    background: 'from-[#F8F6F0] via-[#FEFCF5] to-white',
    accent: '#8B4513', // Champagne Brown
    text: '#2C2C2C',
    secondary: '#A0956B'
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('night');

  useEffect(() => {
    const savedTheme = localStorage.getItem('chronos-theme') as ThemeType;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('chronos-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'night' ? 'day' : 'night');
  };

  const themeConfig = themeConfigs[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
};
