import React from 'react';
import {RecoilRoot} from 'recoil';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from "./styles/GlobalStyle";
import BottomNav from './components/bottomNav/BottomNav';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <GlobalStyle/>
      <RecoilRoot>
        {/* <BrowserRouter>
          <BottomNav/>
        </BrowserRouter> */}
        <App/>
      </RecoilRoot>
  </React.StrictMode>
);
