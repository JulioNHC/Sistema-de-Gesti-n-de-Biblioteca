import React from 'react';
import ReactDOM from 'react-dom/client'; // correcto para React 18
import './assetss/css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
