import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    console.log('useTheme() must be used inside a ThemeProvider');
    throw new Error('useTheme() must be used inside a ThemeProvider');
  }

  return context;
};
