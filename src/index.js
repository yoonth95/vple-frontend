import React from 'react';
import {RecoilRoot} from 'recoil';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <GlobalStyle/>
      <RecoilRoot>
        <App/>
      </RecoilRoot>
  </React.StrictMode>
);
