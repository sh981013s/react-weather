import React, { useState, useEffect } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { LightTheme, DarkTheme } from '../../../utility/Theme';
import DarkModeToggle from 'react-dark-mode-toggle';

const ThemeSelector = (props) => {
  const { changeTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  useEffect(() => {
    if (isDarkMode) {
      changeTheme({ ...DarkTheme });
    } else {
      changeTheme({ ...LightTheme });
    }
  }, [changeTheme, isDarkMode]);

  return (
    <DarkModeToggle size={70} onChange={setIsDarkMode} checked={isDarkMode} />
  );
};

export default ThemeSelector;
