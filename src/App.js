import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/general/Navbar/Navbar';
import { Home, Login, SignUp, WeatherDetail, AddCity } from './pages/index';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';
import { useTheme } from './hooks/useTheme';
import Loader from './components/general/Loader';
import { useAuthContext } from './hooks/useAuthContext';

const ContentBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const { theme } = useTheme();
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={theme.themeName === 'lightTheme' ? LightTheme : DarkTheme}
      >
        {authIsReady && (
          <Router>
            <Navbar />

            <ContentBox>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                {user && <Redirect to="/" />}
                <Login />
              </Route>
              <Route exact path="/signup">
                {user && <Redirect to="/" />}
                <SignUp />
              </Route>
              <Route exact path="/addcity">
                {!user && <Redirect to="/login" />}
                <AddCity />
              </Route>
              <Route path="/city/:name/:lat/:long" component={WeatherDetail} />
            </ContentBox>
          </Router>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
