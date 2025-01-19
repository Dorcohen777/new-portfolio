import React from 'react';
import ReactDOM from 'react-dom/client';
import { RootCmp } from './root-cmp';
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <RootCmp />
  </Router>
);

