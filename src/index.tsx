import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createFakeApi } from './services/api'

createFakeApi();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
