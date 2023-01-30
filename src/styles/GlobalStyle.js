import React from 'react';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #F4F1FA;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .App {
    background-color: #F4F1FA;
    max-width: 500px;
    height: 100vh;
    margin: 0 auto;
  }
`;

export default GlobalStyle;