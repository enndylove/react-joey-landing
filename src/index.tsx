import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';

import ThemeProvider from "./theme/ThemeProvider";

import './styles/_main.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ThemeProvider>
          <Home />
      </ThemeProvider>
  </React.StrictMode>
);