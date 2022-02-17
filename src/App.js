import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from './components/general/Navbar/Navbar';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';
import { useTheme } from './hooks/useTheme';
import { useAuthContext } from './hooks/useAuthContext';
import { WaveLoading } from 'react-loadingg';

// pages
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const WeatherDetail = lazy(() => import('./pages/WeatherDetail/WeatherDetail'));
const AddCity = lazy(() => import('./pages/AddCity/AddCity'));

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
        <Suspense fallback={<WaveLoading />}>
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
                <Route path="/city/:name/:lat/:long" component={WeatherDetail}>
                  {!user && <Redirect to="/login" />}
                </Route>
              </ContentBox>
            </Router>
          )}
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
