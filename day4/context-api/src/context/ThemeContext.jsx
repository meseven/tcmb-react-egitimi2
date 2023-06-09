import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const defaultTheme = localStorage.getItem('theme') || 'dark';

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme hook must be call inside ThemeContextProvider.');
  }

  return context;
};
