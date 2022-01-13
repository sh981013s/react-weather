import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../hooks/useTheme';
import { LightTheme, DarkTheme } from '../../../utility/Theme';

const ThemeSelectorStyled = styled.div`
  width: 10px;
  height: 10px;
  background: green;
`;

const ThemeSelector = () => {
  const { theme, changeTheme } = useTheme();

  const themeHandler = () => {
    console.log(theme.themeName);
    if (theme.themeName === 'lightTheme') {
      changeTheme({ ...DarkTheme });
    } else {
      changeTheme({ ...LightTheme });
    }
  };

  return <ThemeSelectorStyled onClick={themeHandler} />;
};

export default ThemeSelector;
