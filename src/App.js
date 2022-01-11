import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import GlobalStyle from './globalStyles';
import { lightTheme } from './utility/Theme';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
