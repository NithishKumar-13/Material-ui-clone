import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import SnackbarProvider from 'react-simple-snackbar'

import App from './App';

ReactDOM.render(
  <Router>
  <SnackbarProvider>
    <App />
  </SnackbarProvider>
  </Router>,
  document.getElementById('root')
);

