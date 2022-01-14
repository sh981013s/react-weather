import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/general/Navbar/Navbar';
import { Home } from './pages/index';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';
import { useTheme } from './hooks/useTheme';

const App = () => {
  const { theme } = useTheme();

  const Box = styled.div`
    width: 100%;
    min-height: 100vh;
  `;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={theme.themeName === 'lightTheme' ? LightTheme : DarkTheme}
      >
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
