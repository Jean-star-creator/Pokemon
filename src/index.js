// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa App sem .jsx, pois o Webpack/Babel resolve

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);