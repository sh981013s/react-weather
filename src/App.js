import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/general/Navbar/Navbar';
import { Home } from './pages/index';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';
import { useTheme } from './hooks/useTheme';
import Loader from './components/general/Loader';

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={theme.themeName === 'lightTheme' ? LightTheme : DarkTheme}
      >
        {/* <Loader /> */}
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
