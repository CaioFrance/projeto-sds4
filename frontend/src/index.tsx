import React from 'react';
import ReactDOM from 'react-dom';

import '@popperjs/core'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

import {App} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);