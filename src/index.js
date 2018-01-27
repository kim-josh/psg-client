import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';

import './assets/semantic/dist/semantic.min.css';
import './css/screen.min.css';



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

