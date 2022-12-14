import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppProvider from './store/AppProvider';
import './i18n.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HashRouter>
);

