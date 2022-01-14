import { createContext, useReducer } from 'react';
import { LightTheme, DarkTheme } from '../utility/Theme';

export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const changeTheme = (theme) => {
    dispatch({ type: 'CHANGE_THEME', payload: theme });
  };

  const [state, dispatch] = useReducer(themeReducer, {
    theme: LightTheme,
    changeTheme,
  });

  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};
