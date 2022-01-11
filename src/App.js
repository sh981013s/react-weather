import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/index';
import { lightTheme } from './utility/Theme';

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
