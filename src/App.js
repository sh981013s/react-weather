import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/general/Navbar/Navbar';
import { Home, Login, WeatherDetail, AddCity } from './pages/index';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';
import { useTheme } from './hooks/useTheme';
import Loader from './components/general/Loader';
import { auth, signInWithGoogle } from './firebase/firebaseConfig';

const ContentBox = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const { theme } = useTheme();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user !== null) {
        console.log('logged in');
        console.log(user);
      } else {
        console.log('no user');
      }
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider
        theme={theme.themeName === 'lightTheme' ? LightTheme : DarkTheme}
      >
        {/* <Loader /> */}

        <Router>
          <Navbar />

          <ContentBox>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/addcity" component={AddCity} />
            <Route path="/city/:name/:lat/:long" component={WeatherDetail} />
          </ContentBox>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
