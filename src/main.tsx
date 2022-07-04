import ReactDOM from 'react-dom/client';
import App from './container/App';
import React from 'react';

import './assets/styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
