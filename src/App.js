import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import GlobalStyle from './globalStyles';
import { LightTheme, DarkTheme } from './utility/Theme';

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
