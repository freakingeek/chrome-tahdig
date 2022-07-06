import { GlobalContextProvider } from './context/global';
import ReactDOM from 'react-dom/client';
import App from './container/App';
import React from 'react';

import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
