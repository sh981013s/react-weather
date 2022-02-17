import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,*::before,*::after,h1,h2,h3,h4,h5,h6 {
      margin: 0;
      padding: 0;
    }
    h1,h2,h3,h4,h5,h6 {
      display: inline-block;
    }
    body {
      margin: 0;
      padding: 0;
      /* overflow-x: hidden; */
      font-family: 'Varela Round', sans-serif;
    }
`;

export default GlobalStyle;
