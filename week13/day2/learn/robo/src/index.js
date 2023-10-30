import React from 'react';
import ReactDOM from 'react-dom/client';
import './containers/index.css';
import ErrorBoundry from './components/ErrorBoundry'

import App from './containers/App';

import 'tachyons'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundry>
    <App/>
  </ErrorBoundry>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
